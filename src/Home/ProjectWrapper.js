import ProjectDisplay from './ProjectDisplay.js';
import summaryProject from './img/summary.png';
import sentimentAnalysis from './img/sentimentCropped.png';
import chatExample from './img/chatExample.png';
import twitterImage from './img/twitterImg.jpg';
import nba from './img/nba.jpg';
import marksMoving from './img/marksmoving.PNG';
import sports from './img/sportsPage.png';
import recipes from './img/recipes.png';
import corgi from './img/corgi.jpg';
import musicNote from './img/musicNote.png'
const ProjectWrapper = () =>{

    return(
        <div>
            <ProjectDisplay title="Heardle Music Game" to="/heardle" imgSrc={musicNote} description="Custom clone of popular music game Heardle built in React with integration to Youtube media iframe."></ProjectDisplay>
            <ProjectDisplay title="Salesforce Chat GPT Integration" imgSrc={summaryProject} description="Custom integration built in Salesforce with Chat gpt that automatically summarizes lengthy chat messages sent to agents from customers."></ProjectDisplay>
            <ProjectDisplay title="Sentiment Analysis Assistant for Salesforce Chat" imgSrc={sentimentAnalysis} description="Integration built in Salesforce connecting to a HuggingFace model used to generate sentiment analysis on text. Negative messages will automatically flag the conversation in Salesforce for supervisors to review and assist."></ProjectDisplay>
            <ProjectDisplay title="Salesforce App Messaging Implementation" imgSrc={chatExample} description="Landing page that integrates with new Salesforce In app messaging application to a dev org." to="/chat"  ></ProjectDisplay>
            <ProjectDisplay title="Sports News Hub" imgSrc={sports} to="/sports" description="Page built in React that integrates with Reddit APIs to compile recently posted news stories that fit personal interests."></ProjectDisplay>
            <ProjectDisplay title="Workout Tracker" imgSrc={corgi} to="/workout"  description="Page built in React to track workout history and generate previous workout details to assist. Uses MYSQL database to store information and Python backend to retrieve data and return to React page."></ProjectDisplay>
            <ProjectDisplay title="Recipe Hub" imgSrc={recipes} to="/recipes" description="Personal page built to store custom favorite recipes. Includes pages to integrate with Python backend to add recipes, and track shopping lists required for ingredients." ></ProjectDisplay>
            <ProjectDisplay title="Twitter Bot Analysis" imgSrc={twitterImage} description="Analysis for building a model that recognizes and identifies bots on Twitter using a variety of factors."></ProjectDisplay>
            <ProjectDisplay title="Marks Moving Website" to="https://marksmovingstorage.com" imgSrc={marksMoving} description="Web page built for local moving company using HTML, CSS, and JS."></ProjectDisplay>
            <ProjectDisplay title="Analytics for NBA Salaries" imgSrc={nba} description="Data analysis reviewing salaries in NBA and identifying players making impact in advanvced statistics on lower salary."></ProjectDisplay>
        </div>
    )
}

export default ProjectWrapper;