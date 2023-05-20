import React, { Component, useEffect, useState } from 'react';
const Recipe = (props) =>{
    const recipe = props.recipe;
    console.log(recipe);
    const changeSelectedItem = props.changeSelectedItem;
    
    const changeLocalSelection = (recipeName) => {
        changeSelectedItem(recipeName);
        setIsSelected(!isSelected);
    }
    let [isSelected, setIsSelected] = useState(false);
    return (
        <div className={('recipe-individual' + (isSelected? ' is-selected-recipe': '') )}>
            <p onClick={() =>changeLocalSelection(recipe) } className='recipe-title'>{recipe.Name}</p>
            <div onClick={() =>changeLocalSelection(recipe) } className="recipe-description">
                <p>Type: {recipe.Type}</p>
                <p>Author: {recipe.Author}</p>
                <p>Est Time: {recipe.estimatedTime}</p>
            </div>
        </div>
    )
};

export default Recipe;