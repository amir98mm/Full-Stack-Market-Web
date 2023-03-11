package com.example.myFirstWeb.dao;

import com.example.myFirstWeb.beans.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserDAO extends JpaRepository<User,Integer> {
    User findByEmail(String email);
    User findByUsername(String username);
}
