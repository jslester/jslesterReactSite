import CustomRandomRoller from './CustomRandomRoller';
import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
const RandomFoodSelect = (props)=>{
    const {data} = useOutletContext();
    const [filteredTitles, setFilteredTitles] = useState([]);
    const [filterBarText, setFilterBarText] = useState("All");

    useEffect(() => {
        if (!filterBarText || !data ) return;
        var newResult = data.filter((recipe) => {
          if (filterBarText === "All") {
            return true;
          } else {
            return (
                recipe.Type === filterBarText
            );    
          }
        });
        //const filterList = newResult.map((individualData) => {return individualData.Name}); 
        setFilteredTitles(newResult);
      }, [ data,filterBarText]);
    return(
        <div className="RandomFoodDiv">
            <div className="filterDiv">
                <label>Food Type</label>
                <select
                    type="Select"
                    className="inputBox"
                    value={filterBarText}
                    onChange={(e) => {
                        setFilterBarText(e.target.value);
                    }}
                >
                    <option>All</option>
                    <option>Mexican</option>
                    <option>Pasta</option>
                    <option>Dessert</option>
                    <option>Misc</option>
                </select>
            </div>
             {filteredTitles && <CustomRandomRoller fps={ 60 } duration={ 2000 } list={ filteredTitles } /> }
        </div>
       
    )

}
export default RandomFoodSelect;