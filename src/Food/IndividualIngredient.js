import { useEffect, useState } from "react";
const IndividualIngredient = (props) => {
  let isDefaultFilter = props.isDefaultFilter;
  const [isSelected, setIsSelected] = useState(isDefaultFilter);
  const index = props.index;
  const changeFilterList = props.changeFilterList;
  const toggleSelection = () => {
    setIsSelected(!isSelected);
    changeFilterList(index);
  };
  useEffect(() => {
    setIsSelected(isDefaultFilter);
  }, [isDefaultFilter]);
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
