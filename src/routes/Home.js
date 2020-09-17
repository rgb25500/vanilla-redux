import React, { useState } from "react";

/*
  >> Hook
  useState를 이용해 함수 컴포넌트 안에서도 state 사용 가능.
  Hone.js를 예로 들면,
  클래스 컴포넌트의 this.state.text와 this.setState와 유사
  ""를 초기값으로 text를 선언,
  text 변수의 값을 갱신하기 위해 setText를 호출,
  text와 setText를 반환함.
*/

function Home() {
  const [text, setText] = useState("");
  function onChange(e) {
    setText(e.target.value);
  }
  function onSubmit(e) {
    e.preventDefault();
    console.log(text);
    setText("");
  }
  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange}></input>
        <button>Add</button>
      </form>
      <ul></ul>
    </>
  );
}

export default Home;
// export default () => "Home";
