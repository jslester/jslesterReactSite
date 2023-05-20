const RecipeSummary = (props) =>{
    const selectedItems = props.selectedItems;
    return(
        <div className="recipe-summary">
            <h2 className="recipe-title">Recipe Summary</h2>
            <div className="recipe-summary-box">
                {selectedItems.map( (item) =>{
                    return (
                        <div key={item.Name}>
                            <b className="summaryItem">{item.Name}</b>
                            <p className="summaryIngredient">{item.Ingredients}</p>
                        </div>
                        
                    );
                    
                })}
            </div>
            
        </div>
    );
} 
export default RecipeSummary;