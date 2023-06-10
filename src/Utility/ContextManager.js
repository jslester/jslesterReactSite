import { Outlet } from "react-router-dom";
import { Oval } from "react-loader-spinner";
import React, { useEffect, useState } from "react";
import useFetch from "./useFetch";
import Navbar from "./NavBar";
const ContextManager = (props) =>{
    const { type} = props;
    const { data: foodData, isPending } = useFetch({ url:"https://jslester.com/food/server", skip: type !== 'Food' });
    const data = foodData ? foodData: '';
    const [linksForNav, setLinksForNav] = useState([]);
    useEffect(()=>{
        
        if(type ==='Food'){
            document.title = 'Lester Food';
            setLinksForNav([
                {to:"/food", value:"Food Home"},
                {to:"/food/add", value:"Add Recipe"},
                {to:"/food/ShoppingList", value:"Shopping Lists"},
                {to:"food/RandomFood", value:"Random Food"}
            ])
        }else{
            document.title = 'Lester';
            setLinksForNav([
                {to:"/food", value:"Food Home"}
                
            ])
        }
    }, [type]);
    return (
        <div>
            <Navbar linksForNav={linksForNav}></Navbar>
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
                <Outlet context={{data}}></Outlet>
                </div>
        </div>
    )
}
export default ContextManager;