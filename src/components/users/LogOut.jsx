import React from "react";
import { useNavigate } from "react-router-dom";
import { removeCookie } from "../../cookies/cookies";
import ActionButton from "./Button";

function LogOut() {
  const navigate = useNavigate();
  const onClickLogOutHandler = () => {
    removeCookie("accessToken");
    navigate("/");
  };

  return <ActionButton type="button" onClick={onClickLogOutHandler} text="로그아웃" />;
}

export default LogOut;
