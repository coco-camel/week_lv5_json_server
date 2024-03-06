import React from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../apis/login";
import { useForm } from "../hooks/useForm";
import { signUp } from "../apis/signUp";
import ActionButton from "./Button";
import styled from "styled-components";

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh; /* 화면 전체 높이를 차지하도록 설정합니다. */
`;

const Form = styled.form`
  width: 300px;
`;

const InputWrapper = styled.div`
  margin-bottom: 10px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

function UserForm(props) {
  const navigate = useNavigate();
  const [user, onChange] = useForm();

  const onClickLoginHandler = async () => {
    await login(user, navigate);
  };

  const onClickSignUpHandler = async () => {
    await signUp(user, navigate);
  };

  return (
    <FormContainer>
      <h2>{props.name ? "로그인" : "회원가입"}</h2>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          props.name ? onClickLoginHandler() : onClickSignUpHandler();
        }}
      >
        <InputWrapper>
          <Input type="text" name="id" placeholder="아이디" value={user.id} onChange={onChange} />
        </InputWrapper>
        <InputWrapper>
          <Input
            type="password"
            name="password"
            autoComplete="on"
            placeholder="비밀번호"
            value={user.password}
            onChange={onChange}
          />
        </InputWrapper>
        <ButtonWrapper>
          <ActionButton className="btn" type="submit" text={props.name ? "로그인" : "회원가입"} />
          <ActionButton
            className="btn"
            type="button"
            onClick={() => {
              props.name ? navigate("/signup") : navigate("/");
            }}
            text={props.name ? "회원가입하기" : "로그인하기"}
          />
        </ButtonWrapper>
      </Form>
    </FormContainer>
  );
}

export default UserForm;
