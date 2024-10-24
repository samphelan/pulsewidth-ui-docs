import { Flex } from "pulsewidth-ui";
import styles from "./componentBody.module.css";
import { ReactNode } from "react";
import NavFooter from "../NavFooter/NavFooter";
import { useParams } from "react-router-dom";
import { getSurroundingPages } from "../../navData";

type ComponentBodyProps = {
  children?: ReactNode;
};

const ComponentBody = ({ children }: ComponentBodyProps) => {
  const { page } = useParams();
  const pageNav = getSurroundingPages(page || "Overview");
  return (
    <Flex direction="column" className={styles.wrapper}>
      {children}
      <NavFooter
        className="mt7"
        previousPath={`/docs/${pageNav.prevPage}`}
        previousTitle={pageNav.prevPage || undefined}
        nextPath={`/docs/${pageNav.nextPage}`}
        nextTitle={pageNav.nextPage || undefined}
      />
    </Flex>
  );
};

export default ComponentBody;
