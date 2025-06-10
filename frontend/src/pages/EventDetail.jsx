import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Card, Button, Badge, ListGroup, Image } from 'react-bootstrap';

const events = [
  {
    id: 1,
    title: 'Teknik Seminer',
    category: 'Teknik',
    date: '2024-05-20',
    description: 'Yazılım geliştirme üzerine seminer.',
    participantLimit: 5,
    participants: [
      { name: 'Ali Yılmaz', avatarUrl: '' },
      { name: 'Ayşe Demir', avatarUrl: '' }
    ]
  },
  {
    id: 2,
    title: 'Spor Turnuvası',
    category: 'Spor',
    date: '2024-05-25',
    description: 'Üniversiteler arası futbol turnuvası.',
    participantLimit: 3,
    participants: [
      { name: 'Mehmet Can', avatarUrl: '' },
      { name: 'Zeynep Kaya', avatarUrl: '' }
    ]
  },
  {
    id: 3,
    title: 'Sanat Atölyesi',
    category: 'Sanat',
    date: '2024-06-01',
    description: 'Resim ve heykel atölyesi.',
    participantLimit: 2,
    participants: [
      { name: 'Elif Aksoy', avatarUrl: '' }
    ]
  }
];

const CURRENT_USER = { name: 'Sen', avatarUrl: '' };

function getInitials(name) {
  return name.split(' ').map(w => w[0]).join('').toUpperCase();
}

const EventDetail = () => {
  const { id } = useParams();
  const event = events.find(e => e.id === Number(id));
  const [participants, setParticipants] = useState(event ? event.participants : []);
  const [joined, setJoined] = useState(event ? event.participants.some(p => p.name === CURRENT_USER.name) : false);

  if (!event) {
    return (
      <Container className="mt-4">
        <h2>Etkinlik Bulunamadı</h2>
        <p>Böyle bir etkinlik yok.</p>
        <Button as={Link} to="/" variant="secondary">Ana Sayfaya Dön</Button>
      </Container>
    );
  }

  const isFull = participants.length >= event.participantLimit;

  const handleJoin = () => {
    if (!joined && !isFull) {
      setParticipants(prev => [...prev, CURRENT_USER]);
      setJoined(true);
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
      <Card className="shadow-lg w-100" style={{ maxWidth: 700, borderRadius: 24, background: '#f8f9fa' }}>
        <Card.Body className="p-5">
          <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-between mb-4">
            <h1 className="fw-bold mb-3 mb-md-0" style={{ fontSize: '2.5rem' }}>{event.title}</h1>
            <div>
              <Badge bg="info" className="me-2" style={{ fontSize: '1rem' }}>{event.category}</Badge>
              <Badge bg="secondary" style={{ fontSize: '1rem' }}>{event.date}</Badge>
            </div>
          </div>
          <Card.Text as="div">
            <div className="p-4 bg-white rounded" style={{ minHeight: 100, fontSize: '1.15rem', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
              {event.description}
            </div>
          </Card.Text>
          <div className="mt-5 mb-4">
            <h5 className="mb-3">Katılımcılar ({participants.length}/{event.participantLimit}):</h5>
            <ListGroup horizontal className="flex-wrap">
              {participants.map((p, idx) => (
                <ListGroup.Item key={idx} className={p.name === CURRENT_USER.name ? 'fw-bold text-primary' : ''} style={{ borderRadius: 12, marginRight: 8, marginBottom: 8, display: 'flex', alignItems: 'center', gap: 8 }}>
                  {p.avatarUrl ? (
                    <Image src={p.avatarUrl} roundedCircle width={32} height={32} alt={p.name} />
                  ) : (
                    <span style={{
                      width: 32,
                      height: 32,
                      borderRadius: '50%',
                      background: '#e3e3e3',
                      color: '#0d6efd',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 'bold',
                      fontSize: 16
                    }}>{getInitials(p.name)}</span>
                  )}
                  <span>{p.name}</span>
                </ListGroup.Item>
              ))}
              {participants.length === 0 && <span className="text-muted">Henüz katılımcı yok.</span>}
            </ListGroup>
          </div>
          <div className="d-flex flex-column flex-md-row justify-content-end gap-3 mt-4">
            <Button
              variant={joined ? 'secondary' : 'success'}
              size="lg"
              onClick={handleJoin}
              disabled={joined || isFull}
            >
              {joined ? 'Katıldın' : isFull ? 'Kontenjan dolu' : 'Katıl'}
            </Button>
            <Button as={Link} to="/" variant="outline-primary" size="lg">Tüm Etkinlikler</Button>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default EventDetail; 