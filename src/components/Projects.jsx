import "./styles/projects.css";

const PROJECTS = [
  {
    title: "Food Ordering Website",
    github: "https://github.com/saurabhj99/mern-food-ordering-app",
    image:
      "https://th.bing.com/th/id/OIP.r8IqnZvajmcmfws6fDgfvwHaEo?pid=ImgDet&rs=1",
    description:
      "Food Ordering clone website with seperate portals restaurant and customers and with search filters for food items",
    techStack: "HTML+CSS+Javascript+React+NodeJS+MongoDB",
  },
  {
    title: "Blog Website",
    github: "https://github.com/saurabhj99/BlogApp",
    image:
      "https://th.bing.com/th/id/OIP.r8IqnZvajmcmfws6fDgfvwHaEo?pid=ImgDet&rs=1",
    description:
      "Sample Blog website clone where user can create an account and post new blogs and react on existing blogs",
    techStack: "HTML+CSS+Javascript+EJS+NodeJS+MongoDB",
  },
  {
    title: "Movie Search Website",
    github: "https://github.com/saurabhj99/MovInfo",
    image:
      "https://th.bing.com/th/id/OIP.r8IqnZvajmcmfws6fDgfvwHaEo?pid=ImgDet&rs=1",
    description:
      "Website where user can search information related to favourite movies and TV shows with their IMDB , Metacritic ratings and information such as Cast , Directors , Box Office collections.",
    techStack: "HTML+CSS+Javascript+ReactJS+OMDB Api",
  },
];

const ProjectCard = ({ image, title, description, techStack }) => {
  return (
    <div className="project-card">
      <div className="project-snapshot">
        <img src={image} alt={title} />
      </div>
      <div className="project-title">{title}</div>
      <div className="project-tech-stack">
        {techStack.split("+").map((technology) => (
          <div className="tag">{technology}</div>
        ))}
      </div>
      <div className="project-description">{description}</div>
      <div className="portfolio-project-card-cta-container">
        <button className="portfolio-project-card-cta" type="button">
          Resume
        </button>
        <button className="portfolio-project-card-cta" type="button">
          Contact
        </button>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div className="portfolio-projects-section-wrapper" name="projects">
      <div className="portfolio-projects-section-header">
        <h1 className="portfolio-projects-section-heading">Projects</h1>
        <p className="portfolio-projects-section-description">
          These are the personal projects i've build
        </p>
      </div>
      <div className="portfolio-projects-section">
        {PROJECTS.map((projectDetails) => (
          <ProjectCard key={projectDetails.title} {...projectDetails} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
