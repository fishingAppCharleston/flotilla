package com.fishingApp.services;

import com.fishingApp.entities.User;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by holdenhughes on 6/3/16.
 */
public interface UserRepository extends CrudRepository<User,Integer> {
    User findOneByUsername(String username);
}
