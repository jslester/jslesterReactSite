import React, { Component, useEffect, useState } from "react";
import Header from "./Header";
import useFetch from "./useFetch";
import { Oval } from "react-loader-spinner";
import Home from "./Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RecipeView from "./RecipeView";
import AddRecipe from "./AddRecipe";
function App() {
  const { data, isPending, error } = useFetch();
  var [viewItem, setViewItem] = useState({});

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Header />
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
              path="/"
              element={data && <Home setViewItem={setViewItem} data={data} />}
            ></Route>
            <Route
              path="/view"
              element={
                data && (
                  <RecipeView data={data} viewItem={viewItem}></RecipeView>
                )
              }
            ></Route>
            <Route path="/add" element={<AddRecipe></AddRecipe>}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
