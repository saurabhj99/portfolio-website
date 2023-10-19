import "./styles/projects.css";

const PROJECTS = [
  {
    title: "Food Ordering Website",
    githubLink: "https://github.com/saurabhj99/mern-food-ordering-app",
    demoLink: "",
    image:
      "https://th.bing.com/th/id/OIP.r8IqnZvajmcmfws6fDgfvwHaEo?pid=ImgDet&rs=1",
    description:
      "Food Ordering clone website with seperate portals restaurant and customers and with search filters for food items",
    techStack: "HTML+CSS+Javascript+React+NodeJS+ExpressJS+MongoDB",
  },
  {
    title: "Blog Website",
    githubLink: "https://github.com/saurabhj99/BlogApp",
    demoLink: "",
    image:
      "https://th.bing.com/th/id/OIP.r8IqnZvajmcmfws6fDgfvwHaEo?pid=ImgDet&rs=1",
    description:
      "Sample Blog website clone where user can create an account and post new blogs and react on existing blogs",
    techStack: "HTML+CSS+Javascript+EJS+NodeJS+ExpressJS+MongoDB",
  },
  {
    title: "Movie Search Website",
    githubLink: "https://github.com/saurabhj99/MovInfo",
    demoLink: "",
    image:
      "https://th.bing.com/th/id/OIP.r8IqnZvajmcmfws6fDgfvwHaEo?pid=ImgDet&rs=1",
    description:
      "Website where user can search information related to favourite movies and TV shows with their IMDB , Metacritic ratings and information such as Cast , Directors , Box Office collections.",
    techStack: "HTML+CSS+Javascript+ReactJS+OMDB Api",
  },
];

const ProjectCard = ({
  image,
  title,
  description,
  techStack,
  githubLink,
  demoLink,
}) => {
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
        <button
          onClick={() => window.open(githubLink)}
          className="portfolio-project-card-cta github-cta"
          type="button"
        >
          Github
          <svg
            className="github-icon"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            style={{ width: 30, height: 30 }}
            viewBox="0 0 30 30"
          >
            <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
          </svg>
        </button>
        {demoLink && (
          <button className="portfolio-project-card-cta" type="button">
            Contact
          </button>
        )}
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div className="portfolio-projects-section-wrapper" name="projects">
      <div className="portfolio-section-header">
        <h1 className="portfolio-section-heading">Projects</h1>
        <p className="portfolio-section-description">
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
