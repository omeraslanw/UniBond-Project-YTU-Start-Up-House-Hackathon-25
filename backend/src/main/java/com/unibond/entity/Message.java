package com.unibond.entity;

import lombok.*;
import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Message {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "sender_id")
    private Student sender;

    @ManyToOne
    @JoinColumn(name = "receiver_id")
    private Student receiver;

    private String content;
    private LocalDateTime timestamp;
} 