import styled from "styled-components";
import LogOut from "../users/LogOut";

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  font-size: 20px;
  font-weight: bold;
  background-color: rgba(231, 231, 231, 0.953);
  border-radius: 10px;
`;

function Header() {
  return (
    <HeaderWrapper>
      <div>Todo List ✏️</div>
      <div>ϲ( ´•ϲ̲̃ ̲̃•` )ɔ</div>
      <LogOut />
    </HeaderWrapper>
  );
}

export default Header;
