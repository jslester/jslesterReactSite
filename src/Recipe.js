import React, { Component, useEffect, useState } from 'react';
const Recipe = (props) =>{
    const recipe = props.recipe;
    const changeSelectedItem = props.changeSelectedItem;
    
    const changeLocalSelection = (recipeName) => {
        changeSelectedItem(recipeName);
        setIsSelected(!isSelected);
    }
    let [isSelected, setIsSelected] = useState(false);
    return (
        <div className={('recipe-individual' + (isSelected? ' is-selected-recipe': '') )}>
            <p onClick={() =>changeLocalSelection(recipe.Name) } className='recipe-title'>{recipe.Name}</p>
            <p onClick={() =>changeLocalSelection(recipe.Name) } className="recipe-description">
                {recipe.Description}
            </p>
        </div>
    )
};

export default Recipe;