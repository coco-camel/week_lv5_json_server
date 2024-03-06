import React from "react";
import UserForm from "../components/UserForm";
import Auth from "../hoc/auth";

function SignUp() {
  return (
    <>
      <UserForm />
    </>
  );
}

export default Auth(SignUp, false);
