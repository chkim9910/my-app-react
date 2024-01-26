import styled from "styled-components";
import Nav from "./Nav";

// 함수 선언식
function Header({ nav, logo }) {
  // nav는 지역변수
  // 배열은 부모요소에서 선언해주기
  // const nav = [{ title: "d-html" }, { title: "d-css" }, { title: "d-js" }];
  // const { nav } = props;
  return (
    <Hd>
      <h1>{logo}</h1>
      {/* <Nav nav={nav} /> */}
      {/* Nav와 Header는 서로 다른 컴포넌트이므로 같은 키값 사용해도 무방 */}
      <Nav nav={nav} />
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
