import { createStore } from "redux";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const reducer = (state = [], action) => {
  console.log(action);
  switch (action.type) {
    case ADD_TODO:
      return [...state, { text: action.text, id: Date.now() }]; // 과거의 state와 새로운 TODO를 갖고 있음.
    case DELETE_TODO:
      return [];
    default:
      return state;
  }
};
// reducer는 새로운 state objects를 return한다.
// return state.push(action.text) 이렇게 변형시키지 않고 새로운 array를 만듬

const store = createStore(reducer);

store.subscribe(() => console.log(store.getState()));

const onSubmit = (e) => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  //   createToDo(toDo);   dispatch 시킬 것임.
  store.dispatch({ type: ADD_TODO, text: toDo });
};

form.addEventListener("submit", onSubmit);
