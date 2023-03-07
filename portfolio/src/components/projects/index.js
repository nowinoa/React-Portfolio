import "./style.css";
import ProjectCard from "../project-card";
import projectList from "./projects.json";

function Projects() {
  return (
    <div className="projects">
      <div className="about-projects">
      <img src="../58982.jpg" alt="Ainhoa Prada Frontend Developer" />
        <p>
          Welcome to my <span>projects</span> page! Here you will find a showcase of my work,
          created using various technologies such as JavaScript, React, CSS,
          Node, Jest, and more. Each project is a representation of my skills
          and dedication to crafting quality solutions. Take a look around and
          see what I've been working on!
        </p>
      </div>
      <div className="wrapper">
        {projectList.map(function project(p) {
          return (
            <ProjectCard
              key={p.id}
              title={p.title}
              image={p.image}
              page={p.page}
              repository={p.repository}
              bg={p.bg}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
