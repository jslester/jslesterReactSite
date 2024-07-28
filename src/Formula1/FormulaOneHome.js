import { useEffect, useState } from "react";
import useFetch from "../Utility/useFetch";
import FormulaOneRace from "./FormulaOneRace";
const FormulaOneHome = () => {
    //https://ergast.com/api/f1/2023.json
    const thisYear = new Date();
    const {data, isPending, isError } = useFetch({url: 'https://ergast.com/api/f1/'+ thisYear.getFullYear() + '.json'})
    const [futureRaces, setFutureRaces] = useState([]);
    console.log(data);
    useEffect( ()=>{
        if(data){
            //const futureRaces = 
            const d = Date.now();
            console.log(d);
            const futureRaces = data.MRData.RaceTable.Races.filter(race =>{
                console.log(race.raceName);
                console.log(race.date);
                const raceDate = new Date(race.date).valueOf();
                return ((raceDate + ((24 * 60 * 60 * 1000))) > d );
            })
            setFutureRaces(futureRaces);
        }
        
    }, [data]);
    return(
        <div className="FormulaOneHomeBody">
            <h2>Upcoming Races</h2>
            {futureRaces && futureRaces.map((race, index) =>{

                return ( <FormulaOneRace key={race.round} race={race} showInfo={index === 0}></FormulaOneRace>);
            })}
           
        </div>
    )

}
export default FormulaOneHome;