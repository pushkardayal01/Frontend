import React from 'react';
import Card from 'react-bootstrap/Card';
import './Carousel.css'; // Import the CSS file

function CarouselCard({ title, subtitle, text }) {
  return (
    <Card className="carousel-card">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle 
          className="mb-2"
          style={{ fontSize: '1.25rem' }} // Adjust font size as needed
        >
          {subtitle}
        </Card.Subtitle>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CarouselCard;
