import React, { useState, useRef, useEffect } from 'react';
import { Container, Card, Form, Button, InputGroup, Spinner } from 'react-bootstrap';
import axios from 'axios';

const initialMessages = [
  { from: 'bot', text: 'Merhaba! Sana nasıl yardımcı olabilirim?' }
];

const AVATARS = {
  user: '🧑',
  bot: '🤖',
};

const ChatBot = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setMessages(prev => [...prev, { from: 'user', text: input }]);
    setLoading(true);
    try {
      const response = await axios.post('http://127.0.0.1:5001/api/chat', { question: input });
      setMessages(prev => [...prev, { from: 'bot', text: response.data.answer }]);
    } catch (err) {
      setMessages(prev => [...prev, { from: 'bot', text: 'Bir hata oluştu, lütfen tekrar deneyin.' }]);
    } finally {
      setLoading(false);
      setInput('');
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '80vh', background: 'linear-gradient(135deg, #e0e7ff 0%, #f8fafc 100%)', padding: '32px 0' }}>
      <Card className="shadow-lg w-100" style={{ maxWidth: '480px', borderRadius: 32, background: '#fff', minHeight: 540, border: 'none' }}>
        <Card.Body className="d-flex flex-column p-0" style={{ height: 540 }}>
          <div className="p-4 border-bottom d-flex align-items-center gap-2" style={{ borderTopLeftRadius: 32, borderTopRightRadius: 32, background: '#f1f5f9' }}>
            <img src="/UniBondLogo.png" alt="UniBond Logo" style={{ width: 38, height: 38, borderRadius: 12, marginRight: 10 }} />
            <h4 className="fw-bold m-0" style={{ letterSpacing: 1 }}>AI Chat Bot</h4>
          </div>
          <div className="flex-grow-1 overflow-auto px-3 py-3" style={{ background: '#f8fafc', display: 'flex', flexDirection: 'column' }}>
            {messages.map((msg, idx) => (
              <div key={idx} className={`d-flex mb-3 ${msg.from === 'user' ? 'justify-content-end' : 'justify-content-start'}`} style={{ alignItems: 'flex-end' }}>
                {msg.from === 'bot' && (
                  <span style={{ fontSize: 28, marginRight: 8 }}>{AVATARS.bot}</span>
                )}
                <div
                  style={{
                    background: msg.from === 'user' ? 'linear-gradient(135deg, #2563eb 0%, #60a5fa 100%)' : '#fff',
                    color: msg.from === 'user' ? '#fff' : '#222',
                    borderRadius: msg.from === 'user' ? '20px 20px 4px 20px' : '20px 20px 20px 4px',
                    padding: '12px 20px',
                    maxWidth: '75%',
                    boxShadow: '0 2px 12px rgba(0,0,0,0.07)',
                    fontSize: '1.08rem',
                    wordBreak: 'break-word',
                    position: 'relative',
                    minWidth: 60
                  }}
                >
                  {msg.text}
                </div>
                {msg.from === 'user' && (
                  <span style={{ fontSize: 28, marginLeft: 8 }}>{AVATARS.user}</span>
                )}
              </div>
            ))}
            {loading && (
              <div className="d-flex mb-2 justify-content-start align-items-center gap-2">
                <span style={{ fontSize: 28, marginRight: 8 }}>{AVATARS.bot}</span>
                <div style={{
                  background: '#fff', color: '#333', borderRadius: 20, padding: '12px 20px', maxWidth: '75%', boxShadow: '0 2px 12px rgba(0,0,0,0.07)', fontSize: '1.08rem', display: 'flex', alignItems: 'center', gap: 8
                }}>
                  <Spinner animation="border" size="sm" className="me-2" /> Yanıtlanıyor...
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          <Form onSubmit={handleSend} className="p-4 border-top bg-white" style={{ borderBottomLeftRadius: 32, borderBottomRightRadius: 32 }}>
            <InputGroup>
              <Form.Control
                type="text"
                placeholder="Mesajınızı yazın..."
                value={input}
                onChange={e => setInput(e.target.value)}
                style={{ fontSize: '1.13rem', borderRadius: 16, boxShadow: '0 1px 4px rgba(0,0,0,0.04)' }}
                disabled={loading}
                autoFocus
              />
              <Button variant="primary" type="submit" style={{ borderRadius: 16, fontWeight: 600, fontSize: 17, minWidth: 100, marginLeft: 8, boxShadow: '0 1px 4px rgba(0,0,0,0.04)' }} disabled={loading}>Gönder</Button>
            </InputGroup>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ChatBot; 