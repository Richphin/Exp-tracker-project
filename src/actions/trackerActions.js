import React from 'react'

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
