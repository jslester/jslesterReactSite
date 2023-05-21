import { Link } from "react-router-dom";
const Header = (props) => {
  const changeSidebarState = props.changeSidebarState;
  return (
    <div className="summaryHeader">
      <h2 className="summaryHeaderText">Lester Food Recipes</h2>
      <div className="summaryDivButton">
        <Link to="/" className="summaryButton">
          Home
        </Link>
      </div>
    </div>
  );
};

export default Header;
