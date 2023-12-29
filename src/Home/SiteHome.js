import "./Home.css";
import family from './img/family.JPEG';
import githubImg from './img/github.png';
import profilePic from './img/profilePic.jpg';
import linkedInImg from './img/linkedIn.png';
import resume from './img/JonathanLesterResume.pdf';

import ProjectWrapper from "./ProjectWrapper.js";
const SiteHome = () =>{
    return(
        <div style={{width: '100%'}}>
            <div className='HomeWrapper'>
                <img width="500px" src={family} alt="mainImage" />
                <div className='HomeBoard'>
                    <p style={{fontSize:'50px'}}>Jonathan Lester</p>
                    <p>Software Developer</p>
                    <div>
                        <a style={{textDecoration: 'none'}} href={resume} download="Jonathan Lester Resume" target='_blank'>
                            <button className='summaryButton'>My Resume</button>
                        </a>
                        <a style={{marginLeft:'10px'}} href="https://github.com/jslester" target="_blank">
                            <img  style={{cursor:'pointer'}} width="50px" src={githubImg} alt="mainImage" align="center" />
                        </a>
                        <a style={{marginLeft:'10px'}} href="https://www.linkedin.com/in/jonathan-lester-b0b89b175" target="_blank">
                            <img  style={{cursor:'pointer'}} width="50px" src={linkedInImg} alt="mainImage" align="center" />
                        </a>
                        
                    </div>
                    
                    
                </div>
            </div>
            <div className='Greeting HomeWrapper ' style={{}}>
                <h2 style={{fontSize:'32px', width:'100%', marginBottom: '0px'}}>
                    Hello!
                </h2>
                <div style={{display:'flex', alignItems:'Center',flexWrap: 'wrap'}}>
                <div>
                    <p>I'm Jonathan Lester. I graduated from Louisiana Tech in 2019 with a Bachelor's degree in Computer Science and 
                        work for Lumen Technologies as a Technical Lead. I have six and a half years of experience building
                        creative solutions in Salesforce, and love building projects with Python and Javascript in my free time.
                    </p>
                    <p>When I’m not working with technology, some other hobbies include:</p>
                    
                    <ul>
                        <li>Spending time with my wife Tori and our dog Fern</li>
                        <li>Learning and cooking new recipes</li>
                        <li>Fitness and Strength training</li>
                        <li>Rec-league Basketball</li>
                        <li>Local Trivia Contests</li>
                        
                    </ul>
                    <p>Feel free to connect with me on <a target="_blank" href="https://www.linkedin.com/in/jonathan-lester-b0b89b175" >LinkedIn</a>, send me an email at jonathanslester@gmail.com, or view some of my projects below!</p>
                    
                </div>
                <img  src={profilePic} alt="mainImage" width="300px" />
                </div>
                
            </div>
            <div className="ProjectContainer">
                <ProjectWrapper></ProjectWrapper>
               
            </div>
        </div>
    )
}
export default SiteHome;