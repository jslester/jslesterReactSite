import React, { useState } from "react";
import FoodHome from "./Food/FoodHome";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RecipeView from "./Food/RecipeView";
import AddRecipe from "./Food/AddRecipe";
import WorkoutHome from "./Workout/WorkoutHome";
import WorkoutView from "./Workout/WorkoutView";
import ShoppingList from "./Food/ShoppingList";
import RandomFoodSelect from "./Food/RandomFoodSelect";
import ContextManager from "./Utility/ContextManager";
import SiteHome from "./Home/SiteHome";
import ChatHome from "./ChatDemo/ChatHome";
import FormulaOneHome from "./Formula1/FormulaOneHome"
import SportsHome from "./Sports/SportsHome";
import AddLift from "./Workout/AddLift";
import Heardle from "./Heardle/Heardle";

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
          <Route element={<ContextManager type="Workout"/>}>
            <Route exact path="/workout" element={<WorkoutHome />}></Route>
            <Route exact path="/workout/AddLift" element={<AddLift />}></Route>
            <Route path="/workout/*" element={<WorkoutView />}></Route>
          </Route>
          <Route element={<ContextManager type="Sports"/>}>
            <Route exact path="/sports" element={<SportsHome />}></Route>
            <Route exact path="/sports/formula1" element={<FormulaOneHome />}></Route>
          </Route>
          <Route element={<ContextManager type="Chat"/>}>
            <Route exact path="/chat" element={<ChatHome />}></Route>
          </Route>
          <Route element={<ContextManager type="Heardle"/>}>
            <Route exact path="/heardle" element={<Heardle />}></Route>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
