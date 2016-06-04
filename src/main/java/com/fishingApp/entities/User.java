package com.fishingApp.entities;

import javax.persistence.*;

/**
 * Created by holdenhughes on 6/3/16.
 */
@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue
    int id;

    @Column(nullable = false)
    public String username;

    @Column(nullable = false)
    public String password;
}