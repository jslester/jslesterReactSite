const WorkoutLift = (props) =>{
    const {lift} = props;
    console.log(lift);
    return( 
        <div className="workoutLift">
            <p className="recipe-title">{lift.Lift}</p>
            <div>
                <div>
                    <label>Weight</label>
                    <p>{lift.Weight}</p>
                </div>
                <div>
                    <label>Reps</label>
                    <p>{lift.Reps}</p>
                </div>
                <div>
                    <label>Sets</label>
                    <p>{lift.Sets}</p>
                </div>
            </div>
        </div>
    )
}
export default WorkoutLift;