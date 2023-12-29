import {  useState } from "react";
import { Link } from "react-router-dom";
const ProjectDisplay = (props) =>{
    const [isFlipped, setIsFlipped] = useState(false);
    return (
        <div className="ProjectDisplay">
            {!isFlipped? <div className="ProjectCard Front">
                <img width="100%" height="250px" src={props.imgSrc} alt="gpt screenshot"></img>
                <div>
                    <h2>{props.title}</h2>  
                    <div onClick={() => setIsFlipped(true)}>→</div>
                </div>
            </div> : 
            
            <div className="ProjectCard Back">
                <div className="ProjectCardBackButton" onClick={() => setIsFlipped(false)}>X</div>
                <div style={{textDecoration:'underline'}}><p>{props.title}</p></div>
                <div className="fakeName"><p>{props.description}</p></div>
                {props.to ? <div>
                    <Link
                    to={props.to} target="_blank" rel="noopener noreferrer"
                   >
                    View
                  </Link>
                </div>
               :'' }
            </div>}
            
        </div>
    )
}

export default ProjectDisplay;