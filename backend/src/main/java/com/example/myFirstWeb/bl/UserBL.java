package com.example.myFirstWeb.bl;

import com.example.myFirstWeb.beans.User;
import com.example.myFirstWeb.dao.UserDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserBL {
    @Autowired
    UserDAO userDAO;

    public User addUser(User user){
        this.userDAO.save(user);
        System.out.println("User added successfully!");
        return user;
    }

    public List<User> getAll(){
        return this.userDAO.findAll();
    }

    public User getByEmail(String email){
        return this.userDAO.findByEmail(email);
    }

    public User getByUsername(String username){
        return this.userDAO.findByUsername(username);
    }

    public User deleteUserByUsername(String username){
        User deletedUser = getByUsername(username);
        this.userDAO.deleteById(deletedUser.getId());
        return deletedUser;
    }

    public User updateUser(User user){
        User updatedUser = getByEmail(user.getEmail());
        if(!user.getBirthday().equals("")){
            updatedUser.setBirthday(user.getBirthday());
        }
        if(!user.getFirst().equals("")){
            updatedUser.setFirst(user.getFirst());
        }
        if(!user.getLast().equals("")){
            updatedUser.setLast(user.getLast());
        }
        if(!user.getGender().equals("")){
            updatedUser.setGender(user.getGender());
        }
        if(!user.getPhoneNumber().equals("")){
            updatedUser.setPhoneNumber(user.getPhoneNumber());
        }
        if(!updatedUser.getUsername().equals("")){
            updatedUser.setUsername(updatedUser.getUsername());
        }

        this.userDAO.save(updatedUser);
        return updatedUser;
    }
}
