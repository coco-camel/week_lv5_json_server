import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { useForm } from "../../hooks/useForm";
import { __todoRegister } from "../../redux/modules/todosSlice";

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
  const [title, onChangeTitle, onChangeTitleReset] = useForm();
  const [contents, onChangeContents, onChangeContentsReset] = useForm();

  const onClickTodoInputHandler = async () => {
    if (title.trim() === "" || contents.trim() === "") {
      return alert("제목과 내용을 모두 입력해 주세요 .");
    } else {
      dispatch(__todoRegister({ title, contents }));
      onChangeTitleReset();
      onChangeContentsReset();
    }
  };
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
