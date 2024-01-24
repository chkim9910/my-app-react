// 이미지도 모듈화해서 사용
// import logo from "./logo.svg";
// import "./App.css";
import styled from "styled-components";

// 함수 안에 html 코드를 넣으면 됨
// 컴포넌트는 무조건 대문자로 시작해야 함
function Header() {
  return <Hd>header</Hd>;
}

const Hd = styled.header`
  height: 100px;
  background-color: yellowgreen;
`;

function App() {
  return <Header />;
}

export default App;
