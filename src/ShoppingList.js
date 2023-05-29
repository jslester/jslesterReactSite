import { useEffect, useState } from "react";
import useFetch from "./useFetch";
import IndividualIngredient from "./IndividualIngredient";
const ShoppingList = () => {
  const [selecetedOption, setSelecetedOption] = useState("");
  const [selecetedIngredients, setSelecetedIngredients] = useState([]);
  const [filterList, setFilterList] = useState([]);
  const { data, isPending, error } = useFetch(
    "https://jslester.com/food/shoppingserver"
  );
  const resetValues = () => {
    setFilterList([]);
    localStorage.setItem("ingredientFilterList", JSON.stringify([]));
  };
  const changeFilterList = (val) => {
    var copiedList = [...filterList];
    var index = filterList.indexOf(val);
    if (index !== -1) {
      copiedList.splice(index, 1);
    } else {
      copiedList = [...copiedList, val];
    }
    setFilterList(copiedList);
    localStorage.setItem("ingredientFilterList", JSON.stringify(copiedList));
  };

  useEffect(() => {
    if (data && data.length > 0) {
      if (!selecetedOption) {
        if (localStorage.getItem("shoppingListDate")) {
          const savedDate = localStorage.getItem("shoppingListDate");
          setFilterList(
            JSON.parse(localStorage.getItem("ingredientFilterList")) || []
          );
          let correctIngredients = data.find(
            (shoppingItem) => shoppingItem.createddate === savedDate
          );
          if (correctIngredients) {
            setSelecetedOption(correctIngredients.createddate);
            setSelecetedIngredients(
              correctIngredients.shoppinglist.split("\n")
            );
          }
        } else {
          localStorage.setItem("shoppingListDate", data[0].createddate);
          setSelecetedOption(data[0].createddate);
          setSelecetedIngredients(data[0].shoppinglist.split("\n"));
        }
      } else {
        let correctIngredients = data.find(
          (shoppingItem) => shoppingItem.createddate === selecetedOption
        );
        setSelecetedIngredients(correctIngredients.shoppinglist.split("\n"));
        if (localStorage.getItem("shoppingListDate") !== selecetedOption) {
          setFilterList([]);
          localStorage.setItem("ingredientFilterList", JSON.stringify([]));
        }
        localStorage.setItem("shoppingListDate", selecetedOption);
      }
    }
  }, [selecetedOption, data]);
  return (
    <div className="shoppingListDiv">
      <div className="shoppingListHeader">
        <div>
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
        </div>
        <button className="summaryButton" onClick={resetValues}>
          Reset
        </button>
      </div>
      {selecetedIngredients &&
        selecetedIngredients.map((ingredient, index) => {
          if (ingredient) {
            return (
              <IndividualIngredient
                index={index}
                ingredient={ingredient}
                key={ingredient + index}
                isDefaultFilter={filterList.includes(index)}
                changeFilterList={changeFilterList}
              />
            );
          }
        })}
    </div>
  );
};
export default ShoppingList;
