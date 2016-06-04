package com.fishingApp.controllers;

import com.fishingApp.entities.User;
import com.fishingApp.services.UserRepository;
import com.fishingApp.utils.PasswordHash;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.PostConstruct;

/**
 * Created by holdenhughes on 6/3/16.
 */
@RestController
public class FishingAppController {
    @Autowired
    UserRepository users;

    @PostConstruct
    public void init() throws Exception {
        if (users.count() > 0) {
            return;
        } else
        {
            User user1 = new User();
            user1.username = "HoldenHughes";
            user1.password = PasswordHash.createHash("$OpenForDebate$");
            users.save(user1);
        }
    }
}
