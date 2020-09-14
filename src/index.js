// vanilla로 시작할 것이므로 일단 다 지우고 시작!

import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

// data를 바꿔주는 function
// reducer와 modifier가 return 하는 것이 application의 data가 됨.
const countModifier = (state = 0) => {
  return state;
};

const countStore = createStore(countModifier);
console.log(countStore.getState());

// application에서 유일하게 바뀌는 코드
// let count = 0;
