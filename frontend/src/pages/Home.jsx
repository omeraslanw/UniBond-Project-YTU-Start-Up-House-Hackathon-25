import React, { useState } from 'react';
import { Container, Form, InputGroup, Button } from 'react-bootstrap';
import EventList from '../components/EventList';

const Home = () => {
  const [search, setSearch] = useState('');

  const handleSearchChange = (e) => setSearch(e.target.value);
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Arama işlemi burada yapılacak (ileride EventList'e props ile aktarılabilir)
  };

  return (
    <Container className="mt-4 mb-5">
      <h2 className="text-center mb-4">Etkinlikler</h2>
      <div className="d-flex justify-content-center mb-4">
        <div style={{
          background: '#fff',
          borderRadius: 20,
          boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
          padding: 20,
          minWidth: 320,
          maxWidth: 1000,
          width: '100%'
        }}>
          <Form onSubmit={handleSearchSubmit}>
            <InputGroup>
              <Form.Control
                type="text"
                placeholder="Etkinlik ara..."
                value={search}
                onChange={handleSearchChange}
                style={{ fontSize: '1.1rem', borderRadius: 12 }}
              />
              <Button variant="primary" type="submit" style={{ borderRadius: 12, marginLeft: 10 }}>Ara</Button>
            </InputGroup>
          </Form>
        </div>
      </div>
      <EventList search={search} />
    </Container>
  );
};

export default Home; 