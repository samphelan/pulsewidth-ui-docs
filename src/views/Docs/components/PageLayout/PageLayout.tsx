import { Flex } from "pulsewidth-ui";
import styles from "./pageLayout.module.css";
import NavFooter from "../NavFooter/NavFooter";
import { useParams } from "react-router-dom";
import { getSurroundingPages } from "../../navData";

type PageLayoutProps = {
  children?: React.ReactNode;
};

const PageLayout = ({ children }: PageLayoutProps) => {
  const { page } = useParams();
  const { prevPage, nextPage } = getSurroundingPages(page || "Overview");
  return (
    <Flex direction="column" className={styles.wrapper}>
      {children}

      <NavFooter
        className="mt7"
        previousPath={prevPage ? `/docs/${prevPage}` : undefined}
        previousTitle={prevPage || undefined}
        nextPath={nextPage ? `/docs/${nextPage}` : undefined}
        nextTitle={nextPage || undefined}
      />
    </Flex>
  );
};

export default PageLayout;
