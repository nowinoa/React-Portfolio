import "./index.css";
import ProjectCard from "../project-card";
import projectList from './projects.json';

function Projects () {
    return(
        <div>
        {projectList.map(function project(p) {
            return <ProjectCard
                     key={p.id}
                     title={p.title}
                     img={p.img}
                     page={p.page}
                     repository={p.repository} />
        })}
        </div>
    )
}
export default Projects;