import { useEffect , useState} from "react";
import "./FormulaOne.css"
const FormulaOneRace = (props) =>{
    var {race, showInfo} = props;
    
    const clickedHeader = () =>{
        console.log('clickedHeader');
        setShowAdditionalSection(!showAdditionalSection);
    }

    console.log(race);
    const [parsedRace, setParcedRace] = useState({})
    const [showAdditionalSection, setShowAdditionalSection] = useState(showInfo);
    const [formattedDate, setFormattedDate] = useState('');
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const dateSplitter = (dateToSplit, timeToSplit) =>{
        const d = new Date(dateToSplit+'T'+timeToSplit);
        return d.toLocaleString();
    }
    useEffect(() =>{
        if(race){
            const d = new Date(race.date); 
            race.formattedRaceDay = months[d.getMonth()]+ ' ' + d.getUTCDate()
            race.formattedFirstPractice = dateSplitter(race.FirstPractice.date, race.FirstPractice.time);
            race.formattedSecondPractice = dateSplitter(race.SecondPractice.date, race.SecondPractice.time);
            race.formattedQualifying = dateSplitter(race.Qualifying.date, race.Qualifying.time);
            if(race.ThirdPractice){
                race.formattedThirdPractice = dateSplitter(race.ThirdPractice.date, race.ThirdPractice.time);
            }
            if(race.Sprint){
                race.formattedSprint = dateSplitter(race.Sprint.date, race.Sprint.time);
            }
            race.formattedRace = dateSplitter(race.date, race.time);
            setParcedRace(race);
        }
    }, [race])
    return(
        <div className="RaceDivBody" >
            <div className="RaceDivHeader" onClick={clickedHeader}> 
                <div style={{flexGrow: 1}}>{parsedRace.formattedRaceDay + ' - ' + parsedRace.raceName }</div>
                <div style={{margin:'0px 10px 0px auto'}}>{(showAdditionalSection? "-" : '+')}</div>
            </div>
            {showAdditionalSection && <div>
                {parsedRace && parsedRace.Sprint && 
                    
                    <div> 
                        <p>First Practice: {parsedRace.formattedFirstPractice}</p>
                        <p>Qualifying: {parsedRace.formattedQualifying}</p>
                        <p>Sprint Shootout: {parsedRace.formattedSecondPractice}</p>
                        <p>Sprint Race: {parsedRace.formattedSprint}</p>
                        <p>Race: {parsedRace.formattedRace}</p>
                    </div>
                }
                {parsedRace && !parsedRace.Sprint && 
                
                <div> 
                    <p>First Practice: {parsedRace.formattedFirstPractice}</p>
                    <p>Second Practice: {parsedRace.formattedSecondPractice}</p>
                    <p>Third Practice: {parsedRace.formattedThirdPractice}</p>
                    <p>Qualifying: {parsedRace.formattedQualifying}</p>
                    <p>Race: {parsedRace.formattedRace }</p>
                </div>
                }
                    
                
            </div>}

        </div>
    )
}
export default FormulaOneRace;