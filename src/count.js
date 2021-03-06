// vanilla로 시작할 것이므로 일단 다 지우고 시작!

import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

number.innerText = 0;

const ADD = "ADD";
const MINUS = "MINUS";

// data를 바꿔주는 function
// reducer와 modifier가 return 하는 것이 application의 data가 됨.
// argument의 count는 디폴트 0에서 시작, dispatch 할 때마다 값이 변함. 현재의 state로.
const countModifier = (count = 0, action) => {
  // console.log(count, action);
  switch (action.type) {
    case ADD:
      return count + 1;
    case MINUS:
      return count - 1;
    default:
      return count;
  }
};

const countStore = createStore(countModifier);
// console.log(countStore);

const onChange = () => {
  number.innerText = countStore.getState();
};

countStore.subscribe(onChange);

add.addEventListener("click", () => {
  // countModifier에 data를 보내는 방법
  countStore.dispatch({ type: ADD });
});

minus.addEventListener("click", () => {
  countStore.dispatch({ type: MINUS });
});

// console.log(countStore.getState());
