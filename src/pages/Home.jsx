import React from "react";
import UserForm from "../components/UserForm";
import Auth from "../hoc/auth";

function Home() {
  return (
    <>
      <UserForm name="login" />
    </>
  );
}

export default Auth(Home, false);
