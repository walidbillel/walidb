import React from 'react';
import TypeWriter from '../../helpers/TypeWriter';

const Hero = () => {
  const msgs = [
    'A Full Stack Developer',
    'A Shopify Expert',
    'A Graphic Designer',
    'A Problem Solver',
    'A Life Long Learner',
  ];
  return (
    <section>
      <div className="hero">
        <div className="hero__info ">
          <h1 className="hero__name">
            <TypeWriter heading={"Hi I'm Walid "} messages={msgs} />
          </h1>

          <a
            href="https://docs.google.com/document/d/1HdbkoQAo2prNYX88mBR5vzDZj3GUvXeAVYWlJ3IAO9c/edit?usp=sharing"
            target="_blank"
            rel="noreferrer noopener"
            className="hero__link "
          >
            <button className="hero__btn animate-pop-in">
              <span>resum&eacute;</span>
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
