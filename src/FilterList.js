import { Link } from "react-router-dom";
const FilterList = (props) => {
  const changeSidebarState = props.changeSidebarState;
  const changeText = props.changeText;
  const changeFilter = props.changeFilter;
  let searchBarText = props.searchBarText;
  let filterBarText = props.filterBarText;
  return (
    <div className="searchBarDiv">
      <h2 style={{ paddingLeft: "10px" }}>Home</h2>
      <div className="filterDiv">
        <div className="inputDiv">
          <label>Food Type</label>
          <select
            type="Select"
            className="inputBox"
            value={filterBarText}
            onChange={(e) => {
              changeFilter(e.target.value);
            }}
          >
            <option>All</option>
            <option>Mexican</option>
            <option>Pasta</option>
            <option>Misc</option>
          </select>
        </div>
        <div className="inputDiv">
          <label>Search</label>
          <input
            className="inputBox"
            placeholder="Start typing"
            value={searchBarText}
            onChange={(e) => {
              changeText(e.target.value);
            }}
            type="text"
          ></input>
        </div>
        <Link to="/food/add" className="summaryButton">
          Add Recipe
        </Link>
        <Link to="/food/ShoppingList" className="summaryButton">
          Shopping Lists
        </Link>
        <button
          className="summaryButton"
          style={{ marginLeft: "10px" }}
          onClick={() => changeSidebarState(true)}
        >
          View Summary
        </button>
      </div>
    </div>
  );
};

export default FilterList;
