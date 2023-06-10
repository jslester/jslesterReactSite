import "./RecipeList.css";
import FilterList from "./FilterList";
import Recipe from "./Recipe.js";
import React, { Component, useEffect, useState } from "react";
const RecipeList = (props) => {
  const originalRecipes = props.recipes;
  const [recipes, setRecipes] = useState(props.recipes);
  const changeSidebarState = props.changeSidebarState;
  const changeSelectedItem = props.changeSelectedItem;
  const [searchBarText, setSearchBarText] = useState("");
  const [filterBarText, setFilterBarText] = useState("All");
  useEffect(() => {
    console.log("changing one or the other", searchBarText, filterBarText);
    if (!filterBarText) return;
    var newResult = originalRecipes.filter((recipe) => {
      if (filterBarText === "All") {
        return recipe.Name.toLowerCase().includes(searchBarText.toLowerCase());
      } else {
        if (!searchBarText) {
          return recipe.Type === filterBarText;
        } else {
          return (
            recipe.Name.toLowerCase().includes(searchBarText.toLowerCase()) &&
            recipe.Type === filterBarText
          );
        }
      }
    });
    setRecipes(newResult);
  }, [searchBarText, filterBarText]);

  return (
    <div>
      <FilterList
        searchBarText={searchBarText}
        changeText={setSearchBarText}
        changeFilter={setFilterBarText}
        filterBarText={filterBarText}
        changeSidebarState={changeSidebarState}
      />

      <div className="recipe-wrapper">
        {recipes.map((recipe) => {
          return (
            <Recipe
              changeSelectedItem={changeSelectedItem}
              key={recipe.Name}
              recipe={recipe}
            ></Recipe>
          );
        })}
      </div>
    </div>
  );
};
export default RecipeList;
