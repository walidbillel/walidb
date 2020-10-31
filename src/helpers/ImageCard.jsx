import React, { createRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const ImageCard = ({ image, description }) => {
  const [currentSpan, setCurrentSpan] = useState(0);
  const imageRef = createRef();

  useEffect(() => {
    imageRef.current.addEventListener('load', setSpans);
  });
  const setSpans = () => {
    const height = imageRef.current.clientHeight;
    const spans = Math.ceil(height / 40);
    setCurrentSpan(spans);
  };

  return (
    <div className="image-zoom" style={{ gridRowEnd: `span ${currentSpan}` }}>
      <img ref={imageRef} src={image} alt={description} />
    </div>
  );
};

ImageCard.prototype = {
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ImageCard;
