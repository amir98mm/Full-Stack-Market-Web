package com.example.myFirstWeb.controllers;

import com.example.myFirstWeb.beans.LoginForm;
import com.example.myFirstWeb.beans.User;
import com.example.myFirstWeb.bl.UserBL;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("users")
@CrossOrigin
public class UserController {
    @Autowired
    UserBL userBL;

    @PostMapping("add")
    public ResponseEntity addUser(@RequestBody User user){
        User newUser = this.userBL.addUser(user);
        return ResponseEntity.ok(newUser);
    }

    @DeleteMapping("delete")
    public ResponseEntity deleteUserByUsername(@RequestBody String username){
        User newUser = this.userBL.deleteUserByUsername(username);
        return ResponseEntity.ok(newUser);
    }

    @PostMapping("login")
    public ResponseEntity login(@RequestBody LoginForm form){
        String password = form.getPassword();
        String username = form.getUsername();
        User user = this.userBL.getByUsername(username);
        if(user!=null && password.equals(user.getPassword())){
            return ResponseEntity.ok(user);
        }
        return ResponseEntity.status(HttpStatus.CONFLICT).body("Wrong info !");
    }

    @PostMapping("update")
    public ResponseEntity updateUser(@RequestBody User user){
        this.userBL.updateUser(user);
        User newUser = this.userBL.getByEmail(user.getEmail());
        return ResponseEntity.ok(newUser);

    }

}
