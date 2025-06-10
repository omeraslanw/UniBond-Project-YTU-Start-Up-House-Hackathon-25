package com.unibond.entity;

import lombok.*;
import javax.persistence.*;
import java.util.Set;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String email;
    private String password;
    private String profileImage;
    private String bio;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(
        name = "student_interest",
        joinColumns = @JoinColumn(name = "student_id"),
        inverseJoinColumns = @JoinColumn(name = "interest_id")
    )
    private Set<StudentInterest> interests;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(
        name = "student_event",
        joinColumns = @JoinColumn(name = "student_id"),
        inverseJoinColumns = @JoinColumn(name = "event_id")
    )
    private Set<Event> events;

    @OneToMany(mappedBy = "createdBy")
    private Set<Event> createdEvents;
} 