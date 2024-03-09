import React, { useEffect } from "react";
import Todos from "./Todos";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getTodos } from "../../redux/modules/todosSlice";

const TodoListContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const TodoListWrapper = styled.div`
  width: 50%;
  margin-left: 0;
`;
const InputTitle = styled.div`
  font-size: 20px;
  margin: 20px;
  font-weight: bold;
`;
function TodoList() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todosReducer.todos);

  useEffect(() => {
    dispatch(getTodos());
  }, []);
  return (
    <TodoListContainer>
      <TodoListWrapper>
        <InputTitle>Working.. 🔥</InputTitle>
        <Todos
          todos={todos.filter((todo) => {
            return !todo.done;
          })}
        />
      </TodoListWrapper>
      <TodoListWrapper>
        <InputTitle>Done..! 🎉</InputTitle>
        <Todos
          todos={todos.filter((todo) => {
            return todo.done;
          })}
        />
      </TodoListWrapper>
    </TodoListContainer>
  );
}

export default TodoList;
