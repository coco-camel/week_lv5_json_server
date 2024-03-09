import Auth from "../hoc/auth";
import TodoDetali from "../components/todos/TodoDetali";
import Header from "../components/ui/Header";
import styled from "styled-components";

const LayOut = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  min-width: 800px;
`;
function TodoDetaliPage() {
  return (
    <LayOut>
      <Header />
      <TodoDetali />
    </LayOut>
  );
}

export default Auth(TodoDetaliPage, true);
