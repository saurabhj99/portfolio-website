import { Link } from "react-scroll";

import "./styles/navbar.css";

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
  return (
    <div className="portfolio-navbar">
      <div className="portfolio-navbar-lsection">
        <div className="portfolio-navbar-logo">My Portfolio</div>
      </div>
      <div className="portfolio-navbar-rsection">
        {LINKS.map(({ title, link }) => (
          <Link
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
