// import {  useState } from 'react';

function Popup({del,handleDeleteItems, handleCancelModal}) {
    


    return (
      <div className={del===true ? "modal show-modal" : 'hide'} id="id01">
        <div className="modal_box">
          <p>You sure you wanna delete?</p>


          <div className="modal_btn_cont">
          <button onClick={handleCancelModal} className="modal_buttonCancel">Cancel</button>
          <button  className="modal_buttoDelete" onClick={handleDeleteItems}>
            Confirm
          </button>
          </div>
        </div>
      </div>
    );
  }
  
  export default Popup;