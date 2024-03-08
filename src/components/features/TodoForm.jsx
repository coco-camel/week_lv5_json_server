import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { insertTodo } from "../../redux/modules/todosSlice";
import styled from "styled-components";

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  border-radius: 4px;
  background-color: #ffffffe9;
`;
const InputBtn = styled.button`
  padding: 5px 10px;
  background-color: #1d1d1d;
  height: 40px;
  border-radius: 5px;
  color: #fff;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;
const InputWrapper = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin: 10px;
  display: flex;
  justify-content: center;
`;

const Input = styled.input`
  padding: 5px;
  width: 300px;
  max-height: 20px;
  border: 0;
  outline: none;
`;

function TodoForm() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const onClickTodoInputHandler = () => {
    dispatch(insertTodo({ title, contents }));
    setTitle("");
    setContents("");
  };

  const onChangeTitle = (title) => setTitle(title.target.value);
  const onChangeContents = (contents) => setContents(contents.target.value);

  return (
    <InputContainer>
      <InputWrapper>
        제목 : &nbsp;
        <Input
          type="text"
          value={title}
          onChange={onChangeTitle}
          placeholder="제목을 입력해 주세요"
        />
      </InputWrapper>
      <InputWrapper>
        내용 : &nbsp;
        <Input
          type="text"
          value={contents}
          onChange={onChangeContents}
          placeholder="내용을 입력해 주세요"
        />
      </InputWrapper>
      <InputBtn onClick={onClickTodoInputHandler}>추가하기</InputBtn>
    </InputContainer>
  );
}

export default TodoForm;
