import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { motion } from "framer-motion";
import { DarkTheme } from "./theme";
import Logo from "../subcomponents/Logo";
import PowerButton from "../subcomponents/PowerButton";
import { YinYang } from "./AllSvgs";
import Card from "../subcomponents/Card";
import { WorkData } from "../data/WorkData";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4rem;
`;

const Main = styled(motion.ul)`
  width: 100%;
  max-width: 800px;
  padding: 2rem;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  list-style: none;
`;

const Rotate = styled.span`
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  width: 80px;
  height: 80px;
  z-index: 1;
`;

const Work = () => {
  return (
    <ThemeProvider theme={DarkTheme}>
      <Box>
        <Logo theme="dark" />
        <PowerButton />
        <Main>
          {WorkData.map((d) => (
            <Card key={d.id} data={d} />
          ))}
        </Main>
        {/* <Rotate>
          <YinYang width={80} height={80} fill={DarkTheme.text} />
        </Rotate> */}
      </Box>
    </ThemeProvider>
  );
};

export default Work;
