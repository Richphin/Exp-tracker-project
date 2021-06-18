import React, {useState} from 'react'
import { Modal } from 'react-bootstrap';
import { connect } from 'react-redux';
import { deleteTracker } from '../actions/trackerActions';
import EditTrackerForm from './EditTrackerForm';



 function Tracker(props) {
     const [isModalVisible, setShowModal] = useState(false);

 function showModal () {
         setShowModal (true);
        }

function hideModal() {
    setShowModal(false);
}

    
    return (
        <div>
            <div className ="details">
                <div className = "row">
                    <div className ="col-md-2">{props.user.item}</div>
                    <div className ="col-md-2"> {props.user.date} </div>
                    <div className ="col-md-4"> {props.user.amount} </div>
                    <div className ="col-md-4"> {props.user.category} </div>
                    <button className="updt" onClick= {showModal}> Edit </button>
                    <Modal show ={isModalVisible} onHide= {hideModal} >
                        <Modal.Header clodeButton>
                            <Modal.Title>Edit </Modal.Title>
                        </Modal.Header>
                        <Modal.Body> <EditTrackerForm 
                         uesr={props.user} 
                         hideModal={hideModal} />
                        </Modal.Body>
                    </Modal>
                    <button className="rvm" onClick= {() =>{
                        props.deleteTracker(props.user.id)

                    }}>Delete</button>

                </div>
                
            </div>
            
        </div>
    )
}
let mapDispatchToProps ={
    deleteTracker,
}
var mapStateToProps =()=> {}

export default connect(mapStateToProps,mapDispatchToProps) (Tracker);
