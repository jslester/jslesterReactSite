import React, { Profiler, useState } from "react";
import Sidebar from "react-sidebar";
import RecipeList from "./RecipeList";
import RecipeSummary from "./RecipeSummary";

const Home = (props) => {
  const data = props.data;

  var [selectedItems, setSelectedItems] = useState([]);
  var [sidebarOpen, setSidebarOpen] = useState(false);
  function onRender(id, phase, actualDuration, baseDuration, startTime, commitTime) {
    console.log(id, phase, actualDuration, baseDuration, startTime, commitTime);
  }
  const changeSidebarState = (openOrClose) => {
    console.log("setting state");
    setSidebarOpen(openOrClose);
  };

  const stylesSidebar = {
    root: {
      marginTop: "75px",
    },
  };

  const changeSelectedItem = (selectedItem) => {
    let newItemList;
    if (selectedItems.find((e) => e.Name === selectedItem.Name)) {
      newItemList = selectedItems.filter(function (e) {
        return e.Name !== selectedItem.Name;
      });
    } else {
      newItemList = [...selectedItems, selectedItem];
    }

    setSelectedItems(newItemList);
  };
  return (
    <div className="Home">
      {data && (
        <Sidebar
          shadow={false}
          styles={stylesSidebar}
          pullRight
          children={
            <div>
              <Profiler id="App" onRender={onRender}>
              <RecipeList
                changeSidebarState={changeSidebarState}
                changeSelectedItem={changeSelectedItem}
                recipes={data}
              /></Profiler>
            </div>
          }
          sidebar={<RecipeSummary selectedItems={selectedItems} />}
          open={sidebarOpen}
          onSetOpen={changeSidebarState}
        />
      )}
    </div>
  );
};
export default Home;
