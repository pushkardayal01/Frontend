import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import CarouselCard from './CarouselCard';

function CarouselComponent({ projects }) {
  // Flatten the tasks from all projects into an array of cards
  const cardData = projects.flatMap(project =>
    project.tasks.map(task => ({
      title: `Project ${project.id}`, // Use project ID for the title
      subtitle: project.type, // Use project type for the subtitle
      text: `Created: ${task.created}`, // Use created date for the text
    }))
  );

  return (
    <Carousel>
      {cardData.map((card, index) => (
        <Carousel.Item key={index}>
          <CarouselCard
            title={card.title}
            subtitle={card.subtitle}
            text={card.text}
          />
          <Carousel.Caption>
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default CarouselComponent;
