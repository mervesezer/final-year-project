package com.app.regularity.controllers;

import com.app.regularity.entities.User;
import com.app.regularity.services.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.UUID;

@RestController
@RequiredArgsConstructor
@RequestMapping("/users")
public class UserController implements BaseController<User> {
    private final UserService userService;

    @GetMapping
    public List<User> findAll(){
        return userService.findAll();
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public void saveOrUpdate(@RequestBody User user) {
        userService.saveOrUpdate(user);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable UUID id) {
        userService.delete(id);
    }

    @GetMapping("/{id}")
    public User findOne(@PathVariable UUID id) {
        return userService.findOne(id);
    }



}
