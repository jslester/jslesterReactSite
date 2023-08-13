import "./Home.css";
import family from './img/family.JPEG';
import githubImg from './img/github.png';
import linkedInImg from './img/linkedIn.png';
import resume from './img/JonathanLesterResume.pdf';
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
             
        </div>
    )
}
export default SiteHome;