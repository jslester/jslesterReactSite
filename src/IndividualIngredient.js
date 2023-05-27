import { useEffect, useState } from "react";
const IndividualIngredient = (props) => {
  const [isSelected, setIsSelected] = useState(false);
  const toggleSelection = () => {
    console.log("toggle");
    setIsSelected(!isSelected);
  };
  const ingredient = props.ingredient;
  return (
    <p
      className={"singleIngredientItem " + (isSelected ? "selected-Item" : "")}
      onClick={toggleSelection}
    >
      {ingredient}
    </p>
  );
};
export default IndividualIngredient;
