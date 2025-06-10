import React from 'react';
import { Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const events = [
  {
    id: 1,
    title: 'Teknik Seminer',
    category: 'Teknik',
    date: '2024-05-20',
    description: 'Yazılım geliştirme üzerine seminer.',
    participantLimit: 5,
    participants: [
      { name: 'Ali Yılmaz' },
      { name: 'Ayşe Demir' }
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
      { name: 'Mehmet Can' },
      { name: 'Zeynep Kaya' }
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
      { name: 'Elif Aksoy' }
    ]
  }
];

const EventList = ({ search = '' }) => {
  const filteredEvents = events.filter(event => {
    const s = search.toLowerCase();
    return (
      event.title.toLowerCase().includes(s) ||
      event.category.toLowerCase().includes(s) ||
      event.description.toLowerCase().includes(s)
    );
  });

  return (
    <Row className="justify-content-center">
      {filteredEvents.length === 0 ? (
        <Col xs={12} className="text-center text-muted mt-4">Aradığınız kriterlere uygun etkinlik bulunamadı.</Col>
      ) : (
        filteredEvents.map(event => (
          <Col key={event.id} xs={12} md={10} lg={8} className="mb-4 d-flex align-items-stretch">
            <Card className="w-100 shadow-lg border-0" style={{ borderRadius: 24, background: '#f8f9fa' }}>
              <Card.Body className="p-4">
                <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-between mb-3">
                  <h3 className="fw-bold mb-2 mb-md-0" style={{ fontSize: '1.7rem' }}>{event.title}</h3>
                  <div>
                    <Badge bg="info" className="me-2" style={{ fontSize: '1rem' }}>{event.category}</Badge>
                    <Badge bg="secondary" style={{ fontSize: '1rem' }}>{event.date}</Badge>
                  </div>
                </div>
                <div className="p-3 bg-white rounded mb-3" style={{ minHeight: 60, fontSize: '1.08rem', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
                  {event.description}
                </div>
                <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-between mt-3">
                  <div>
                    <Badge bg="primary" className="me-2" style={{ fontSize: '1rem' }}>
                      Katılımcı: {event.participants.length}/{event.participantLimit}
                    </Badge>
                  </div>
                  <Button as={Link} to={`/event/${event.id}`} variant="primary" size="lg" className="mt-3 mt-md-0 px-4">
                    Detay
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))
      )}
    </Row>
  );
};

export default EventList; 