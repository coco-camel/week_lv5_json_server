import React, { useEffect } from "react";
import Todos from "./Todos";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { __getTodos } from "../../redux/modules/todosSlice";
import { getUser } from "../../apis/userApis/getUser";

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
    dispatch(__getTodos());
    // getUser();
  }, [dispatch]);

  return (
    <TodoListContainer>
      <TodoListWrapper>
        <InputTitle>Working.. 🔥</InputTitle>
        {todos ? (
          <Todos
            todos={todos.filter((todo) => {
              return !todo.done;
            })}
          />
        ) : (
          <p>로딩중.....</p>
        )}
      </TodoListWrapper>
      <TodoListWrapper>
        <InputTitle>Done..! 🎉</InputTitle>
        {todos ? (
          <Todos
            todos={todos.filter((todo) => {
              return todo.done;
            })}
          />
        ) : (
          <p>로딩중.....</p>
        )}
      </TodoListWrapper>
    </TodoListContainer>
  );
}

export default TodoList;
