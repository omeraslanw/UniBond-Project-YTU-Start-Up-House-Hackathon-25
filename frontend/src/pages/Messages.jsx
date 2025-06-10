import React from 'react';
import { Container, Card, ListGroup, Image, Badge } from 'react-bootstrap';

const messages = [
  {
    id: 1,
    sender: { name: 'Ali Yılmaz', avatarUrl: '' },
    lastMessage: 'Yarın etkinlikte buluşalım mı?',
    date: '2024-05-18',
    time: '14:32'
  },
  {
    id: 2,
    sender: { name: 'Ayşe Demir', avatarUrl: '' },
    lastMessage: 'Katılım için teşekkürler!',
    date: '2024-05-17',
    time: '19:10'
  },
  {
    id: 3,
    sender: { name: 'Mehmet Can', avatarUrl: '' },
    lastMessage: 'Etkinlik detaylarını paylaşır mısın?',
    date: '2024-05-16',
    time: '09:45'
  }
];

function getInitials(name) {
  return name.split(' ').map(w => w[0]).join('').toUpperCase();
}

const Messages = () => (
  <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
    <Card className="shadow-lg w-100" style={{ maxWidth: '75vw', borderRadius: 24, background: '#f8f9fa' }}>
      <Card.Body className="p-0">
        <div className="p-4 border-bottom" style={{ borderTopLeftRadius: 24, borderTopRightRadius: 24, background: '#fff' }}>
          <h3 className="fw-bold m-0">Mesajlarım</h3>
        </div>
        <ListGroup variant="flush">
          {messages.length === 0 ? (
            <ListGroup.Item className="text-muted text-center py-5">Hiç mesajınız yok.</ListGroup.Item>
          ) : (
            messages.map(msg => (
              <ListGroup.Item key={msg.id} className="d-flex align-items-center gap-3 py-3 px-4" style={{ borderBottom: '1px solid #f0f0f0' }}>
                {msg.sender.avatarUrl ? (
                  <Image src={msg.sender.avatarUrl} roundedCircle width={44} height={44} alt={msg.sender.name} />
                ) : (
                  <span style={{
                    width: 44,
                    height: 44,
                    borderRadius: '50%',
                    background: '#e3e3e3',
                    color: '#0d6efd',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 'bold',
                    fontSize: 20
                  }}>{getInitials(msg.sender.name)}</span>
                )}
                <div className="flex-grow-1">
                  <div className="fw-bold">{msg.sender.name}</div>
                  <div className="text-muted" style={{ fontSize: '1.05rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: 300 }}>{msg.lastMessage}</div>
                </div>
                <div className="text-end" style={{ minWidth: 80 }}>
                  <Badge bg="light" text="dark" style={{ fontSize: '0.95rem' }}>{msg.date}</Badge>
                  <div className="text-muted" style={{ fontSize: '0.95rem' }}>{msg.time}</div>
                </div>
              </ListGroup.Item>
            ))
          )}
        </ListGroup>
      </Card.Body>
    </Card>
  </Container>
);

export default Messages; 