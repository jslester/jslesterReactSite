import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Workout.css";
import useFetch from "../Utility/useFetch";
import PastWorkout from "./PastWorkout";


const WorkoutHome = () => {
  const navigate = useNavigate();
  const [showCreateDiv, setShowCreateDiv] = useState(false);
  const [createTypeValue, setCreateTypeValue] = useState(""); //
  const {data, isPending, error } = useFetch({url:'https://jslester.com/workout/server/getLifts'});
  const {data:pastWorkouts, isPending:pendingWorkout, error:errorWorkout } = useFetch({url:'https://jslester.com/workout/server'});

  const createWorkout = () => {
    if (createTypeValue == "" || createTypeValue == "-") return;
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type: createTypeValue, method: "New Workout" }),
    };

    fetch("https://jslester.com/workout/server/", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          console.log(data);
          setShowCreateDiv(false);
          navigate("/workout/" + data.respId, { state: { id: data.respId } });
        }
      });
  };
  return (
    <div style={{width:'100%'}}>
      {!showCreateDiv &&  <button onClick={() => setShowCreateDiv(true)} className="summaryButton fullWidthButton">
        New Workout
      </button>}

      {showCreateDiv && (
        <div className="addLiftDiv">
            <div className="inputDiv">
            <label>Workout Type</label>
          <select
            type="Select"
            className="inputBox"
            value={createTypeValue}
            onChange={(e) => {
              setCreateTypeValue(e.target.value);
            }}
          >
            <option>-</option>
            <option>Push 1</option>
            <option>Pull 1</option>
            <option>Legs 1</option>
          </select>
                </div>
            
          <div>

            <button
                style={{margin: 'auto 0px auto auto'}}
                onClick={() => {
                setCreateTypeValue("");
                setShowCreateDiv(false);
                }}
                className="summaryButton"
            >
                Cancel
            </button>
            <button style={{margin: 'auto auto auto 10px'}} onClick={createWorkout} className="summaryButton actionButton">
                Create
            </button>
          </div>
        </div>
      )}
      {pastWorkouts && pastWorkouts.map(workout =>{
        return (<PastWorkout key={workout.Id} workout={workout}></PastWorkout>)
      })}
    </div>
  );
};
export default WorkoutHome;
