import React from "react";
import Header from "../components/ui/Header";
import TodosForm from "../components/todos/TodoForm";
import TodoList from "../components/todos/TodoList";
import styled from "styled-components";
import Auth from "../hoc/auth";

const LayOut = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  min-width: 800px;
`;

function TodoMain() {
  return (
    <LayOut>
      <Header />
      <TodosForm />
      <TodoList />
    </LayOut>
  );
}

export default Auth(TodoMain, true);
