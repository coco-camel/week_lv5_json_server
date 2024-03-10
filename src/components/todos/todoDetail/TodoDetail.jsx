import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { __getTodos } from "../../../redux/modules/todosSlice";
import ActionButton from "../../users/Button";
import * as S from "./TodoDetailStyles";

function TodoDetail() {
  const navigate = useNavigate();
  const params = useParams();
  const { todos } = useSelector((state) => state.todosReducer);

  const todo = todos.find((todo) => {
    return todo.id === params.id;
  });

  const NavigateMainHandler = () => {
    navigate("/todomain");
  };
  const NavigateEditHandler = (id) => {
    navigate(`/todo/${id}/edit`);
  };

  return (
    <S.DetailWrapper>
      <S.DetailCard>
        <>
          <S.DetailCardIdBtn>
            <h3>id: {todo.id}</h3>
            <ActionButton type="button" text="이전으로" onClick={NavigateMainHandler} />
          </S.DetailCardIdBtn>
          <h2>{todo.title}</h2>
          <div>{todo.contents}</div>
          <S.DetailCardIdBtn $position="editBtn">
            <ActionButton
              type="button"
              text="수정하기"
              onClick={() => NavigateEditHandler(todo.id)}
            />
          </S.DetailCardIdBtn>
        </>
      </S.DetailCard>
    </S.DetailWrapper>
  );
}

export default TodoDetail;
