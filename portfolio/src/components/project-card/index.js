import "./index.css";

function ProjectCard (props) {
    return(
        <div className="project-card">
            <h3>{props.title}</h3>
            <img src={props.img} alt={props.title} />
            <div className="project-buttons">
                <button className="p pages">Go to page</button>
                <button className="p repo">Go to repository</button>
            </div>
        </div>
        
    )
}
export default ProjectCard;