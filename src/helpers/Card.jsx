import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ title, description, technologies, gitHub, appLink, image }) => {
  return (
    <div className="card">
      <div className="front">
        <img src={image} alt="project-tab" />
        <h3>{title}</h3>
        <p>{description}</p>
        <br />
      </div>

      <div className="back">
        <h4>Technologies</h4>
        <p>{technologies}</p>

        <a href={gitHub} target="_blank" rel="noopener noreferrer">
          <button>
            <span>Code</span>
          </button>
        </a>
        <a href={appLink} target="_blank" rel="noopener noreferrer">
          <button>
            <span>Live</span>
          </button>
        </a>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  technologies: PropTypes.string.isRequired,
  gitHub: PropTypes.string.isRequired,
  appLink: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Card;
