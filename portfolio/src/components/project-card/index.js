import "./index.css";

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