package com.unibond.controller;

import com.unibond.dto.JwtResponse;
import com.unibond.dto.StudentLoginRequest;
import com.unibond.dto.StudentRegisterRequest;
import com.unibond.entity.Student;
import com.unibond.security.JwtTokenProvider;
import com.unibond.service.StudentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {
    private final StudentService studentService;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final JwtTokenProvider jwtTokenProvider;

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody StudentRegisterRequest request) {
        Student student = Student.builder()
                .name(request.getName())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .profileImage(request.getProfileImage())
                .bio(request.getBio())
                .build();
        studentService.register(student);
        return ResponseEntity.ok("Kayıt başarılı");
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody StudentLoginRequest request) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword())
        );
        Student student = studentService.findByEmail(request.getEmail()).orElseThrow();
        String token = jwtTokenProvider.generateToken(student.getEmail());
        return ResponseEntity.ok(new JwtResponse(token, "Bearer", student.getId(), student.getName(), student.getEmail()));
    }
} 