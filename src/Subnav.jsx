import React, { useState } from "react";
import { TbUfo } from "react-icons/tb";
import { HiHomeModern } from "react-icons/hi2";
import { PiHouseLineLight } from "react-icons/pi";
import styled, { css } from "styled-components";

export default function Subnav() {
  const subnav = [
    { icon: <TbUfo />, name: "기상천외한 숙소" },
    { icon: <HiHomeModern />, name: "초소형 주택" },
    { icon: <PiHouseLineLight />, name: "유서 깊은 주택" },
  ];
  // 초기 상태를 0으로 설정하여 첫 번째 항목이 선택된 상태로 시작
  const [selected, setSelected] = useState(0);

  return (
    <SortStyled>
      <div>
        <Ul>
          {subnav.map((item, index) => (
            <Li
              key={index}
              onMouseEnter={() => setSelected(index)}
              onMouseLeave={() => setSelected(null)}
              className={selected === index ? "active" : ""}
            >
              {/*클릭 시, selected의 상태를 변경 
                selected의 상태가 변경되면, 화면이 다시 렌더링되어 selected === index가 true가 되어 active 클래스가 추가된다. */}
              <A href="/">
                <Icon className="item.icon">{item.icon}</Icon>
                <P className="item.name">{item.name}</P>
              </A>
            </Li>
          ))}
        </Ul>
      </div>
    </SortStyled>
  );
}

const SortStyled = styled.div`
  .active {
    border-bottom: 1px solid #8a2be2;
  }
`;
const Icon = styled.span`
  font-size: 30px;
  display: flex;
  justify-content: center;
`;
const Ul = styled.ul`
  display: flex;
  list-style: none;
`;
const Li = styled.li`
  margin-right: 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0);
  transition: border-bottom 0.3s;
`;
const A = styled.a`
  text-decoration: none;
  color: #999; /* 기본 색상 */
  transition: color 0.3s;
  &:hover {
    color: #8a2be2; /* hover 시 변경할 색상 */
  }
`;

const P = styled.p`
  margin-top: 0;
  font-size: 12px;
  font-weight: 700;
`;

// 스타일컴포넌트는 각각 만들지 않아도 하나만 만들어서 태그로 잡아도 됨!
// const SortStyled = styled.div`
//     margin-bottom: 100px;
//     ul {
//         list-style: none;
//         display: flex;
//     }
//     li {
//         display: flex;
//         flex-direction: column;
//         align-items: center;
//         justify-content: center;
//         gap: 10px;
//         width: 100px;
//         height: 75px;
//         color: #777;
//         text-decoration: none;
//         cursor: pointer;
//         &:hover {
//             color: #000;
//         }
//     }
//     svg {
//         font-size: 30px;
//     }

//     .active {
//         border-bottom: 2px solid #000;
//     }
// `

// import React, { useState } from "react";:

// React 모듈과 그 안에 포함된 useState 훅을 불러옵니다.
// useState는 함수 컴포넌트에서 상태를 관리할 수 있게 해주는 React 훅 중 하나입니다.
// const [selected, setSelected] = useState(0);:

// useState(0)는 selected라는 상태 변수와 이 상태를 업데이트할 수 있는 setSelected라는 함수를 생성합니다.
// selected 변수는 현재의 상태 값을 나타내며, setSelected 함수를 통해 이 값을 업데이트할 수 있습니다.
// useState 함수의 인자로 전달된 값인 0은 selected의 초기값입니다. 즉, 컴포넌트가 처음 렌더링될 때 selected의 초기값으로 0을 갖습니다.
// 이 코드는 컴포넌트 내에서 selected라는 상태를 생성하고, 이를 초기값 0으로 설정한 후에 setSelected 함수를 통해 이 상태를 업데이트할 수 있도록 합니다. 상태를 사용하는 이유는 컴포넌트의 상태를 변경할 때마다 React가 해당 컴포넌트를 다시 렌더링하도록 하여 UI를 업데이트하기 위함입니다.
