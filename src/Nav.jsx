import styled from "styled-components";

// a태그에는 href=""에 #대신 /를 넣음
const Nav = () => {
  return (
    <Nv>
      <Ul>
        <li>
          <A href="/">html</A>
        </li>
        <li>
          <A href="/">css</A>
        </li>
        <li>
          <A href="/">javascript</A>
        </li>
      </Ul>
    </Nv>
  );
};

const NavMobile = (props) => {
  // console.log(props); /* Array(3) */
  // console.log(props.nav); /* Array(3) */
  console.log(props.nav[0].title);
  const list = [];
  for (let i = 0; i < props.nav.length; i++) {
    list.push(
      <li key={props.nav[i]}>
        <a href={"/sub/" + props.nav[i].title + "." + props.nav[i].title}>
          {props.nav[i].title}
        </a>
      </li>
    );
  }
  return (
    <Nv>
      {/* 문자가 아닌 데이터를 받을 땐 중괄호로 감싸주어야 함 */}
      <Ul>{list}</Ul>
    </Nv>
  );
};

const Nv = styled.nav`
  height: auto;
`;

const Ul = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
`;

const A = styled.a`
  text-decoration: none;
  color: white;
`;

export default Nav;
// default 값이 아닌 것은 중괄호 넣고, 추가로 넣어야 할 컨포넌트는 쉼표로 넣기
export { NavMobile };
