import { useNavigate } from "react-router-dom";

const PastWorkout = (props) =>{
    const navigate = useNavigate();
    const {workout} = props;
    return(
        <div className="workoutLift">
            <p className="recipe-title">{workout.Type}</p>
            <div>
                <div>
                    <label>Workout</label>
                    <p>{workout.Id}</p>
                </div>
                <div>
                    <label>Date</label>
                    <p>{workout.Date}</p>
                </div>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <button className="summaryButton" onClick={() => navigate("/workout/" + workout.Id, { state: { id: workout.Id } })}>View</button>
                </div>
            </div>
        </div>
    );
}
export default PastWorkout;