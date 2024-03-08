import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Auth from "../hoc/auth";

const DetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const DetailCard = styled.div`
  padding: 20px;
  border: 5px solid black;
  border-radius: 10px;
  max-width: 700px;
  min-width: 200px;
  word-wrap: break-word;
  p {
    font-size: 20px;
  }
`;

const DetailCardIdBtn = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  button {
    background-color: #474747;
    color: white;
    padding: 8px 10px;
    text-align: center;
    margin: 4px 2px;
    opacity: 0.6;
    border-radius: 8px;
    cursor: pointer;
    &:hover {
      opacity: 1;
    }
  }
`;

function TodoDetali() {
  const params = useParams();
  const todos = useSelector((state) => state.todosReducer.todos);
  const todo = todos.find((todo) => {
    return todo.id === params.id;
  });
  const navigate = useNavigate();
  const handleNavigateHome = () => {
    navigate("/");
  };
  return (
    <>
      <DetailWrapper>
        <DetailCard>
          <DetailCardIdBtn>
            <h3>id: {todo.id}</h3>
            <button onClick={handleNavigateHome}>이전으로</button>
          </DetailCardIdBtn>
          <h2>{todo.title}</h2>
          <p>{todo.contents}</p>
        </DetailCard>
      </DetailWrapper>
    </>
  );
}

export default Auth(TodoDetali, true);
