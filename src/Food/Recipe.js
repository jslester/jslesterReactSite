import React, { useState } from "react";
import { Link } from "react-router-dom";
const Recipe = (props) => {
  const recipe = props.recipe;
  const changeSelectedItem = props.changeSelectedItem;
  const changeLocalSelection = (recipeName) => {
    changeSelectedItem(recipeName);
    setIsSelected(!isSelected);
  };
  let [isSelected, setIsSelected] = useState(false);
  return (
    <div
      className={
        "recipe-individual" + (isSelected ? " is-selected-recipe" : "")
      }
    >
      <p className="recipe-title">{recipe.Name}</p>
      <div className="recipe-description">
        <p>Author: {recipe.Author}</p>
        <p>Est Time: {recipe.estimatedTime}</p>
        <div className="recipeButtonWrapper">
          <Link
            to={"/food/view?Recipe=" + recipe.Name}
            className="summaryButton"
          >
            View Recipe
          </Link>
          {changeSelectedItem && <button
            style={{ marginLeft: "15px" }}
            className={"summaryButton" + (isSelected ? " isSelected" : "")}
            onClick={() => changeLocalSelection(recipe)}
          >
            {isSelected ? "Remove" : "Add"}
          </button>}
        </div>
      </div>
    </div>
  );
};

export default Recipe;
