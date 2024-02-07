import { useState } from "react";

export default function State() {
  // vanilla js
  //   let name = "winter";
  //   const changeName = () => {
  //     // 삼항연산자
  //     // 조건 ? 참일 때 : 거짓일 때
  //     // name 변수 재할당
  //     name = name === "winter" ? "fall" : "winter";
  //     // console.log(name);
  //     document.querySelector("h1").innerText = name;
  //     // h1태그에 .innerText 이용해서 name 출력
  //     // element.innerText = text
  //   };

  // react
  // useState: 상태값을 저장할 수 있는 변수를 생성하는 함수
  // const[상태이름, 상태변경함수] = useState(상태의 초기값)
  // 상태변경함수의 첫자는 set으로 시작하는 것이 일반적임
  const [name, setName] = useState("winter");
  const changeName = () => {
    // setName: 상태변경함수
    // 상태변경함수(상태값)
    // 상태값을 변경하면 컴포넌트가 다시 렌더링됨
    setName(name === "winter" ? "spring" : "winter");
  };
  return (
    <div>
      {/* jsx는 js + xml >> jsx에서는 변수를 중괄호를 넣어 데이터 값으로 씀  */}
      <h1>{name}</h1>
      <button onClick={changeName}>이름바꾸기</button>
    </div>
  );
}
