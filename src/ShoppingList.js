import { useEffect, useState } from "react";
import useFetch from "./useFetch";
import IndividualIngredient from "./IndividualIngredient";
const ShoppingList = () => {
  const [selecetedOption, setSelecetedOption] = useState("");
  const [selecetedIngredients, setSelecetedIngredients] = useState([]);
  const { data, isPending, error } = useFetch(
    "https://jslester.com/food/shoppingserver"
  );

  //need to save the index value of an item being clicked in local storage, as an array of numbers
  //on reload/ change of selected item/ change of selected list, make changes to local storage to adjust
  //
  const clickRowHandle = (val) => {
    console.log(val);
  };
  useEffect(() => {
    console.log(data);
    if (data && data.length > 0) {
      if (!selecetedOption) {
        setSelecetedOption(data[0].createddate);
        setSelecetedIngredients(data[0].shoppinglist.split("\n"));
      } else {
        let correctIngredients = data.find(
          (shoppingItem) => shoppingItem.createddate === selecetedOption
        );
        console.log(correctIngredients.shoppinglist.split("\n"));
        setSelecetedIngredients(correctIngredients.shoppinglist.split("\n"));
      }

      //console.log(correctIngredients);
      //
    }
  }, [selecetedOption, data]);
  return (
    <div className="recipe-summary-box">
      <div className="inputDiv">
        <label>Saved Lists</label>
        <select
          type="Select"
          className="inputBox"
          value={selecetedOption}
          onChange={(e) => {
            setSelecetedOption(e.target.value);
          }}
        >
          {data &&
            data.map((shoppingResp) => {
              return (
                <option key={shoppingResp.createddate}>
                  {shoppingResp.createddate}
                </option>
              );
            })}
        </select>
        {selecetedIngredients &&
          selecetedIngredients.map((ingredient, index) => {
            return (
              <IndividualIngredient ingredient={ingredient} key={ingredient} />
            );
          })}
      </div>
    </div>
  );
};
export default ShoppingList;
