import { Button, Flex } from "pulsewidth-ui";
import { Link } from "react-router-dom";
import styles from "./navFooter.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

type NavFooterProps = {
  nextTitle?: string;
  nextPath?: string;
  previousTitle?: string;
  previousPath?: string;
  className?: string;
};

const NavFooter = ({
  nextTitle,
  nextPath,
  previousTitle,
  previousPath,
  className,
}: NavFooterProps) => {
  return (
    <Flex
      justify="space-between"
      className={[styles.wrapper, className].join(" ")}
    >
      {previousPath ? (
        <Button as={Link} to={previousPath} variant="outline">
          <FontAwesomeIcon icon={faChevronLeft} /> {previousTitle}
        </Button>
      ) : (
        <div />
      )}
      {nextPath && (
        <Button as={Link} to={nextPath} variant="outline">
          {nextTitle} <FontAwesomeIcon icon={faChevronRight} />
        </Button>
      )}
    </Flex>
  );
};

export default NavFooter;
