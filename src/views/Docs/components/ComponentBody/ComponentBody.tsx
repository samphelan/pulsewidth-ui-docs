import { Flex } from "pulsewidth-ui";
import styles from "./componentBody.module.css";
import { ReactNode } from "react";

type ComponentBodyProps = {
  children?: ReactNode;
};

const ComponentBody = ({ children }: ComponentBodyProps) => {
  return (
    <Flex direction="column" className={styles.wrapper}>
      {children}
    </Flex>
  );
};

export default ComponentBody;
