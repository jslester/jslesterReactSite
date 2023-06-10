import React, {  useState, useContext } from "react";
import Sidebar from "react-sidebar";
import RecipeList from "./RecipeList";
import RecipeSummary from "./RecipeSummary";
import { useOutletContext } from "react-router-dom";
const Home = (props) => {
  const {data} = useOutletContext();
  var [selectedItems, setSelectedItems] = useState([]);
  var [sidebarOpen, setSidebarOpen] = useState(false);

  const changeSidebarState = (openOrClose) => {
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
              <RecipeList
                changeSidebarState={changeSidebarState}
                changeSelectedItem={changeSelectedItem}
                recipes={data}
              />
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
