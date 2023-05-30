import React, { Component, useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
const RecipeView = (props) => {
  const data = props.data;
  var viewItem = props.viewItem;

  var [viewItemLocal, setViewItemLocal] = useState({});
  let [searchParams, setSearchParams] = useSearchParams();
  //const instructionList = viewItemLocal.Instructions.split("\n");
  useEffect(() => {
    console.log("rendering", viewItem);
    if (!viewItem || !viewItem.Name) {
      console.log("view item not found");
      const recipeName = searchParams.get("Recipe");
      viewItem = data.find((x) => x.Name === recipeName);
      console.log(viewItem);
    }
    setViewItemLocal(viewItem);
  }, []);
  return (
    <div style={{ width: "100%" }}>
      <div
        style={{
          backgroundColor: "#ebe1e8",
          paddingLeft: "10px",
          color: "black",
        }}
        className="summaryHeader"
      >
        <h2>{viewItemLocal.Name}</h2>
        <div style={{ margin: "auto 30px auto auto" }}></div>
      </div>

      <div className="recipe-view-box" style={{ paddingLeft: "10px" }}>
        <div style={{ height: "100%" }}>
          <a target="_Blank" href={viewItemLocal.Link}>
            Link to recipe
          </a>
        </div>

        <div className="viewWrap">
          <div>
            <h2>Ingredients</h2>

            <div
              className=" summaryIngredient"
              style={{ marginBottom: "0px", maxWidth: "400px" }}
            >
              <ul>
                {viewItemLocal.Ingredients &&
                  viewItemLocal.Ingredients.split("\n").map(
                    (individualIngredient) => {
                      if (individualIngredient) {
                        return <li>{individualIngredient}</li>;
                      }
                      return "";
                    }
                  )}
              </ul>
            </div>
          </div>
          <div>
            <h2>Instructions</h2>
            <div
              style={{ marginBottom: "0px", maxWidth: "850px" }}
              className="summaryIngredient"
            >
              <ul style={{ listStyle: "Decimal" }}>
                {viewItemLocal.Instructions &&
                  viewItemLocal.Instructions.split("\n").map(
                    (individualInstruction) => {
                      if (individualInstruction) {
                        return <li>{individualInstruction}</li>;
                      }
                      return "";
                    }
                  )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeView;
