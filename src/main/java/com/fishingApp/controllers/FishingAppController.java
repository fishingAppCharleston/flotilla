package com.fishingApp.controllers;

import com.fishingApp.entities.BoatLanding;
import com.fishingApp.entities.User;
import com.fishingApp.services.BoatLandingsRepository;
import com.fishingApp.services.UserRepository;
import com.fishingApp.utils.PasswordHash;
import com.sun.org.apache.regexp.internal.RE;
import org.h2.tools.Server;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;
import java.io.File;
import java.io.FileReader;

/**
 * Created by holdenhughes on 6/3/16.
 */
@RestController
public class FishingAppController {
    @Autowired
    UserRepository users;

    @Autowired
    BoatLandingsRepository boatLandings;

    Server dbui = null;

    @PreDestroy
    public void destroy(){
        dbui.stop();
    }

    @PostConstruct
    public void init() throws Exception {
        dbui = Server.createWebServer().start();

        //populate DB with preliminary user
        if (users.count() > 0) {
            return;
        } else {
            User user1 = new User();
            user1.username = "HoldenHughes";
            user1.password = PasswordHash.createHash("$OpenForDebate$");
            users.save(user1);
        }

        //populate DB with boat landings
        if (boatLandings.count() > 0) {
            return;
        } else {
            //turn the file into a string and make it a JSON object
            String jsonString = readFile("boat-landings-raw.json");
            JSONObject object = new JSONObject(jsonString);
            //parse the upper most object
            JSONObject getObject = object.getJSONObject("landings");
            //parse the array
            JSONArray getArray = getObject.getJSONArray("features");

            //loop through the array
            for (int i = 0; i < getArray.length(); i++) {
                BoatLanding boatLanding = new BoatLanding();
                JSONObject objectInArray = getArray.getJSONObject(i);
                //pull out the inner object
                JSONObject getObjectInner = objectInArray.optJSONObject("properties");
                //create an array of its elements
                String[] elementNames = JSONObject.getNames(getObjectInner);
                for (String elementName : elementNames) {
                    if (elementName.equals("ACCESS_NAM")) {
                        boatLanding.name = getObjectInner.getString(elementName);
                    } else if (elementName.equals("OWNER")) {
                        //some of the boat landings have NULL as their owner value
                        if(getObjectInner.isNull("OWNER")){
                            boatLanding.owner = "N/A";
                        }else
                        boatLanding.owner = getObjectInner.getString(elementName);
                    } else if (elementName.equals("COUNTY")) {
                        boatLanding.county = getObjectInner.getString(elementName);
                    } else if (elementName.equals("WATER_BODY")) {
                        boatLanding.bodyOfWater = getObjectInner.getString(elementName);
                    } else if (elementName.equals("DIVIDINGLN")) {
                        boatLanding.waterType = getObjectInner.getString(elementName);
                    } else if (elementName.equals("X")){
                        boatLanding.lat = getObjectInner.getDouble(elementName);
                    } else if (elementName.equals("Y")){
                        boatLanding.lng = getObjectInner.getDouble(elementName);
                    }
                }
                boatLandings.save(boatLanding);
            }
        }
    }

    @RequestMapping(path = "/landings", method = RequestMethod.GET)
    public ResponseEntity<Object> getLandings() {
        Iterable<BoatLanding> list = boatLandings.findAll();
        System.out.println();
        return new ResponseEntity<Object>(boatLandings.findAll(), HttpStatus.OK);
    }





    static String readFile(String fileName) {
        File f = new File(fileName);
        try {
            FileReader fr = new FileReader(f);
            int fileSize = (int) f.length();
            char[] fileContent = new char[fileSize];
            fr.read(fileContent);
            return new String(fileContent);
        } catch (Exception e) {
            return null;
        }
    }
}
