import React from "react";
import { useNavigate } from "react-router-dom";
import { removeCookie } from "../cookies/cookies";
import styled from "styled-components";
import ActionButton from "../components/Button";
// import { getMyPage } from "../apis/myPage";

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
  //   getMyPage();
  // }, []);

  return (
    <CenteredDiv>
      <div>
        <ActionButton type="button" onClick={onClickLogoutHandler} text="로그아웃" />
      </div>
    </CenteredDiv>
  );
}

export default MyPage;
