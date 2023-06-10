const RecipeSummary = (props) => {
  const selectedItems = props.selectedItems;
  const saveIngredients = () => {
    if (!selectedItems || selectedItems.length === 0) return;
    let ingredientsList = selectedItems
    
      .map((a, i) => `${a.Ingredients}\n`)
      .join(" ");

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ list: ingredientsList }),
    };

    fetch("https://jslester.com/food/shoppingserver", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        if (data && data.length > 0) {
          console.log(data);
        }
      });
  };
  return (
    <div className="recipe-summary">
      <h2 className="recipe-title">Recipe Summary</h2>
      <div className="recipe-summary-box">
        <div className="summary">
          {selectedItems.map((item) => {
            return (
              <div key={item.Name}>
                <b className="summaryItem">{item.Name}</b>
                <p className="summaryIngredient">{item.Ingredients}</p>
              </div>
            );
          })}
        </div>

        {selectedItems && selectedItems.length > 0 && (
          <button
            onClick={saveIngredients}
            className="summaryButton"
            style={{ marginLeft: "10px" }}
          >
            Save
          </button>
        )}
      </div>
    </div>
  );
};
export default RecipeSummary;
