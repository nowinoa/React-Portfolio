import "./index.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";

function backgroundWaves(bg) {
    if(bg === 1) return 'var(--background-waves)';
    else if(bg === 2) return'var(--background-waves2)';
    else if(bg === 3) return'var(--background-waves3)';
}
function colorCard(bg) {
    if(bg === 1 || bg === 2) return 'var(--terciary)';
    else return'var(--primary)';
}

function ProjectCard (props) {
    return(
        <div className="project-card" id="project" style={{background: backgroundWaves(props.bg), color: colorCard(props.bg)}}>
            <h3>{props.title}</h3>
            <img src={props.image} alt={props.title} />
            <div className="project-buttons">
                <a
                    className="p pages"
                    target= "_blank" 
                    rel="noopener noreferrer"
                    href={props.page}>
                    <FontAwesomeIcon icon="fa-solid fa-globe" className="page-icon" style={{width: 30, height: 30, color: "#59ecb4"}}/>
                </a>
                <a
                    className="p repo"
                    target= "_blank" 
                    rel="noopener noreferrer"
                    href={props.repository}>
                <FontAwesomeIcon icon="fa-brands fa-github" className="repo-icon" style={{width: 30, height: 30, color: "var(--primary)"}}/>
                </a>
            </div>
        </div>
        
    )
}

export default ProjectCard;

//make the bg change in images
//make images to show up!
//add icons where pages and github repo
//move navbar a bit more to the right