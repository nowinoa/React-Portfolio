import "./style.css";
import ProjectCard from "../project-card";
import projectList from "./projects.json";


function Projects() {
  return (
    <div className="projects">
      <div className="about-projects">
        <p>
          In this section you will find some projects where I've work in
          collaboration and by myself. Some of them are part of a bootcamp but
          anyways you will never read this
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
              bg={p.bg}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
