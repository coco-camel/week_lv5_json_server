import React from "react";
import { useDispatch } from "react-redux";
import { removeTodo, toggleTodo } from "../../redux/modules/todosSlice";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Cards = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 5px;
  padding: 4px;
  font-size: 15px;
  font-weight: bold;
  width: 166px;
  border-radius: 8px;
  background-color: rgba(207, 236, 249, 0.992);
  word-wrap: break-word;
  p {
    &:nth-child(2) {
      font-size: 15px;
      font-weight: bold;
      padding: 0 0 0 5px;
      border-bottom: 1px solid rgb(79, 79, 79);
      position: relative;
      bottom: 5px;
    }
    &:nth-child(3) {
      font-size: 15px;
      font-weight: 400;
      margin: 0 0 10px 5px;
    }
  }
`;
const CardBtn = styled.div`
  bottom: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  button {
    width: 70px;
    height: 30px;
    font-size: 16px;
    margin-right: 5px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    &:nth-child(1) {
      background-color: #8be38e;
      &:hover {
        color: white;
      }
    }
    &:nth-child(2) {
      background-color: #e89c97;
      &:hover {
        color: white;
      }
    }
  }
`;
const StyleLink = styled(Link)`
  text-decoration-line: none;
  padding: 5px;
  &:link {
    color: #7700ff;
  }
  &:visited {
    color: #7700ff;
  }
  &:hover,
  &:focus {
    color: blue;
  }
  &:active {
    color: red;
  }
`;

function Todos({ todos }) {
  const dispatch = useDispatch();

  const onClickTodoRemoveHandler = (id) => {
    dispatch(removeTodo(id));
  };
  const onClickTodoToggleHandler = (id) => {
    dispatch(toggleTodo(id));
  };

  return (
    <Cards>
      {todos.map((todo) => {
        return (
          <Card key={todo.id}>
            <StyleLink to={`/todo/${todo.id}`}>상세보기</StyleLink>
            <p>{todo.title}</p>
            <p>{todo.contents}</p>
            <CardBtn>
              <button onClick={() => onClickTodoToggleHandler(todo.id)}>
                {todo.done ? "취소" : "완료"}
              </button>
              <button onClick={() => onClickTodoRemoveHandler(todo.id)}>삭제</button>
            </CardBtn>
          </Card>
        );
      })}
    </Cards>
  );
}

export default Todos;
