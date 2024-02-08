import { Box, Image } from "@chakra-ui/react";
import switchOn from "./assets/images/switch-on.svg";
import switchOff from "./assets/images/switch-off.svg";
import switchImg from "./assets/images/switch@2x.png";
import { useState } from "react";

export default function Switch() {
  const [isOn, setIsOn] = useState(false);
  const [isOn2, setIsOn2] = useState(false);
  return (
    <>
      <div>
        <h1>Switch</h1>
        <Image
          onClick={() => {
            setIsOn(!isOn);
            // console.log(isOn);
          }}
          src={isOn ? switchOn : switchOff}
          alt="switch off"
          w={"200px"}
        />
        <Box>{isOn ? "on" : "off"}</Box>
        <Box
          onClick={() => {
            setIsOn2(!isOn2);
          }}
          w={"400px"}
          h={"200px"}
          bg={`url(${switchImg}) no-repeat 0 ${isOn2 ? 0 : "90%"}`}
        />
        {/* <Box w={"400px"} h={"200px"} bg={`url(${switchImg}) no-repeat 0 90%`} /> */}
        {/* <Image src={switchImg} alt="switch img" /> */}
        {/* <Box bg></Box> */}
      </div>
    </>
  );
}
