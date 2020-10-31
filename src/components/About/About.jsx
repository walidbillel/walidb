import React from 'react';
import { Link } from 'react-scroll';

const About = () => {
  return (
    <section className="about">
      <h2 className="about__title">About Me</h2>
      <div className="about__bio">
        <div className="about__bio--stack"></div>
        <div className="about__bio--shopify">
          <a
            href="https://www.storetasker.com/expert/walid-boubguira"
            target="_blank"
            rel="noreferrer noopener"
            className="about__bio--shopifyLink"
          >
            <img src="" className="about__bio--storetasker" alt="storetasker" />
          </a>
        </div>
        <div className="about__bio--info">
          <p>
            I&apos;m Walid Boubguira,{' '}
            <strong> A Full-Stack Web Developer. </strong>
            Self-motivated, with strong written and verbal communication skills
            including English, Arabic and French. <br />
            <br />I enjoy working with teams as well as solo. In my free time, I
            read and learn about new technologies and play Football whenever I
            have a chance. Let's{' '}
            <strong>
              <em>
                <span>
                  {' '}
                  <Link to="email" smooth duration={900}>
                    CONNECT
                  </Link>{' '}
                </span>
              </em>
            </strong>{' '}
            and make something interesting!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
