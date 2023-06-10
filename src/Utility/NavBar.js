import "./NavBar.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const {linksForNav} = props;
  return (
    
      <header className="App-header navigation">
      <Link
        to="/"
        className="brand-name"
        onClick={() => {
          if(isNavExpanded){
            setIsNavExpanded(false);
          }
          
        }}
      >
        Home
      </Link>
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        {/* icon from heroicons.com */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          {
            linksForNav && linksForNav.map(linkVal =>{
              return (
                <li key={linkVal.value}>
                  <Link
                    to={linkVal.to}
                    onClick={() => {
                      setIsNavExpanded(!isNavExpanded);
                    }}
                  >
                    {linkVal.value}
                  </Link>
                </li>
              )
            })
          }
        </ul>
      </div>
      
          
      </header>
      
      

      

  );
};
export default Navbar;
