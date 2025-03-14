import { useEffect, useState } from "react";
import useFetch from "../Utility/useFetch";
const SportsFantasyFootball = ()=>{
    document.cookie="swid={80CFDFC4-E189-4136-AAAE-55DCCF5E6C2B};espn_s2=:AECjIizWpnPoisEzQ2YZ%2BB6LUnblm7stO%2BFYaDO1c89%2Fl%2FPyAwoQnFBAVW1nqYAdyS0YxGBWCKqDGVkxYCuuRJ02M4YbmaCVoldwWejSA%2FXjnAfZ%2BDWJVv3zPWjHMHw6tjYLDv4aZBuTYGV6Az%2FSVmaQKDtc93%2B%2FhKzF4%2F9QO32gZMcQWY79Q4QpHVMvsefcsB3UhgYdP3eJrcrHlFFKE4%2BB2pWNsJUdV0jZw9ktNtIlqf4XSRHezSbV5k81GFtDgP21fTqWRXXbwPSEfU4fyuZ%2FWVCrVxAajqgWXt07XauR%2B%2Ff9pPG8evF6U3w1sXs4LuLVapF29yc8e3n3qF9RbfJTqndWsuDnZpXaNg7SlywDoQ%3D%3D;"
    const {data, isPending, isError } = useFetch({url: 'https://lm-api-reads.fantasy.espn.com/apis/v3/games/ffl/seasons/2024/segments/0/leagues/1649558923?scoringPeriodId=1&view=kona_player_info'})
    const [futureRaces, setFutureRaces] = useState([]);
    /*cookies={"swid": "{80CFDFC4-E189-4136-AAAE-55DCCF5E6C2B}"}",
                          "espn_s2": "AECjIizWpnPoisEzQ2YZ%2BB6LUnblm7stO%2BFYaDO1c89%2Fl%2FPyAwoQnFBAVW1nqYAdyS0YxGBWCKqDGVkxYCuuRJ02M4YbmaCVoldwWejSA%2FXjnAfZ%2BDWJVv3zPWjHMHw6tjYLDv4aZBuTYGV6Az%2FSVmaQKDtc93%2B%2FhKzF4%2F9QO32gZMcQWY79Q4QpHVMvsefcsB3UhgYdP3eJrcrHlFFKE4%2BB2pWNsJUdV0jZw9ktNtIlqf4XSRHezSbV5k81GFtDgP21fTqWRXXbwPSEfU4fyuZ%2FWVCrVxAajqgWXt07XauR%2B%2Ff9pPG8evF6U3w1sXs4LuLVapF29yc8e3n3qF9RbfJTqndWsuDnZpXaNg7SlywDoQ%3D%3D;"*/ 

    console.log(data);
    useEffect( ()=>{
        if(data){
            //const futureRaces = 
            console.log(data);
        }
        
    }, [data]);
    return (
        <div>
            <iframe src="https://sleeper.app/embed/players/nfl/trending/add?lookback_hours=24&limit=10" width="350" height="500" allowtransparency="true" frameborder="0"></iframe>
                
        </div>
    )
}
export default SportsFantasyFootball;