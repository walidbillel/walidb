import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <div className="navigation">
      <nav className="navigation__bar">
        <ul className="navigation__list">
          <div className="navigation__item">
            <div className="navigation__logo home">
              <img src="" alt="Walid Boubguira Portfolio" />
            </div>
          </div>
          <li className="navigation__item">
            <Link className="navigation__link" to="home" smooth duration={500}>
              Home
            </Link>
          </li>
          <li className="navigation__item">
            <Link
              className="navigation__link"
              to="skills"
              smooth
              duration={500}
            >
              Skills
            </Link>
          </li>
          <li className="navigation__item">
            <Link
              className="navigation__link"
              to="projects"
              smooth
              duration={500}
            >
              Projects
            </Link>
          </li>
          <li className="navigation__item">
            <Link
              className="navigation__link "
              to="graphics"
              smooth
              duration={600}
            >
              Graphics
            </Link>
          </li>
          <li className="navigation__item">
            <Link
              className="navigation__link"
              to="contact"
              smooth
              duration={800}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
