import { Link } from "react-scroll";

import "./styles/navbar.css";
import { useState } from "react";

const LINKS = [
  {
    title: "About",
    link: "about",
  },
  {
    title: "Skills",
    link: "skills",
  },
  {
    title: "Projects",
    link: "projects",
  },
  {
    title: "Contact",
    link: "contact",
  },
];

const Navbar = () => {
  // state to keep track of menu is open or not for smaller screen sizes
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="portfolio-navbar">
      <div className="portfolio-navbar-lsection">
        <div className="portfolio-navbar-logo">My Portfolio</div>
      </div>
      <div
        className="portfolio-navbar-menu-toggler"
        onClick={() => setIsMenuOpen(true)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="40"
          height="40"
          viewBox="0 0 50 50"
        >
          <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"></path>
        </svg>
      </div>
      <div
        className={`portfolio-navbar-rsection ${
          isMenuOpen ? "menu-isOpen" : ""
        }`}
      >
        <div className="portfolio-navbar-menu-close">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="40"
            height="40"
            viewBox="0 0 50 50"
            onClick={() => isMenuOpen ? setIsMenuOpen(false) : null}
          >
            <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"></path>
          </svg>
        </div>
        {LINKS.map(({ title, link }) => (
          <Link
            onClick={() => isMenuOpen ? setIsMenuOpen(false): null}
            key={`key-${title}`}
            className="portfolio-navbar-link"
            to={link}
            smooth
            duration={500}
          >
            {title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
