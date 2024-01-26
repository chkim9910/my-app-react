import Article from "./Article";
import Footer from "./Footer";
import Header from "./Header";
import { NavMobile } from "./Nav";
// 중괄호 없는 경우는 default, 있는 경우는 default가 아님
// 이미지도 모듈화해서 사용
// import logo from "./logo.svg";
// import "./App.css";

// 함수 안에 html 코드를 넣으면 됨
// 컴포넌트는 무조건 대문자로 시작해야 함
// 소문자로 시작할 경우 컴포넌트를 DOM 태그로 인식하게 됨
// 일반적으로 함수 선언식 or 화살표 함수로 사용

function Layout() {
  // return 안에는 반드시 태그 하나만 들어가야 함
  // 따라서 여러 태그를 사용하고 싶은 경우, 빈 태그<></> 또는 <Fragment></Fragmet>를 사용함
  // 빈 태그는 렌더링되지 않음
  // 한 줄 이상일 경우 소괄호()로 감싸줌
  // class가 아닌 className으로 표기함
  // 컴포넌트를 통으로 가져올 때는 하나의 태그에서 닫아주면 됨
  // 컴포넌트에 다른 걸 넣고 싶을 경우 여는 태그, 닫는 태그 2개를 써주면 됨

  const navArr = [
    { title: "m-html" },
    { title: "m-css" },
    { title: "m-javascript" },
  ];
  const navD = [{ title: "d-html" }, { title: "d-css" }, { title: "d-js" }];
  return (
    <div className="wrap">
      <Header logo="가을회사" nav={navD} />
      <NavMobile nav={navArr} />
      <Article title="html" />
      <Article title="css" />
      <Article title="javascript" />
      <Footer />
    </div>
  );
}

export default Layout;
