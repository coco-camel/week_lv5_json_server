import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { __getTodos, __todoModify } from "../../../redux/modules/todosSlice";
import ActionButton from "../../users/Button";
import * as S from "./TodoDetailStyles";

function TodoEdit() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [contents, setContents] = useState("");
  const params = useParams();
  const todos = useSelector((state) => state.todosReducer.todos);

  const todo = todos.find((todo) => {
    return todo.id === params.id;
  });
  const onChangeContents = (e) => {
    setContents(e.target.value);
  };
  const NavigateDetailHandler = () => {
    navigate(-1);
  };
  const onClickTodoModify = (todo) => {
    if (contents.trim() === "") {
      return alert("내용을 입력해 주세요 .");
    } else {
      dispatch(__todoModify(todo));
      navigate(`/todo/${todo.id}`);
    }
  };

  useEffect(() => {
    dispatch(__getTodos());
  }, [dispatch]);

  useEffect(() => {
    if (todo) {
      setContents(todo.contents);
    }
  }, [todo]);

  return (
    <S.DetailWrapper>
      <S.DetailCard>
        {todo ? (
          <>
            <S.DetailCardIdBtn>
              <h3>id: {todo.id}</h3>
              <ActionButton
                type="button"
                text="이전으로"
                onClick={() => NavigateDetailHandler(todo.id)}
              />
            </S.DetailCardIdBtn>
            <h2>{todo.title}</h2>
            <S.StyledTextarea value={contents} onChange={onChangeContents} />
            <S.DetailCardIdBtn position="editBtn">
              <ActionButton
                type="button"
                text="완료"
                onClick={() => onClickTodoModify({ ...todo, contents })}
              />
            </S.DetailCardIdBtn>
          </>
        ) : (
          <p>로딩중.....</p>
        )}
      </S.DetailCard>
    </S.DetailWrapper>
  );
}

export default TodoEdit;
