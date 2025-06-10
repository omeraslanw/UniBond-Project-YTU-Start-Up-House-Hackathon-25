import React from 'react';
import { Container, Card, Button, Badge, Row, Col, Image } from 'react-bootstrap';

const user = {
  name: 'Sen',
  email: 'sen@unibond.com',
  bio: 'Üniversite öğrencisiyim. Yazılım, spor ve sanatla ilgileniyorum.',
  avatarUrl: '',
  interests: ['Teknik', 'Spor', 'Sanat'],
  joinedEvents: [
    { id: 1, title: 'Teknik Seminer' },
    { id: 2, title: 'Spor Turnuvası' }
  ],
  createdEvents: [
    { id: 3, title: 'Sanat Atölyesi' }
  ]
};

function getInitials(name) {
  return name.split(' ').map(w => w[0]).join('').toUpperCase();
}

const Profile = () => (
  <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
    <Card className="shadow-lg w-100" style={{ maxWidth: 600, borderRadius: 24, background: '#f8f9fa' }}>
      <Card.Body className="p-5">
        <div className="d-flex flex-column align-items-center mb-4">
          {user.avatarUrl ? (
            <Image src={user.avatarUrl} roundedCircle width={96} height={96} alt={user.name} />
          ) : (
            <span style={{
              width: 96,
              height: 96,
              borderRadius: '50%',
              background: '#e3e3e3',
              color: '#0d6efd',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold',
              fontSize: 36,
              marginBottom: 12
            }}>{getInitials(user.name)}</span>
          )}
          <h2 className="fw-bold mt-3 mb-1">{user.name}</h2>
          <div className="text-muted mb-2">{user.email}</div>
          <div className="mb-3 text-center" style={{ maxWidth: 400 }}>{user.bio}</div>
          <div className="mb-3">
            {user.interests.map((interest, idx) => (
              <Badge key={idx} bg="info" className="me-2 mb-1" style={{ fontSize: '1rem' }}>{interest}</Badge>
            ))}
          </div>
          <Button variant="outline-primary" style={{ borderRadius: 12 }}>Profili Düzenle</Button>
        </div>
        <Row className="mb-3">
          <Col md={6} className="mb-3 mb-md-0">
            <h5 className="fw-bold mb-2">Katıldığı Etkinlikler</h5>
            {user.joinedEvents.length === 0 ? (
              <div className="text-muted">Henüz katıldığı etkinlik yok.</div>
            ) : (
              user.joinedEvents.map(e => (
                <Badge key={e.id} bg="primary" className="me-2 mb-1" style={{ fontSize: '1rem' }}>{e.title}</Badge>
              ))
            )}
          </Col>
          <Col md={6}>
            <h5 className="fw-bold mb-2">Oluşturduğu Etkinlikler</h5>
            {user.createdEvents.length === 0 ? (
              <div className="text-muted">Henüz oluşturduğu etkinlik yok.</div>
            ) : (
              user.createdEvents.map(e => (
                <Badge key={e.id} bg="success" className="me-2 mb-1" style={{ fontSize: '1rem' }}>{e.title}</Badge>
              ))
            )}
          </Col>
        </Row>
      </Card.Body>
    </Card>
  </Container>
);

export default Profile; 