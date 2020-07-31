import React from 'react';
import { FaGithub, FaFacebook, FaLinkedinIn, FaBehance } from 'react-icons/fa';

const Social = () => (
  <div className="socialMedia">
    <a
      className="socialMedia__link"
      aria-label="Linkedin"
      href="https://www.linkedin.com/in/walid-boubguira-89219462/"
      target="_blank"
      rel="noreferrer noopener"
    >
      <FaLinkedinIn className="socialMedia__icon" />
    </a>
    <a
      className="socialMedia__link"
      aria-label="Facebook"
      href="https://www.facebook.com/willou.gnawi"
      target="_blank"
      rel="noreferrer noopener"
    >
      <FaFacebook className="socialMedia__icon" />
    </a>
    <a
      className="socialMedia__link"
      aria-label="Github"
      href="https://github.com/walidbillel"
      target="_blank"
      rel="noreferrer noopener"
    >
      <FaGithub className="socialMedia__icon" />
    </a>
    <a
      className="socialMedia__link"
      aria-label="Behance"
      href="https://www.behance.net/walidbob-guerra"
      target="_blank"
      rel="noreferrer noopener"
    >
      <FaBehance className="socialMedia__icon" />
    </a>
  </div>
);

export default Social;
