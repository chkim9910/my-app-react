import styled from "styled-components";

// 함수 표현식
// const Footer = function () {
//   return <Ft>footer</Ft>;
// };

// 화살표 함수
const Footer = () => {
  return <Ft>footer</Ft>;
};

const Ft = styled.footer`
  height: 100px;
  background-color: black;
  color: white;
`;

export default Footer;
