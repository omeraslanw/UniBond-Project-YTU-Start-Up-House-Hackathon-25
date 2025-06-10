package com.unibond.dto;

import lombok.Data;

@Data
public class StudentRegisterRequest {
    private String name;
    private String email;
    private String password;
    private String profileImage;
    private String bio;
} 