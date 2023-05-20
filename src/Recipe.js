import React, { Component, useEffect, useState } from 'react';
const Recipe = (props) =>{
    const recipe = props.recipe;
    console.log(recipe);
    const changeSelectedItem = props.changeSelectedItem;
    const openModal = props.openModal;
    const changeLocalSelection = (recipeName) => {
        changeSelectedItem(recipeName);
        setIsSelected(!isSelected);
    }
    let [isSelected, setIsSelected] = useState(false);
    return (
        <div className={('recipe-individual' + (isSelected? ' is-selected-recipe': '') )}>
            <p className='recipe-title'>{recipe.Name}</p>
            <div className="recipe-description">
                <p>Author: {recipe.Author}</p>
                <p>Est Time: {recipe.estimatedTime}</p>
                <div className="recipeButtonWrapper">
                    <button className="summaryButton" onClick={() => openModal(recipe)}>View Recipe</button>
                    <button style={{marginLeft: '15px'}} className={('summaryButton' + (isSelected? ' isSelected': '') )} 
                    onClick={() => changeLocalSelection(recipe)}>
                        {(isSelected? 'Remove' : 'Add' )}
                    </button>
                    
                </div>
                
            </div>
        </div>
    )
};

export default Recipe;