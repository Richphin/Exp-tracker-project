import React from 'react'

export function getAllUsers() {
    return (dispatch, state, getFirestore)=>{
        const db =getFirestore();
        db.collection ('users')
        .get()
        .then((results) => {
            let users =[];
            results.forEach((doc) => {
                users.push(doc.data());
            });
            dispatch({
                type: 'ADD_ALL_USERS',
            })
        })
        .catch ((error)=> {
            console.log(error)
        });
    }
}





  export function addUser(newUser) { 
  return {
      type: "ADD_USER",
      payload: newUser
  }
}
export function deleteTracker(id) {
    return{
        type: "DELETE_USER",
        payload: id,
    }
}
export function editTracker(id, updatedUser) {
    return {
        type: "EDIT_USER",
        payload: {id: id,updatedUserInfo: updatedUser}
    }
}
export default addUser;
