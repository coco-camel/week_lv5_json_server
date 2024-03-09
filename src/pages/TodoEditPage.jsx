import Auth from "../hoc/auth";
import Header from "../components/ui/Header";
import styled from "styled-components";
import TodoEdit from "../components/todos/todoDetail/TodoEdit";

const LayOut = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  min-width: 800px;
`;
function TodoEditPage() {
  return (
    <LayOut>
      <Header />
      <TodoEdit />
    </LayOut>
  );
}

export default Auth(TodoEditPage, true);
