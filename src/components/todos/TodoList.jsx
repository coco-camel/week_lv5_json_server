import React, { useEffect } from "react";
import Todos from "./Todos";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { __getTodos } from "../../redux/modules/todosSlice";

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
  const { loading, todos } = useSelector((state) => state.todosReducer);

  useEffect(() => {
    dispatch(__getTodos());
    console.log("gg");
  }, [dispatch]);

  return (
    <TodoListContainer>
      <TodoListWrapper>
        <InputTitle>Working.. 🔥</InputTitle>
        {loading ? (
          <h3>로딩중.... </h3>
        ) : (
          <>
            {todos.filter((todo) => {
              return !todo.done;
            }).length ? (
              <Todos
                todos={todos.filter((todo) => {
                  return !todo.done;
                })}
              />
            ) : (
              <h3>할 일이 없어요!</h3>
            )}
          </>
        )}
      </TodoListWrapper>
      <TodoListWrapper>
        <InputTitle>Done..! 🎉</InputTitle>
        {loading ? (
          <h3>로딩중.... </h3>
        ) : (
          <>
            {todos.filter((todo) => {
              return todo.done;
            }).length ? (
              <Todos
                todos={todos.filter((todo) => {
                  return todo.done;
                })}
              />
            ) : (
              <h3>할 일이 많을 텐데?</h3>
            )}
          </>
        )}
      </TodoListWrapper>
    </TodoListContainer>
  );
}

export default TodoList;
