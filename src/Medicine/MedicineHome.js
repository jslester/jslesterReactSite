import {AuthTokenRetrieve, LoginButton, LogoutButton} from "../Utility/AuthTokenRetrieve";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MedicineTable from "./MedicineTable";
import useFetch from "../Utility/useFetch";
import "./Medicine.css";
import WeightHome from "./WeightHome";
const MedicineHome = () =>{
    const [showCreateDiv, setShowCreateDiv] = useState(false);
    const [shouldShow, setShouldShow] = useState();
    const {data, isPending, error } = useFetch({url:'https://jslester.com/medicine/server/'});
    let {shouldShow:shouldShowGoogle} = AuthTokenRetrieve();
    useEffect(() => {
      setShouldShow(shouldShowGoogle);
    }, [shouldShowGoogle]);

    return(
        <div style={{width:'100%'}}>
            {shouldShow ? (
                <div className="MedicineHome">
                    <WeightHome/>
                    <MedicineTable data={data}/>
                </div>
                
            ): (
                <LoginButton setShouldShow={setShouldShow}></LoginButton>

            )}
      </div>
    )
  
}

export default MedicineHome;