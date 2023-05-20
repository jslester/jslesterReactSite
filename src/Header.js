
const Header = (props) =>{
    const changeSidebarState = props.changeSidebarState;
    return (
        <div className="summaryHeader">
            <h2 className="summaryHeaderText">Lester Food Recipes</h2>
            <div className="summaryDivButton">
                <button  className="summaryButton" onClick={() => changeSidebarState(true)}>Summary</button>
            </div>
            
        </div>
    )
}

export default Header;