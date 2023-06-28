import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../Utility/useFetch";
import WorkoutLift from "./WorkoutLift";
const WorkoutView = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [showCreateDiv, setShowCreateDiv] = useState(false);
    const [inputs, setInputs] = useState({});
    const [workoutLifts, setWorkoutLifts] = useState([]);
    const { data, isPending, error } = useFetch({ url: 'https://jslester.com/workout/server/getLifts/' + location.state.id });
    
    useEffect(() => {
        if(data){
            console.log(data.workoutlifts);
            setWorkoutLifts(data.workoutlifts);
        }
    }, [data]);
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs((values) => ({ ...values, [name]: value }));
    };
    const saveLift = () => {
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                workoutId: location.state.id,
                method: "New Lift",
                reps: inputs.Reps, 
                weight: inputs.Weight, 
                sets: inputs.Sets, 
                lift: inputs.Lift
            }),
        };
        fetch("https://jslester.com/workout/server/", requestOptions)
            .then((response) => response.json())
            .then((data) => {
                if (data) {
                    console.log(data);
                    setShowCreateDiv(false);
                    setWorkoutLifts([...workoutLifts, inputs]);
                }
            });
    }
    return (
        <div style={{width:'100%'}}>
            {!showCreateDiv && 
            <div style={{paddingTop:'10px'}}>
                <button className="summaryButton fullWidthButton" onClick={() => setShowCreateDiv(true)}>Add Lift</button>
             </div>   
                }
            {showCreateDiv &&
                <div className="addLiftDiv">
                     <div>
                     <div >
                            <label>Lift</label>
                            <select
                                type="Select"
                                className="inputBox"
                                value={inputs.Lift || ""}
                                name="Lift"
                                onChange={handleChange}
                            >
                                <option>-</option>
                                {data && data.lifts.map(lift => {

                                    return <option key={lift.Name}>{lift.Name}</option>
                                })}
                            </select>
                        </div>
                        </div>
                    <div>
                        
                        <div className="inputDiv">
                            <label>Weight(lbs)</label>
                            <input type="number"
                                name="Weight"
                                className="inputBox"
                                style={{ backgroundColor: '#ebe1e8' }}
                                value={inputs.Weight || ""}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="inputDiv">
                            <label>Reps</label>
                            <input type="number"
                                name="Reps"
                                className="inputBox"
                                style={{ backgroundColor: '#ebe1e8' }}
                                value={inputs.Reps || ""}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="inputDiv">
                            <label>Sets</label>
                            <input type="number"
                                name="Sets"
                                className="inputBox"
                                style={{ backgroundColor: '#ebe1e8' }}
                                value={inputs.Sets || ""}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div>
                        <button style={{margin: 'auto 0px auto auto'}} className="summaryButton" onClick={() => setShowCreateDiv(false)}>Cancel</button>
                        <button style={{margin: 'auto auto auto 10px'}} className="summaryButton actionButton" onClick={saveLift}>Save</button>
                    </div>
                </div>
            }
            {workoutLifts && workoutLifts.map(lift =>{
                return <WorkoutLift key={lift.Lift} lift={lift}></WorkoutLift>
            })}
        </div>

    );
};
export default WorkoutView;
