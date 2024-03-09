import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { useEffect } from "react";
import { getTodos } from "../../redux/modules/todosSlice";
import ActionButton from "../users/Button";

const DetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
`;
const DetailCard = styled.div`
  padding: 20px;
  border: 5px solid black;
  border-radius: 10px;
  max-width: 600px;
  width: 100vh;
  word-wrap: break-word;
  p {
    font-size: 20px;
  }
`;
const DetailCardIdBtn = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

function TodoDetali() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const todos = useSelector((state) => state.todosReducer.todos);

  const todo = todos.find((todo) => {
    return todo.id === params.id;
  });

  const handleNavigateHome = () => {
    navigate("/todomain");
  };

  useEffect(() => {
    dispatch(getTodos());
  }, []);

  return (
    <>
      <DetailWrapper>
        <DetailCard>
          {todo ? (
            <>
              <DetailCardIdBtn>
                <h3>id: {todo.id}</h3>
                <ActionButton type="button" text="이전으로" onClick={handleNavigateHome} />
              </DetailCardIdBtn>
              <h2>{todo.title}</h2>
              <p>{todo.contents}</p>
            </>
          ) : (
            <p>...로딩중</p>
          )}
        </DetailCard>
      </DetailWrapper>
    </>
  );
}

export default TodoDetali;
