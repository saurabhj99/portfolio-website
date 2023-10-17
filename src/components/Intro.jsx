import "./styles/intro.css";

const Intro = () => {
  return (
    <div className="portfolio-intro-section" name="home">
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
            Experienced Frontend Developer with a passion for creating user-friendly and visually impressive websites. Seeking a opportunity where I can use my thorough
            knowledge of Frontend development and grow my skills further.
          </p>

          <div className="portfolio-intro-cta-container">
            <button className="portfolio-intro-downloadResume-cta" type="button">Resume</button>
            <button className="portfolio-intro-contact-cta" type="button">Contact</button>
          </div>

       </div>
       <div className="portfolio-intro-profile-image-section">
        <img src="https://media.licdn.com/dms/image/D4D03AQGhUZXr5-vcPg/profile-displayphoto-shrink_800_800/0/1669745700203?e=1702512000&v=beta&t=Fuje1uutiXhZ7sKqfLXeQHh2VK6o0ipq7kMYNbVPjSI"/>
      </div>
    </div>
  );
};

export default Intro;
