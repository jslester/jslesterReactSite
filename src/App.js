import React, { useState } from "react";
import FoodHome from "./Food/FoodHome";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RecipeView from "./Food/RecipeView";
import AddRecipe from "./Food/AddRecipe";
import ShoppingList from "./Food/ShoppingList";
import RandomFoodSelect from "./Food/RandomFoodSelect";
import ContextManager from "./Utility/ContextManager";
import SiteHome from "./Home/SiteHome";
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
