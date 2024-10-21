import { Flex } from "pulsewidth-ui";
import { ReactNode } from "react";
import styles from "./sandbox.module.css";
import { CodeBlock } from "../CodeBlock/CodeBlock";

type SandboxControlsProps = {
  children?: ReactNode;
};

export const SandboxControls = ({ children }: SandboxControlsProps) => {
  return (
    <Flex className={styles.controls} direction="column">
      {children}
    </Flex>
  );
};

type SandboxDisplayProps = {
  children?: ReactNode;
  code?: string;
};

export const SandboxDisplay = ({ children, code }: SandboxDisplayProps) => {
  return (
    <Flex direction="column" className={styles.display}>
      <Flex
        direction="column"
        align="center"
        justify="center"
        style={{ flex: 1, minHeight: "100px" }}
      >
        {children}
      </Flex>
      {code && <CodeBlock str={code}></CodeBlock>}
    </Flex>
  );
};

type SandboxProps = {
  children?: ReactNode;
  className?: string;
};

const Sandbox = ({ children, className }: SandboxProps) => {
  return (
    <Flex
      direction="responsive-row"
      className={[styles.wrapper, className].join(" ")}
    >
      {children}
    </Flex>
  );
};

export default Sandbox;
