import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "../hooks/useForm";
import { signUp } from "../apis/signUp";

function SignUp() {
  const navigate = useNavigate();
  const [user, onChange] = useForm();
  const onClickSignUpHandler = async () => {
    await signUp(user);
    navigate("/");
  };
  return (
    <>
      <div>회원가입</div>
      <div>
        <form>
          <div>
            <input type="text" name="id" placeholder="아이디" value={user.id} onChange={onChange} />
            <input
              type="password"
              name="password"
              autoComplete="on"
              placeholder="비밀번호"
              value={user.password}
              onChange={onChange}
            />
          </div>
          <div>
            <button
              onClick={(e) => {
                e.preventDefault();
                onClickSignUpHandler();
              }}
            >
              회원가입
            </button>
            <button onClick={() => navigate("/")}>로그인하기</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default SignUp;
