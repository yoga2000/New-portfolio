import React from "react";
import styled, { keyframes, ThemeProvider } from "styled-components";
import Logo from "../subcomponents/Logo";
import PowerButton from "../subcomponents/PowerButton";
import astronaut from "../assets/images/spaceman.png";
import { DarkTheme } from "./theme";
import BigTitlte from "../subcomponents/BigTitle";
// import { Particle } from "../subcomponents/particle";
import { motion } from "framer-motion";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;
const float = keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(15px) translateX(15px) }
100% { transform: translateY(-10px) }

`;
const Spaceman = styled.div`
  position: absolute;
  top: 10%;
  right: 5%;
  width: 20vw;
  animation: ${float} 4s ease infinite;
  img {
    width: 100%;
    height: auto;
  }
`;
const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: 70vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
  backdrop-filter: blur(4px);

  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;
  font-family: "Ubuntu Mono", monospace;
  font-style: italic;
`;

const AboutPage = () => {
  return (
    <ThemeProvider theme={DarkTheme}>
      <Box>
        <Logo theme="dark" />
        <PowerButton />

        <Spaceman>
          <motion.img
            src={astronaut}
            alt="spaceman"
            initial={{ scale: 0, y: 400, x: -500 }}
            animate={{ x: 0, y: 0, scale: [0.5, 1] }}
            transition={{ type: "spring", duration: 5 }}
          />
        </Spaceman>
        <Main>
          "I am a dedicated frontend developer with a passion for crafting web
          applications that are pivotal to the overall success of the product. I
          thoroughly enjoy the process of building web applications that
          seamlessly blend functionality and aesthetics, empowering users with
          intuitive and efficient digital experiences. Additionally, I would
          like to play games like Chess and Cricket."
        </Main>

        <BigTitlte text="ABOUT" top="10%" left="5%" />
        {/* <Particle id="tsparticles" particlesLoaded={() => {}} options={{}} /> */}
      </Box>
    </ThemeProvider>
  );
};

export default AboutPage;
