import Auth from "../hoc/auth";
import TodoDetail from "../components/todos/todoDetail/TodoDetail";
import Header from "../components/ui/Header";
import styled from "styled-components";

const LayOut = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  min-width: 800px;
`;
function TodoDetailPage() {
  return (
    <LayOut>
      <Header />
      <TodoDetail />
    </LayOut>
  );
}

export default Auth(TodoDetailPage, true);
