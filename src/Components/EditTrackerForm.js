import React, {useState } from 'react'
import { connect } from 'react-redux';
import { editTracker } from '../actions/trackerActions';

 function EditTrackerForm(props) {
     const [state,userState]= useState({
         item: props.user.item,
          date: props.user.date,
          amount: props.user.amount,
          category: props.user.category,
     });

function handleOnChange(event) {
    userState({
        ...state,
        [event.target.name]: event.target.value,
    });
}
function handleSubmit() {
    let user= { ...state,id:props.user.id };
    props.editUser(props.user.id,user);
    props.hideModal();
    console.log(user)
}
    return (
        <div>
            
            <form className="frm">
                   <div className="info">
                      <label className="head">Item</label><br></br>
                      <input type= "text" name ="item" value ={state.item} onChange = {handleOnChange} />
                   </div><br></br>

                   <div>
                       <label className="head">Date</label>
                       <input type="date" name="date" value={state.date} onChange={handleOnChange} />
                   </div><br></br>

                   <div>
                       <label className="head">Amount</label>
                       <input type="text" name="amount" value={state.amount}  onChange={handleOnChange} />
                   </div><br></br>
                   <div>
                       <label className="head">Category</label>
                       <select name="category" id="cat" value= {state.category}>
                              <option selected>Open this select menu</option>
                                 <option value="Accomodation">Accomodation</option>
                                 <option value="Housing">Housing</option>
                                 <option value="Food">Food</option>
                                 <option value="Water">Water</option>
                                 <option value="Transportation">Transportation</option>           
                     </select><br></br>
                     <div>
                     <button type="button" className="btn" onClick={handleSubmit}>
                              Save
                          </button>
                     </div>
                       
                   </div>
                </form>
            </div>
            
        
    )
}
let mapDispatchToProps ={
    editTracker,
}
var mapStateToProps= ()=>{}

export default connect (mapStateToProps,mapDispatchToProps) ( EditTrackerForm);
