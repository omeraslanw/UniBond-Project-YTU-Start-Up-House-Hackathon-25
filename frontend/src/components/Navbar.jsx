import React, { useState, useRef, useEffect } from 'react';
import { Navbar, Nav, Container, Button, Badge, ListGroup, CloseButton, Image } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const notifications = [
  { id: 1, text: 'Yeni bir etkinlik eklendi: Teknik Seminer' },
  { id: 2, text: 'Spor Turnuvası için katılım onaylandı.' },
  { id: 3, text: 'Sanat Atölyesi yarın başlıyor!' }
];

const defaultUser = {
  name: 'Kullanıcı',
  avatarUrl: ''
};

function getInitials(name) {
  return name.split(' ').map(w => w[0]).join('').toUpperCase();
}

const AppNavbar = ({ isAuthenticated, onLogout, user = defaultUser }) => {
  const navigate = useNavigate();
  const notificationCount = notifications.length;
  const [showNotifications, setShowNotifications] = useState(false);
  const notifRef = useRef();

  const handleLogout = () => {
    if (onLogout) onLogout();
    navigate('/login');
  };

  const handleNotificationClick = () => {
    setShowNotifications((prev) => !prev);
  };

  // Dışarı tıklanınca paneli kapat
  useEffect(() => {
    function handleClickOutside(event) {
      if (notifRef.current && !notifRef.current.contains(event.target)) {
        setShowNotifications(false);
      }
    }
    if (showNotifications) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showNotifications]);

  return (
    <Navbar bg="primary" variant="dark" expand="lg" sticky="top">
      <Container className="position-relative">
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center gap-2">
          <img src="/UniBondLogo.png" alt="UniBond Logo" style={{ width: 36, height: 36, borderRadius: 8, marginRight: 8 }} />
          <span style={{ fontWeight: 700, fontSize: 22, letterSpacing: 1 }}>UniBond</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Etkinlikler</Nav.Link>
            {/* {isAuthenticated && <Nav.Link as={Link} to="/profile">Profilim</Nav.Link>} */}
            {isAuthenticated && <Nav.Link as={Link} to="/messages">Mesajlar</Nav.Link>}
            <Nav.Link as={Link} to="/chatbot">AI Chat Bot</Nav.Link>
          </Nav>
          <Nav className="align-items-center" style={{ position: 'relative' }}>
            {isAuthenticated && (
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: '50%',
                  background: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                  cursor: 'pointer',
                  border: '2px solid #0d6efd',
                  marginRight: 16
                }}
                onClick={() => navigate('/profile')}
                title="Profilim"
              >
                {user && user.avatarUrl ? (
                  <Image src={user.avatarUrl} roundedCircle width={36} height={36} alt={user.name} />
                ) : (
                  <span style={{
                    width: 36,
                    height: 36,
                    borderRadius: '50%',
                    background: '#e3e3e3',
                    color: '#0d6efd',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 'bold',
                    fontSize: 18
                  }}>{getInitials(user && user.name ? user.name : defaultUser.name)}</span>
                )}
              </div>
            )}
            <div style={{ position: 'relative', marginRight: 16, cursor: 'pointer' }} title="Bildirimler" onClick={handleNotificationClick}>
              <span style={{ fontSize: 24 }}>🔔</span>
              {notificationCount > 0 && (
                <Badge bg="danger" pill style={{ position: 'absolute', top: -6, right: -10, fontSize: 12 }}>{notificationCount}</Badge>
              )}
            </div>
            {showNotifications && (
              <div
                ref={notifRef}
                style={{
                  position: 'absolute',
                  top: 48,
                  right: 60,
                  width: 340,
                  background: '#fff',
                  borderRadius: 18,
                  boxShadow: '0 4px 24px rgba(0,0,0,0.13)',
                  zIndex: 2000,
                  padding: 0,
                  minHeight: 80
                }}
              >
                <div className="d-flex align-items-center justify-content-between px-4 py-3 border-bottom" style={{ borderTopLeftRadius: 18, borderTopRightRadius: 18, background: '#f8f9fa' }}>
                  <span className="fw-bold">Bildirimler</span>
                  <CloseButton onClick={() => setShowNotifications(false)} />
                </div>
                <ListGroup variant="flush">
                  {notifications.length === 0 ? (
                    <ListGroup.Item className="text-muted text-center">Hiç bildiriminiz yok.</ListGroup.Item>
                  ) : (
                    notifications.map(n => (
                      <ListGroup.Item key={n.id} style={{ fontSize: '1.05rem', padding: '16px 24px' }}>
                        {n.text}
                      </ListGroup.Item>
                    ))
                  )}
                </ListGroup>
              </div>
            )}
            {isAuthenticated ? (
              <Button variant="outline-light" onClick={handleLogout} className="me-2">Çıkış Yap</Button>
            ) : (
              <>
                <Button as={Link} to="/login" variant="outline-light" className="me-2">Giriş Yap</Button>
                <Button as={Link} to="/register" variant="light">Kayıt Ol</Button>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar; 