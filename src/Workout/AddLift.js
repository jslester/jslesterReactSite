import { useState } from "react";
const AddLift = () =>{
    const [inputs, setInputs] = useState({});
    const saveLift = () => {
        setInputs({});
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                method: "Add Lift",
                Name: inputs.Name, 
                Type: inputs.Type
            }),
        };
        fetch("https://jslester.com/workout/server/", requestOptions)
            .then((response) => response.json())
            .then((data) => {
                if (data) {
                    console.log(data);
                }
            });
    }
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs((values) => ({ ...values, [name]: value }));
    };
    return (
        <div className="AddLift">
            <div className="inputDiv">
                <label>Workout Name</label>
                <input type="text"
                    name="Name"
                    className="inputBox"
                    style={{ backgroundColor: '#ebe1e8' }}
                    value={inputs.Name || ""}
                    onChange={handleChange}
                />
            </div>

            <div className="inputDiv">
                <label>Type</label>
                <select
                    type="Select"
                    name="Type"
                    className="inputBox"
                    value={inputs.Type || ""}
                    onChange={handleChange}
                    >
                <option>-</option>
                <option>Push 1</option>
                <option>Pull 1</option>
                <option>Legs 1</option>
            </select>
            </div>
            <div>
                <button style={{margin: 'auto auto auto 10px'}} className="summaryButton actionButton" onClick={saveLift}>Save</button>
            </div>
        </div>
    )
}

export default AddLift;