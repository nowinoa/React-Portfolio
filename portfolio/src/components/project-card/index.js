import "./index.css";

function ProjectCard (props) {
    return(
        <div className="project-card">
            <h3>{props.title}</h3>
            <img src={props.image} alt={props.title} />
            <div className="project-buttons">
                <button className="p pages">Page</button>
                <button className="p repo">Repository</button>
            </div>
        </div>
        
    )
}
export default ProjectCard;

//make the bg change in images
//make images to show up!
//add icons where pages and github repo
//move navbar a bit more to the right