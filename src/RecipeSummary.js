const RecipeSummary = (props) =>{
    const selectedItems = props.selectedItems;
    return(
        <div className="recipe-summary">
            <h2 className="recipe-title">Recipe Summary</h2>
            <div className="recipe-summary-box">
                {selectedItems.map( (item) =>{
                    return (
                        <p className="summaryItem" key={item}>{item}</p>
                    );
                    
                })}
            </div>
            
        </div>
    );
} 
export default RecipeSummary;