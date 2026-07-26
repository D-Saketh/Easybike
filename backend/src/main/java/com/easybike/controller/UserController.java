package com.easybike.controller;

import com.easybike.dto.CustomerDashboardDTO;
import com.easybike.dto.LoginRequest;
import com.easybike.dto.UserDTO;
import com.easybike.entity.User;
import com.easybike.service.DashboardService;
import com.easybike.service.UserService;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;
import com.easybike.dto.LoginResponse;

import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UserService userService;
    private final DashboardService dashboardService;

    public UserController(UserService userService,
                          DashboardService dashboardService) {
        this.userService = userService;
        this.dashboardService = dashboardService;
    }

    // CREATE
    @PostMapping
    public User createUser(@Valid @RequestBody User user) {
        return userService.saveUser(user);
    }

    // READ ALL
    @GetMapping
    public List<UserDTO> getAllUsers() {
        return userService.getAllUsers();
    }

    // READ BY ID
    @GetMapping("/{id}")
    public UserDTO getUserById(@PathVariable Long id) {
        return userService.getUserById(id);
    }

    // UPDATE
    @PutMapping("/{id}")
    public User updateUser(@PathVariable Long id,
                           @Valid @RequestBody User user) {
        return userService.updateUser(id, user);
    }

    // DELETE
    @DeleteMapping("/{id}")
    public String deleteUser(@PathVariable Long id) {
        userService.deleteUser(id);
        return "User Deleted Successfully";
    }

    // LOGIN
    @PostMapping("/login")
    public LoginResponse login(@RequestBody LoginRequest request) {
        return userService.login(request);
    }
    // PROFILE
    @GetMapping("/profile")
    public String profile() {
        return "Welcome User";
    }

    // CUSTOMER DASHBOARD
    @GetMapping("/dashboard")
    public CustomerDashboardDTO getDashboard() {
        return dashboardService.getCustomerDashboard();
    }
}