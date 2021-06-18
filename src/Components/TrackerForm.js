import React, {useState} from 'react'
import { connect } from 'react-redux';
import addUser from '../actions/trackerActions';

 function TrackerForm(props) {
     const [state, setState] = useState({
        item: "",
        date: "",
        amount:"",
        category: "",
     })
           
         

     function handleOnChange (event) {
         setState ({
             ...state,
             [event.target.name]: event.target.value,
         });
     }
     function handleSubmit () {
         let userId = 10000 +Math.random()*10000000;
         let user  = {...state, id: userId };
         props.addUser(user)

     }

    return (
        <div>
           
                <form className="frm">
                   <div className="info">
                      <label className="head">Item</label><br></br>
                      <input type= "text" name ="item" value ={state.item} onChange = {handleOnChange} />
                   </div><br></br>

                   <div>
                       <label className="head">Date</label><br></br>
                       <input type="date" name="date" value={state.date} onChange={handleOnChange} />
                   </div><br></br>

                   <div>
                       <label className="head">Amount</label><br></br>
                       <input type="text" name="amount" value={state.amount}  onChange={handleOnChange} />
                   </div><br></br>
                   <div>
                       <div>
                       <label className="head">Category</label><br></br>
                       <select name="category" id="cat" value= {state.category} onChange={handleOnChange}>
                              <option selected>Open this select menu</option>
                                 <option value="Accomodation">Accomodation</option>
                                 <  option value="Housing">Housing</option>
                                 <option value="Food">Food</option>
                                 <option value="Water">Water</option>
                                 <option value="Transportation">Transportation</option>          
                     </select><br></br>
                     </div><br></br>
                    
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
export default connect(null,{addUser})(TrackerForm);
