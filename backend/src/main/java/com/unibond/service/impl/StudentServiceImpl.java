package com.unibond.service.impl;

import com.unibond.entity.Student;
import com.unibond.repository.StudentRepository;
import com.unibond.service.StudentService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class StudentServiceImpl implements StudentService {
    private final StudentRepository studentRepository;

    @Override
    public Student register(Student student) {
        return studentRepository.save(student);
    }

    @Override
    public Optional<Student> findByEmail(String email) {
        return studentRepository.findByEmail(email);
    }

    @Override
    public Optional<Student> findById(Long id) {
        return studentRepository.findById(id);
    }
} 