package com.unibond.service;

import com.unibond.entity.Student;
import java.util.Optional;

public interface StudentService {
    Student register(Student student);
    Optional<Student> findByEmail(String email);
    Optional<Student> findById(Long id);
} 