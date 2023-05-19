import React, { Component, useEffect, useState } from 'react';
import Header from './Header';
import useFetch from './useFetch';
import RecipeList from './RecipeList';
import RecipeSummary from './RecipeSummary';
import { Oval } from 'react-loader-spinner'; 
import Sidebar from 'react-sidebar';
function App() {
   const {data, isPending, error} = useFetch();
   var [selectedItems, setSelectedItems] = useState([]);
   var [sidebarOpen, setSidebarOpen] = useState(false);
   const stylesSidebar = {
    root:{
      top:'100px'
    },
   };

   const changeSidebarState = (openOrClose) =>{
    console.log('setting state');
    setSidebarOpen(openOrClose);
   }
   const changeSelectedItem = (selectedItem)=>{
    let newItemList;
    if(selectedItems.includes(selectedItem)){
      newItemList = selectedItems.filter(function(e) { return e !== selectedItem })
    }else{
      newItemList = [...selectedItems, selectedItem];
    }
    setSelectedItems(newItemList);
   }
  return (
    <div className="App">
      <header className="App-header">
       <Header />
       <button onClick={() => changeSidebarState(true)}>click me</button>
      </header>
      <div className='Body'>
      {isPending && <Oval height="80"
          width="80" ariaLabel="loading" color="red" visible={true} secondaryColor='gray' strokeWidth={2} strokeWidthSecondary={2}
        />
        }
        
       {/*data &&  <RecipeList changeSelectedItem={changeSelectedItem}
        recipes={data}/>*/}

      {/*data &&  <RecipeSummary selectedItems={selectedItems}/>*/}
      {data && <Sidebar shadow={false} styles={stylesSidebar} pullRight children={<RecipeList changeSelectedItem={changeSelectedItem}
        recipes={data}/>} sidebar={<RecipeSummary selectedItems={selectedItems}/> }
      open={sidebarOpen} onSetOpen={changeSidebarState} />}
      </div>
      
    </div>
  );
}

export default App;
