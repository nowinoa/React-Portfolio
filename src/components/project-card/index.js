import "./index.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function backgroundWaves(bg) {
    if(bg === 1) return 'var(--background-waves)';
    else if(bg === 2) return'var(--background-waves2)';
    else if(bg === 3) return'var(--background-waves3)';
}
function colorCard(bg) {
    if(bg === 1 || bg === 2) return 'var(--terciary)';
    else return'var(--primary)';
}

function ProjectCard ({title, bg, image, page, repository}) {
    return(
        <div className="project-card" id="project" style={{background: backgroundWaves(bg), color: colorCard(bg)}}>
            <h3>{title}</h3>
            <img src={image} alt={title} />
            <div className="project-buttons">
                <a
                    className="p pages"
                    target= "_blank" 
                    rel="noopener noreferrer"
                    href={page}>
                    <FontAwesomeIcon icon="fa-solid fa-globe" className="page-icon" style={{width: 30, height: 30, color: "#59ecb4"}}/>
                </a>
                <a
                    className="p repo"
                    target= "_blank" 
                    rel="noopener noreferrer"
                    href={repository}>
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