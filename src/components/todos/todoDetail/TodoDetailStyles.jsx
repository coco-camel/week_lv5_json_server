import styled, { css } from "styled-components";

export const DetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
`;
export const DetailCard = styled.div`
  padding: 20px;
  border: 5px solid black;
  border-radius: 10px;
  max-width: 600px;
  width: 100vh;
  word-wrap: break-word;
  p {
    font-size: 20px;
  }
`;
export const DetailCardIdBtn = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${({ position }) => {
    switch (position) {
      case "editBtn":
        return css`
          justify-content: center;
          margin-top: 20px;
        `;
      default:
    }
  }}
`;

export const StyledTextarea = styled.textarea`
  width: 100%;
  height: 200px;
  padding: 10px;
  margin-top: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
  box-sizing: border-box;
  resize: none;
`;
