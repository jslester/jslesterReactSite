const SportsHomeUpcomingGames = () =>{
    return(
        /* lakers api schedule  https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams/13/schedule*/
        /* Cowboys https://site.api.espn.com/apis/site/v2/sports/football/NFL/teams/6/schedule 
            razorbacks https://site.api.espn.com/apis/site/v2/sports/football/college-football/teams/8/schedule*/
        <div className="UpcomingGames">
            <h2>Upcoming Games</h2>
                <div>
                    <div className="GenericGame LakerGame"> (7/9) Lakers vs Clippers</div>
                    <div className="GenericGame CowboyGame">(7/11) Cowboys vs Redskins</div>
                    <div className="GenericGame RazorbackGame">(7/12) Razorbacks vs Alabama</div>
                </div>
        </div>
    )
}
export default SportsHomeUpcomingGames;