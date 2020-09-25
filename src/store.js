import { createStore } from "redux";
import { createAction } from "@reduxjs/toolkit";

// 4.2 : createAction
// const ADD = "ADD";
// const DELETE = "DELETE";

// const addToDo = (text) => {
//   return {
//     type: ADD,
//     text,
//   };
// };

// const deleteToDo = (id) => {
//   return {
//     type: DELETE,
//     id: parseInt(id),
//   };
// };

// createAction shortcut
const addToDo = createAction("ADD");
const deleteToDo = createAction("DELETE");

console.log(addToDo, deleteToDo); // function
console.log(addToDo.type, deleteToDo.type); // text
console.log(addToDo(), deleteToDo()); // object

const reducer = (state = [], action) => {
  switch (action.type) {
    // case ADD:
    case addToDo.type:
      console.log(action);
      return [{ text: action.payload, id: Date.now() }, ...state];
    // case DELETE:
    case deleteToDo.type:
      return state.filter((toDo) => toDo.id !== action.payload);
    default:
      return state;
  }
};

const store = createStore(reducer);

export const actionCreators = {
  addToDo,
  deleteToDo,
};

export default store;
