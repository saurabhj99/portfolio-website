import { Link } from "react-scroll";

import MyResume from "@public/My_Resume.pdf";
import ProfilePicture from "@public/images/profilePicture.jpeg";
import "./styles/intro.css";

const Intro = () => {
  return (
    <div className="portfolio-intro-section" name="about">
      <div className="portfolio-intro-description-section">
        <div className="portfolio-intro-description-header-1">
          <div className="typewriter-effect">
            <span>Hi, I am </span>
            <span>Saurabh Joshi</span>
          </div>
        </div>
        <p className="portfolio-intro-description-header-2">
          Frontend Developer
        </p>
        <p className="portfolio-intro-description-text">
          Experienced Frontend Developer with a passion for creating
          user-friendly and visually impressive websites. Seeking a opportunity
          where I can use my thorough knowledge of Frontend development and grow
          my skills further.
        </p>

        <div className="portfolio-intro-cta-container">
          <button className="portfolio-intro-downloadResume-cta" type="button">
            <a href={MyResume} download="Saurabh Joshi Resume.pdf">
            Resume
            </a>
          </button>
          <Link to="contact" smooth duration={500}>
            <button className="portfolio-intro-contact-cta" type="button">
              Contact
            </button>
          </Link>
        </div>
      </div>
      <div className="portfolio-intro-profile-image-section">
        <img alt="profilePicture" src={ProfilePicture} />
      </div>
    </div>
  );
};

export default Intro;
