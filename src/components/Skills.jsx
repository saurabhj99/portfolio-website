import ICONS from "./Icons";
import "./styles/skills.css";

const SKILLS = [
  "HTML5",
  "CSS3",
  "Javascript",
  "React",
  "NodeJS",
  "ExpressJS",
  "MongoDB",
  "GraphQL",
];

const SkillCard = ({ title, icon }) => {
  return (
    <div className={`skill-card skill-title-${title}`}>
      <div className="skill-card-icon-wrapper">{icon}</div>
      <div className="skill-card-title">{title}</div>
    </div>
  );
};

const Skills = () => {
  return (
    <div className="portfolio-skills-section-wrapper" name="skills">
        <div className="portfolio-section-header">
            <h1 className="portfolio-section-heading">Skills</h1>
            <p className="portfolio-section-description">These are the technologies i've worked with</p>
        </div>
        <div className="portfolio-skills-section">
        {SKILLS.map((title, index) => (
            <SkillCard
            key={`title-${index}`}
            title={title}
            icon={ICONS[title]}
            />
        ))}
        </div>
    </div>
  );
};

export default Skills;
