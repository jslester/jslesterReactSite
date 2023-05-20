import './RecipeList.css';
import Recipe from './Recipe.js';
const RecipeList = (props) =>{
    const recipes = props.recipes;
    const changeSelectedItem = props.changeSelectedItem;
    const openModal = props.openModal;
    return (
        <div>
            <div className="recipe-wrapper">
            
                {recipes.map(recipe =>{
                    return(
                        <Recipe openModal={openModal} changeSelectedItem={changeSelectedItem} key={recipe.Name} recipe={recipe}></Recipe>
                    );
                })}
            </div>
        </div>
        
    );

}
export default RecipeList;