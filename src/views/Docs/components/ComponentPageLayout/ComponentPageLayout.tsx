import { Flex } from "pulsewidth-ui";
import { ReactNode } from "react";
import styles from "./componentPageLayout.module.css";

type ComponentPageLayoutProps = {
  children?: ReactNode;
};

const ComponentPageLayout = ({ children }: ComponentPageLayoutProps) => {
  return <Flex className={styles.wrapper}>{children}</Flex>;
};

export default ComponentPageLayout;
