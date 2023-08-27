import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import './EntityCard.css'; 

function EntityCard({ selectedEntity }) {
  if (!selectedEntity) {
    return null
  }

  return (
    <Card className="entity-card">
      <Card.Img className="entity-image" variant="top" src={selectedEntity.image} alt={selectedEntity.name} />
      <Card.Body>
        <Card.Title>{selectedEntity.name}</Card.Title>
        <ListGroup variant="flush">
          <ListGroup.Item>Height: {selectedEntity.height} meters</ListGroup.Item>
          <ListGroup.Item>Mass: {selectedEntity.mass} kg</ListGroup.Item>
          <ListGroup.Item>Gender: {selectedEntity.gender}</ListGroup.Item>
          {/* Add more details as needed */}
        </ListGroup>
      </Card.Body>
    </Card>
  );
}

export default EntityCard;
