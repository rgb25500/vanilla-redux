import {
  configureStore,
  createAction,
  createReducer,
  createSlice,
} from "@reduxjs/toolkit";

// 4.4 : createSlice
/* 
// createAction shortcut
const addToDo = createAction("ADD");
const deleteToDo = createAction("DELETE");

console.log(addToDo, deleteToDo); // function
console.log(addToDo.type, deleteToDo.type); // text
console.log(addToDo(), deleteToDo()); // object

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
*/

const toDos = createSlice({
  // options
  name: "toDosReducer",
  initialState: [],
  reducers: {
    // action을 생성하기 보다는, addToDo를 작성함.
    add: (state, action) => {
      state.push({ text: action.payload, id: Date.now() });
    },
    remove: (state, action) =>
      state.filter((toDo) => toDo.id !== action.payload),
  },
});

// const store = configureStore({ reducer });
// toDos의 reducer를 export해서 store의 reducer를 다시 설정해줌.
const store = configureStore({ reducer: toDos.reducer });

// toDos.actions로부터 add와 remove라는 actions를 export 할 수 있다.
console.log(toDos.actions);
export const { add, remove } = toDos.actions;

export default store;

// actionCreators가 더 이상 존재하지 않기 떄문에 Home.js, ToDo.js로 가서 코드 수정!
