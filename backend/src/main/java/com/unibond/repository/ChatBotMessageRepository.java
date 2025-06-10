package com.unibond.repository;

import com.unibond.entity.ChatBotMessage;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ChatBotMessageRepository extends JpaRepository<ChatBotMessage, Long> {
} 