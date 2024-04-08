import React from "react";
import { Github, LinkedIn, Resume } from "../components/AllSvgs";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { DarkTheme } from "../components/theme";
import { motion } from "framer-motion";
const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: fixed;
  bottom: 0;
  left: 2rem;

  z-index: 3;

  & > *:not(:last-child) {
    margin: 0.5rem 0;
  }
`;
const Line = styled.span`
  width: 2px;
  height: 8rem;
  background-color: ${(props) =>
    props.color === "dark" ? DarkTheme.text : DarkTheme.body};
`;
const SocialIcons = (props) => {
  return (
    <Icons>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1 }}
      >
        <a
          target="_blank"
          style={{ color: "inherit" }}
          href="https://github.com/yoga2000"
        >
          <Github
            width={25}
            height={25}
            fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
          />
        </a>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1 }}
      >
        <a
          target="_blank"
          style={{ color: "inherit" }}
          href="https://www.linkedin.com/in/yogaraj0310/"
        >
          <LinkedIn
            width={25}
            height={25}
            x
            fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
          />
        </a>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1 }}
      >
        {/* <a
          target="_blank"
          href="file:///C:/Users/yogar/Desktop/yogarajResume.pdf"
          style={{ color: "inherit" }}
          to="/"
        >
          <Resume
            width={35}
            height={35}
            fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
          />
        </a> */}
      </motion.div>
      <Line
        color={props.theme}
        initial={{
          height: 0,
        }}
        animate={{
          height: "8rem",
        }}
        transition={{
          type: "spring",
          duration: 1,
          delay: 0.8,
        }}
      />
    </Icons>
  );
};

export default SocialIcons;
