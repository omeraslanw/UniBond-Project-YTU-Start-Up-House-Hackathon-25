import React, { useState } from 'react';
import { Container, Card, Form, Button, Alert } from 'react-bootstrap';

const Login = ({ setIsAuthenticated }) => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!form.email || !form.password) {
      setError('Tüm alanları doldurun.');
      return;
    }
    // Backend entegrasyonu burada olacak
    setSuccess(true);
    setError('');
    if (setIsAuthenticated) setIsAuthenticated(true);
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
      <Card className="shadow-lg w-100" style={{ maxWidth: 420, borderRadius: 24, background: '#f8f9fa' }}>
        <Card.Body className="p-5">
          <h2 className="fw-bold text-center mb-4">Giriş Yap</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          {success && <Alert variant="success">Giriş başarılı!</Alert>}
          <Form onSubmit={handleSubmit} autoComplete="off">
            <Form.Group className="mb-3" controlId="loginEmail">
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
            <Form.Group className="mb-4" controlId="loginPassword">
              <Form.Label>Şifre</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Şifrenizi girin"
                style={{ borderRadius: 12, fontSize: '1.1rem' }}
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100 py-2" style={{ borderRadius: 12, fontSize: '1.1rem' }}>
              Giriş Yap
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Login; 