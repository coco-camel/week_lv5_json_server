import React from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../apis/login";
import { useForm } from "../hooks/useForm";

function Home() {
  const navigate = useNavigate();
  const [user, onChange] = useForm();

  const onClickLoginHandler = async () => {
    await login(user);
    navigate("/mypage");
  };
  return (
    <>
      <div>로그인하기</div>
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
                onClickLoginHandler();
              }}
            >
              로그인
            </button>
            <button onClick={() => navigate("/signup")}>회원가입하기</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Home;
