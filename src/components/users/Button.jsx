import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: #242424;
  color: #fff;
  padding: 10px 10px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  width: 130px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  &:focus {
    outline: none;
  }
`;

function ActionButton({ type, text, onClick }) {
  return (
    <StyledButton type={type} onClick={onClick}>
      {text}
    </StyledButton>
  );
}

export default ActionButton;
