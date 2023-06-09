import React, { useState } from "react";
import FoodHome from "./FoodHome";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RecipeView from "./RecipeView";
import AddRecipe from "./AddRecipe";
import ShoppingList from "./ShoppingList";
import RandomFoodSelect from "./RandomFoodSelect";
import ContextManager from "./ContextManager";
import SiteHome from "./SiteHome";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route element={<ContextManager type="Home"/>}>
            <Route exact path="/" element={<SiteHome />}></Route>
          </Route>
          
          <Route element={<ContextManager  type="Food"/>}>
            <Route exact path="/food" element={<FoodHome  />}></Route>
            <Route
              path="/food/view"
              element={<RecipeView ></RecipeView>}
            ></Route>
            <Route path="/food/add" element={<AddRecipe></AddRecipe>}></Route>
            <Route
              path="/food/ShoppingList"
              element={<ShoppingList></ShoppingList>}
            ></Route>
            <Route
              path="/food/RandomFood"
              element={<RandomFoodSelect ></RandomFoodSelect>}
            ></Route>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
