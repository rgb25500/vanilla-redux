import React, { useState } from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";

/*
  >> Hook
  useState를 이용해 함수 컴포넌트 안에서도 state 사용 가능.
  Hone.js를 예로 들면,
  클래스 컴포넌트의 this.state.text와 this.setState와 유사
  ""를 초기값으로 text를 선언,
  text 변수의 값을 갱신하기 위해 setText를 호출,
  text와 setText를 반환함.
*/

function Home({ toDos, addToDo }) {
  //   console.log("props", props);
  const [text, setText] = useState("");
  function onChange(e) {
    setText(e.target.value);
  }
  function onSubmit(e) {
    e.preventDefault();
    addToDo(text);
    // console.log(text);
    setText("");
  }
  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange}></input>
        <button>Add</button>
      </form>
      <ul>{JSON.stringify(toDos)}</ul>
    </>
  );
}

// This connect function allows you to intercept the props that are gonna go to your Home
// 여기서 무엇을 return하던 component의 props에 추가 됨!
/*
function getCurrentState(state, ownProps) {
  console.log("state", state);
  console.log("ownProps", ownProps);
  // state : store에서 가져온 state
  // ownProps : Home에게 준 props
  // return { name: true }; // react-router로부터 받은 props 에다가 {name : true} 도 있음..
}
*/

// Redux state로부터 Home component에 prop으로써 전달한다는 의미
function mapStateToProps(state) {
  return { toDos: state };
}

function mapDispatchToProps(dispatch) {
  // console.log(dispatch); // object return error는 무시해도 됨.
  return {
    addToDo: (text) => dispatch(actionCreators.addToDo(text)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
// export default connect(mapStateToProps)(Home);
// export default () => "Home";
