import Modal from 'react-modal';
const RecipeView = (props) =>{
    //Modal.setAppElement('root');
    const modalIsOpen = props.modalIsOpen;
    const closeModal = props.closeModal;
    const viewItem = props.viewItem;
    const customStyles = {
        content: {
          padding:'0px',
          bottom: 'auto',
          maxHeight:'600px',
          overflowY: 'scroll',
          margin:'0px auto',
          borderRadius: '12px',
          backgroundColor: '#ebe1e8'
        },
      };

    return(
        <div>
            
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                overlayClassName="Overlay"
                contentLabel="Example Modal"
            >
        
                
                    <div style={{top: '0', position: 'sticky', alignItems: 'center'}} className="summaryHeader">
                        <h2  >{viewItem.Name}</h2>
                        <div style={{margin: 'auto 30px auto auto'}}>
                            <button className="summaryButton viewButton" onClick={closeModal}>Close</button>
                        </div>
                        
                    </div>
                    
                    <div className="recipe-summary-box" >
                        <a target="_Blank" href={viewItem.Link}>Link to recipe</a>
                        <div className='viewWrap'>
                           
                            <div>
                                <h2 >Ingredients</h2>

                                <div className=" summaryIngredient"  style={{ marginBottom: '0px', maxWidth: '400px'}}>
                                    {viewItem.Ingredients}
                                </div>
                            </div>
                            <div>
                                <h2>Instructions</h2>
                                <div style={{ marginBottom: '0px', maxWidth: '850px'}} className='summaryIngredient'>
                                    {viewItem.Instructions}
                                </div>
                            </div>
                            
                        </div>
                        
                    </div>
            
            </Modal>
        </div>
    )
}

export default RecipeView;