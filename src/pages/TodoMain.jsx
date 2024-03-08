import React from "react";
import Header from "../components/ui/Header";
import TodosForm from "../components/features/TodoForm";
import TodoList from "../components/features/TodoList";
import styled from "styled-components";
import Auth from "../hoc/auth";
import MyPage from "./MyPage";

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
      <MyPage />
    </LayOut>
  );
}

export default Auth(TodoMain, true);
