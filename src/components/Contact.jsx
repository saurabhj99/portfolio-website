import "./styles/contact.css";

const EMAIL = "joshisourabh1999@gmail.com";
const LINKED_IN = "https://www.linkedin.com/in/saurabh-joshi-24995617b/";

const Contact = () => {
  return (
    <div className="portfolio-contact-section-wrapper" name="contact">
        <div className="portfolio-section-header">
          <h1 className="portfolio-section-heading">Contact</h1>
          <p className="portfolio-section-description">
            Want to know more about me? Get in touch !!
          </p>
        </div>
      <div className="portfolio-contact-section">
        <div class="portfolio-contact-card">
          <div class="contact-info-container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 -2.5 20 20"
              version="1.1"
            >
              <g
                id="Page-1"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
              >
                <g
                  id="Dribbble-Light-Preview"
                  transform="translate(-340.000000, -922.000000)"
                  fill="#000000"
                >
                  <g id="icons" transform="translate(56.000000, 160.000000)">
                    <path d="M294,774.474 L284,765.649 L284,777 L304,777 L304,765.649 L294,774.474 Z M294.001,771.812 L284,762.981 L284,762 L304,762 L304,762.981 L294.001,771.812 Z"></path>
                  </g>
                </g>
              </g>
            </svg>
            <p>
              <a href="mailto:examplemail@gmail.com">{EMAIL}</a>
            </p>
          </div>
          <div class="contact-info-container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="50"
              height="50"
              viewBox="0 0 50 50"
            >
              <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
            </svg>
            <p>
              <a href={LINKED_IN} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
