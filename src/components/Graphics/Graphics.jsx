import React from 'react';
import graphics from '../../helpers/graphics.json';
import ImageCard from '../../helpers/ImageCard';

const Graphics = () => {
  const images = graphics.map((graphic) => {
    return (
      <ImageCard
        key={graphic.id}
        image={graphic.image}
        description={graphic.description}
      />
    );
  });
  return (
    <section className="graphics">
      <h2 className="graphics__title">Graphics</h2>
      <div className="graphics__list">{images}</div>
    </section>
  );
};

export default Graphics;
