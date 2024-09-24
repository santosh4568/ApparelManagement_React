package com.example.apparelmanagement.Controller;

import com.example.apparelmanagement.Model.User;
import com.example.apparelmanagement.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping
    public ResponseEntity<User> registerUser(@RequestBody User user) {
        try{
            User savedUser = userRepository.save(user);
            return new ResponseEntity<>(savedUser, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/login")
    public ResponseEntity<String> loginUser(@RequestBody User user) {
        try {
            User savedUser = userRepository.findByUsername(user.getUsername());
            if (savedUser != null && savedUser.getPassword().equals(user.getPassword())) {
                return new ResponseEntity<>("Login Successful", HttpStatus.OK);
            } else {
                return new ResponseEntity<>("Invalid Credentials", HttpStatus.UNAUTHORIZED);
            }
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}