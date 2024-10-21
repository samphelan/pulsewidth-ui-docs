import { Flex } from "pulsewidth-ui";
import styles from "./pageLayout.module.css";

type PageLayoutProps = {
  children?: React.ReactNode;
};

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <Flex direction="column" className={styles.wrapper}>
      {children}
    </Flex>
  );
};

export default PageLayout;
