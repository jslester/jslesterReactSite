import './RecipeList.css';
import Recipe from './Recipe.js';
const RecipeList = (props) =>{
    const recipes = props.recipes;
    const changeSelectedItem = props.changeSelectedItem;
    return (
        <div>
            <h2>Recipes</h2>
            <div className="recipe-wrapper">
            
                {recipes.map(recipe =>{
                    return(
                        <Recipe changeSelectedItem={changeSelectedItem} key={recipe.Name} recipe={recipe}></Recipe>
                    );
                })}
            </div>
        </div>
        
    );

}
export default RecipeList;