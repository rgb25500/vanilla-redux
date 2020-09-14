// vanilla로 시작할 것이므로 일단 다 지우고 시작!

import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

// data를 바꿔주는 function
// reducer와 modifier가 return 하는 것이 application의 data가 됨.
// argument의 count는 디폴트 0에서 시작, dispatch 할 때마다 값이 변함. 현재의 state로.
const countModifier = (count = 0, action) => {
  if (action.type === "Add") {
    return count + 1;
  } else if (action.type === "Minus") {
    return count - 1;
  } else {
    return count;
  }
};

const countStore = createStore(countModifier);

// countModifier에 data를 보내는 방법
countStore.dispatch({ type: "Add" });
countStore.dispatch({ type: "Add" });
countStore.dispatch({ type: "Add" });
countStore.dispatch({ type: "Add" });
countStore.dispatch({ type: "Add" });
countStore.dispatch({ type: "Minus" });

console.log(countStore.getState());
