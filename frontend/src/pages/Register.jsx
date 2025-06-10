import React, { useState } from 'react';
import { Container, Card, Form, Button, Alert } from 'react-bootstrap';

const Register = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '', password2: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!form.name || !form.email || !form.password || !form.password2) {
      setError('Tüm alanları doldurun.');
      return;
    }
    if (form.password !== form.password2) {
      setError('Şifreler eşleşmiyor.');
      return;
    }
    setSuccess(true);
    setError('');
    // Backend entegrasyonu burada olacak
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
      <Card className="shadow-lg w-100" style={{ maxWidth: 420, borderRadius: 24, background: '#f8f9fa' }}>
        <Card.Body className="p-5">
          <h2 className="fw-bold text-center mb-4">Kayıt Ol</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          {success && <Alert variant="success">Kayıt başarılı! Giriş yapabilirsiniz.</Alert>}
          <Form onSubmit={handleSubmit} autoComplete="off">
            <Form.Group className="mb-3" controlId="registerName">
              <Form.Label>Ad Soyad</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Adınızı girin"
                style={{ borderRadius: 12, fontSize: '1.1rem' }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="registerEmail">
              <Form.Label>E-posta</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="E-posta adresinizi girin"
                style={{ borderRadius: 12, fontSize: '1.1rem' }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="registerPassword">
              <Form.Label>Şifre</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Şifre oluşturun"
                style={{ borderRadius: 12, fontSize: '1.1rem' }}
              />
            </Form.Group>
            <Form.Group className="mb-4" controlId="registerPassword2">
              <Form.Label>Şifre Tekrar</Form.Label>
              <Form.Control
                type="password"
                name="password2"
                value={form.password2}
                onChange={handleChange}
                placeholder="Şifrenizi tekrar girin"
                style={{ borderRadius: 12, fontSize: '1.1rem' }}
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100 py-2" style={{ borderRadius: 12, fontSize: '1.1rem' }}>
              Kayıt Ol
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Register; 