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
}
