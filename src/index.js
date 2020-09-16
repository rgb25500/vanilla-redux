import { createStore } from "redux";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

// 오직 action만 return 함
const addToDo = (text) => {
  return { type: ADD_TODO, text };
};

const deleteToDo = (id) => {
  return {
    type: DELETE_TODO,
    id,
  };
};

const reducer = (state = [], action) => {
  console.log(action);
  switch (action.type) {
    case ADD_TODO:
      return [{ text: action.text, id: Date.now() }, ...state]; // 과거의 state와 새로운 TODO를 갖고 있음.
    case DELETE_TODO:
      return state.filter((toDo) => toDo.id !== action.id);
    // action은 id와 함께 넘어옴.
    default:
      return state;
  }
};
// reducer는 새로운 state objects를 return한다.
// return state.push(action.text) 이렇게 변형시키지 않고 새로운 array를 만듬

const store = createStore(reducer);

store.subscribe(() => console.log(store.getState()));

const dispatchAddToDo = (text) => {
  //   createToDo(toDo);   dispatch 시킬 것임.
  store.dispatch(addToDo(text));
};

const dispatchDeleteToDo = (e) => {
  // console.log("delete");
  const id = parseInt(e.target.parentNode.id); // 클릭되는 버튼 target
  store.dispatch(deleteToDo(id));
};

const paintToDos = () => {
  const toDos = store.getState();
  ul.innerHTML = ""; // toDos가 계속 repaint되기 때문에
  toDos.forEach((toDo) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.innerText = "DEL";
    btn.addEventListener("click", dispatchDeleteToDo);
    li.id = toDo.id;
    li.innerText = toDo.text;
    li.appendChild(btn);
    ul.appendChild(li);
  });
};
store.subscribe(paintToDos);

const onSubmit = (e) => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  dispatchAddToDo(toDo);
};

form.addEventListener("submit", onSubmit);
