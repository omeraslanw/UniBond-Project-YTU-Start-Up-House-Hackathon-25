package com.unibond.dto;

import lombok.Data;

@Data
public class StudentLoginRequest {
    private String email;
    private String password;
} 