package com.fishingApp.entities;

import javax.persistence.*;

/**
 * Created by holdenhughes on 7/3/16.
 */
@Entity
@Table(name = "boatLandings")
public class BoatLanding {
    @Id
    @GeneratedValue
    int id;

    @Column(nullable = false)
    public String name;

    @Column(nullable = true)
    public String owner;

    @Column(nullable = false)
    public String county;

    @Column(nullable = false)
    public String bodyOfWater;

    @Column(nullable = false)
    public String waterType;

    @Column(nullable = false)
    public double lat;

    @Column(nullable = false)
    public double lng;

    public BoatLanding() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getOwner() {
        return owner;
    }

    public void setOwner(String owner) {
        this.owner = owner;
    }

    public String getCounty() {
        return county;
    }

    public void setCounty(String county) {
        this.county = county;
    }

    public String getBodyOfWater() {
        return bodyOfWater;
    }

    public void setBodyOfWater(String bodyOfWater) {
        this.bodyOfWater = bodyOfWater;
    }

    public String getWaterType() {
        return waterType;
    }

    public void setWaterType(String waterType) {
        this.waterType = waterType;
    }

    public double getLat() {
        return lat;
    }

    public void setLat(double lat) {
        this.lat = lat;
    }

    public double getLng() {
        return lng;
    }

    public void setLng(double lng) {
        this.lng = lng;
    }
}
