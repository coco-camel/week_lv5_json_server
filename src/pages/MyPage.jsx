import React, { useEffect } from "react";
import { getMyPage } from "../apis/myPage";
import { useNavigate } from "react-router-dom";
import { removeCookie } from "../cookies/cookies";

function MyPage() {
  useEffect(() => {
    getMyPage();
  }, []);
  const navigate = useNavigate();
  const onClickLogoutHandler = () => {
    removeCookie("accessToken");
    navigate("/");
  };
  return (
    <>
      <button onClick={onClickLogoutHandler}> 로그아웃 </button>
    </>
  );
}

export default MyPage;
