// import { createStore } from "redux";
import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

// 4.1 : createAction
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

// 4.2 : createReducer
// const reducer = (state = [], action) => {
//   switch (action.type) {
//     // case ADD:
//     case addToDo.type:
//       console.log(action);
//       return [{ text: action.payload, id: Date.now() }, ...state];
//     // case DELETE:
//     case deleteToDo.type:
//       return state.filter((toDo) => toDo.id !== action.payload);
//     default:
//       return state;
//   }
// };

// createReducer shortcut
const reducer = createReducer([], {
  // 여기서 state는 empty array
  [addToDo]: (state, action) => {
    // push는 state를 mutate 해주고, 아무것도 return 하지 않음.
    state.push({ text: action.payload, id: Date.now() });
  },
  [deleteToDo]: (state, action) => {
    // 새로운 state를 return 함.
    return state.filter((toDo) => toDo.id !== action.payload);
  },
});

// 4.3 : configureStore
// const store = createStore(reducer);
const store = configureStore({ reducer });

export const actionCreators = {
  addToDo,
  deleteToDo,
};

export default store;
