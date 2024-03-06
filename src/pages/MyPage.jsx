import React from "react";
import { useNavigate } from "react-router-dom";
import { removeCookie } from "../cookies/cookies";
import styled from "styled-components";
import ActionButton from "../components/Button";
import Auth from "../hoc/auth";

const CenteredDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

function MyPage() {
  const navigate = useNavigate();
  const onClickLogoutHandler = () => {
    removeCookie("accessToken");
    navigate("/");
  };
  // useEffect(() => {
  //   getMyPage(navigate);
  // }, [navigate]);
  return (
    <CenteredDiv>
      <div>
        <ActionButton type="button" onClick={onClickLogoutHandler} text="로그아웃" />
      </div>
    </CenteredDiv>
  );
}

export default Auth(MyPage, true);
