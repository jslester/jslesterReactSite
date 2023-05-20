import React, { Component, useEffect, useState } from 'react';
import Header from './Header';
import useFetch from './useFetch';
import RecipeList from './RecipeList';
import RecipeSummary from './RecipeSummary';
import { Oval } from 'react-loader-spinner'; 
import Sidebar from 'react-sidebar';
import RecipeView from './RecipeView';
function App() {
   const {data, isPending, error} = useFetch();
   var [selectedItems, setSelectedItems] = useState([]);
   var [sidebarOpen, setSidebarOpen] = useState(false);
   var [modalIsOpen, setIsOpen] = useState(false);
   var [viewItem, setViewItem] = useState({});
    
   const openModal = (recipe)=> {
    setIsOpen(true);
    setViewItem(recipe)
  }
  const closeModal = ()=> {
    setIsOpen(false);
  }
   const stylesSidebar = {
    root:{
      marginTop:'75px'
    },
   };

   const changeSidebarState = (openOrClose) =>{
    console.log('setting state');
    setSidebarOpen(openOrClose);
   }
   const changeSelectedItem = (selectedItem)=>{
    let newItemList;
    let valueExist = false;
    if (selectedItems.find(e => e.Name === selectedItem.Name)) {
      newItemList = selectedItems.filter(function(e) { return e.Name !== selectedItem.Name })
    }else{
      newItemList = [...selectedItems, selectedItem];
    }
    
    setSelectedItems(newItemList);
   }
  return (
    <div className="App">
      <header className="App-header">
       <Header changeSidebarState={changeSidebarState}/>
      </header>
      <div className='Body'>
      {isPending && <Oval height="80"
          width="80" ariaLabel="loading" color="red" visible={true} secondaryColor='gray' strokeWidth={2} strokeWidthSecondary={2}
        />
        }
        
       {data &&  <RecipeView viewItem={viewItem} modalIsOpen={modalIsOpen}
        closeModal={closeModal}/>}

      {/*data &&  <RecipeSummary selectedItems={selectedItems}/>*/}
      {data && <Sidebar shadow={false} styles={stylesSidebar} pullRight children={<div>
       
      <RecipeList openModal={openModal} changeSelectedItem={changeSelectedItem}
        recipes={data}/> </div>} sidebar={<RecipeSummary selectedItems={selectedItems}/> }
      open={sidebarOpen} onSetOpen={changeSidebarState} />}
      
      </div>
      
    </div>
  );
}

export default App;
