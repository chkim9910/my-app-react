import Layout from "./Layout";
import Subnav from "./Subnav";
import Sort from "./Sort";
import Comments from "./Comments";
import Product from "./Product";
import Event from "./Event";
import State from "./State";
import SetNumber from "./SetNumber";
import Menu from "./Menu";
import Switch from "./Switch";
import UsersList from "./api/UsersList";
import Arrangement from "./Arrangement";
import CounterApp from "./counter/CounterApp";
import TodoApp from "./TodoApp";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCamera } from "@fortawesome/free-solid-svg-icons";

export default function App() {
  return (
    <>
      <TodoApp />
      <CounterApp />
      <Arrangement />
      <UsersList />
      <hr />
      <State />
      <hr />
      <Switch />
      <hr />
      <SetNumber />
      <hr />
      <Event />
      <hr />
      <Menu />
      <hr />
      <Subnav />
      <hr />
      <Sort />
      <Product />
      <Comments />
      <hr />
      <Layout />
    </>
  );
}

// export default function App() {
//   return (
//     <>
//       {/* 부모 컴포넌트 */}
//       <Cat name="가을" age="2" />
//       {/* 컴포넌트의 속성은 부모 컴포넌트에서 설정할 수 있음 */}
//       {/* {name: '가을', age: 2} 객체가 Cat 컴포넌트로 전달*/}
//       <Cat name="겨울" age="3" />
//       <Cat name="봄" age="4" />
//       <Layout />
//     </>
//   );
// }

// 자식 컴포넌트
// const Cat = ({ name, age }) => {
//   // const props = {name: '가을', age: '2'}
//   // props.name = 가을
//   // props.age = 2
//   // 구조분해할당 해주기
//   // const { name, age } = props;
//   // 매개변수에서 바로 구조분해 해줘도 됨
//   return (
//     <>
//       {/* Props.children (props.속성이름) */}
//       <div>
//         {name}이는 {age}살입니다.
//       </div>
//     </>
//   );
// };

// export default App;
