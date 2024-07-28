import { useState,useEffect } from "react";
const AddWeight = () =>{
    const [showCreateDiv, setShowCreateDiv] = useState(false);
    const [weight, setWeight] = useState();
    const logWeight = () =>{
        if (weight == "" || weight == "-") return;
        const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ weight: weight }),
        };

    fetch("https://jslester.com/weight/server/", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          console.log(data);
          setShowCreateDiv(false);
        }
      });
    }
    return(
        <div>
            {!showCreateDiv &&  <button onClick={() => setShowCreateDiv(true)} className="summaryButton fullWidthButton">
                Log Weight
            </button>
            
            }
            { showCreateDiv && 
                <div className="addLiftDiv">
                    <div className="inputDiv addWeightDiv">
                        <label>Weight</label>
                        <input className="inputBox"
                            style={{ backgroundColor: '#ebe1e8' }}
                            value={weight}
                            onChange={(e) => {
                                setWeight(e.target.value);
                            }}></input>
                    </div>
                    <div>
                        <button
                            style={{margin: 'auto 0px auto auto'}}
                            onClick={() => {
                                setWeight();
                                setShowCreateDiv(false);
                            }} 
                            className="summaryButton">
                            Cancel
                            </button>
                            <button style={{margin: 'auto auto auto 10px'}} onClick={logWeight} className="summaryButton actionButton">
                                Create
                            </button>
                        </div>
                </div>
                
            }
        </div>
    )
}

export default AddWeight;