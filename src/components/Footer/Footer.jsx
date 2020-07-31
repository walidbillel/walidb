import React from 'react';
import FooterLogo from '../../assets/logo-for-black.svg';
import { FaGithub, FaFacebook, FaLinkedinIn, FaBehance } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__copyright">
        <p>&#169;Copyright Walid B. 2020</p>
      </div>
      <img src={FooterLogo} alt="logo" className="footer__logo" />

      <div className="footer__social">
        <a
          href="https://www.linkedin.com/in/walid-boubguira-89219462/"
          target="_blank"
          aria-label="Linkedin"
          rel="noreferrer noopener"
        >
          <FaLinkedinIn className="footer__icon" />
        </a>
        <a
          aria-label="Facebook"
          href="https://www.facebook.com/willou.gnawi"
          target="_blank"
          rel="noreferrer noopener"
        >
          <FaFacebook className="footer__icon" />
        </a>
        <a
          aria-label="Github"
          href="https://github.com/walidbillel"
          target="_blank"
          rel="noreferrer noopener"
        >
          <FaGithub className="footer__icon" />
        </a>
        <a
          aria-label="Behance"
          href="https://www.behance.net/walidbob-guerra"
          target="_blank"
          rel="noreferrer noopener"
        >
          <FaBehance className="footer__icon" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
