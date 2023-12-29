import './SportsHome.css';

import SportsNewsSection from "./SportsNewsSection";
import SportsHomeUpcomingGames from './SportsHomeUpcomingGames';
const SportsHome = () =>{
    return (
        <div className="SportsHome">
            <div className='SportsHomeNewsWrapper'>
                <h2>News</h2>
                
                <SportsNewsSection team="Lakers" league="NBA"/>
                <SportsNewsSection team="Cowboys" league="NFL"/>
                <SportsNewsSection team="Razorbacks" league="CFB"/>
                
            </div>
            {/*<SportsHomeUpcomingGames />*/}
        </div>
    )
}

export default SportsHome;