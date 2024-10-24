import { Flex, List, ListItem } from "pulsewidth-ui";
import styles from "./componentHeader.module.css";
import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faCheckCircle,
  faXmarkCircle,
} from "@fortawesome/free-solid-svg-icons";

type GridRowTypes = {
  label: ReactNode;
  val: ReactNode;
};

const GridRow = ({ label, val }: GridRowTypes) => {
  return (
    <ListItem className="mb2">
      <div className={styles.gridLabel}>{label}</div>
      <div>{val}</div>
    </ListItem>
  );
};

type ComponentHeaderProps = {
  name: string;
  description?: string;
  github?: string;
  polymorphic?: boolean;
};

const ComponentHeader = ({
  name,
  description,
  github,
  polymorphic,
}: ComponentHeaderProps) => {
  return (
    <Flex direction="column" className={styles.wrapper}>
      <h1>{name}</h1>
      <p className={styles.description} style={{ marginBottom: "50px" }}>
        {description}
      </p>
      <List>
        <GridRow
          label="Import"
          val={<code>import {`{ ${name} }`} from 'pulsewidth-ui';</code>}
        ></GridRow>
        <GridRow
          label="Polymorphic"
          val={
            <>
              <FontAwesomeIcon
                icon={polymorphic ? faCheckCircle : faXmarkCircle}
                style={{
                  marginRight: "10px",
                  ...(polymorphic ? { color: "rgb(0, 205, 0)" } : {}),
                }}
              />{" "}
              {polymorphic ? "Polymorphic Component" : "Not Polymorphic"}
            </>
          }
        ></GridRow>
        {github && (
          <GridRow
            label="Source"
            val={
              <Link to={github}>
                <FontAwesomeIcon
                  icon={faGithub}
                  style={{ marginRight: "10px" }}
                />{" "}
                View Source Code
              </Link>
            }
          ></GridRow>
        )}
      </List>
    </Flex>
  );
};

export default ComponentHeader;
