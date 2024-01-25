import styled from "styled-components";
import Nav from "./Nav";

// 함수 선언식
function Header() {
  return (
    <Hd>
      header
      <Nav />
    </Hd>
  );
}

// 스타일도 컴포넌트로 만듦
// backtick 기호로 표현
const Hd = styled.header`
  height: 100px;
  background-color: #8a2be2;
  color: white;
`;

export default Header;
