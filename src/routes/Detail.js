import React from "react";
import { connect } from "react-redux";

function Detail({ toDo }) {
  return (
    <>
      <h1>{toDo?.text}</h1>
      <h5>Created at: {toDo?.id}</h5>
    </>
  );
}

function mapStateToProps(state, ownProps) {
  const {
    match: {
      params: { id },
    },
  } = ownProps;
  console.log(id);
  return { toDos: state.find((toDo) => toDo.id === parseInt(id)) };
}
// Array.find() : testing function에 만족하는 첫번째 요소를 반환

export default connect(mapStateToProps)(Detail);
