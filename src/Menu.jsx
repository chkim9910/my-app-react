import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBurger,
  faCamera,
  faFaceSmile,
  faHeadphones,
  faHeart,
  faHippo,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { Box, Button } from "@chakra-ui/react";

export default function Menu() {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <Box id="gnb" isToggled={isToggled}>
      <h1>모바일 메뉴</h1>
      <Button
        colorScheme="yellow"
        backdropBlur={"5px"}
        background={"yellow"}
        border={"none"}
        // variant="ghost"
        onClick={() => {
          setIsToggled(!isToggled);
        }}
      >
        <FontAwesomeIcon
          icon={isToggled ? faXmark : faBurger}
          //   icon={faBurger}
          size="2x"
          style={{ color: "rgb(0,0,0)" }}
        />
        <span className="blind">전체메뉴보기</span>
      </Button>
      <Box
        as="ul"
        className="header__menulist"
        display={isToggled ? "block" : "none"}
      >
        <li>
          <FontAwesomeIcon icon={faCamera} size="1x" />
          &nbsp; Mac
        </li>
        <li>
          <FontAwesomeIcon
            icon={faHeart}
            size="1x"
            style={{ color: "rgb(255, 0, 0)" }}
          />
          &nbsp; iPad
        </li>
        <li>
          <FontAwesomeIcon icon={faHippo} size="1x" />
          &nbsp; iPhone
        </li>
        <li>
          <FontAwesomeIcon icon={faFaceSmile} size="1x" />
          &nbsp; Watch
        </li>
        <li>
          <FontAwesomeIcon icon={faHeadphones} size="1x" />
          &nbsp; Music
        </li>
        <li>고객지원</li>
      </Box>
    </Box>
  );
}

// const MenuStyle = styled.div`
//   .header__menulist {
//     display: ${({ isToggled }) => (isToggled ? "block" : "none")};
//     /* display: ${(props) => (props.isToggled ? "block" : "none")}; */
//     /* left: ${(props) => (props.isToggled ? 0 : "100%")}; */
//     max-width: 100px;
//     height: 200px;
//     background: palegoldenrod;
//     border-radius: 10px;
//     padding: 20px;
//     list-style: none;
//   }
//   .blind {
//     opacity: 0;
//     visibility: hidden;
//     font-size: 0;
//   }
//   button {
//     border: none;
//     border-radius: 20px;
//     width: 50px;
//     height: 50px;
//     padding: 0;
//     text-align: center;
//     background: #c00a65;
//     cursor: pointer;
//   }
// `;
