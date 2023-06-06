import React, { useState } from "react";
import NavBar from "./NavBar";
import useFetch from "./useFetch";
import { Oval } from "react-loader-spinner";
import Home from "./Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RecipeView from "./RecipeView";
import AddRecipe from "./AddRecipe";
import ShoppingList from "./ShoppingList";
import RandomFoodSelect from "./RandomFoodSelect";
function App() {
  const { data, isPending } = useFetch("https://jslester.com/food/server");

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          {<NavBar />}
          {/*<Header />*/}
        </header>
        <div className="Body">
          {isPending && (
            <Oval
              height="80"
              width="80"
              ariaLabel="loading"
              color="red"
              visible={true}
              secondaryColor="gray"
              strokeWidth={2}
              strokeWidthSecondary={2}
            />
          )}
          <Routes>
            <Route
              exact
              path="/food"
              element={data && <Home data={data} />}
            ></Route>
            <Route
              path="/food/view"
              element={
                data && (
                  <RecipeView data={data} ></RecipeView>
                )
              }
            ></Route>
            <Route path="/food/add" element={<AddRecipe></AddRecipe>}></Route>
            <Route
              path="/food/ShoppingList"
              element={<ShoppingList></ShoppingList>}
            ></Route>
            <Route
              path="/food/RandomFood"
              element={<RandomFoodSelect data={data}></RandomFoodSelect>}>

              </Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
