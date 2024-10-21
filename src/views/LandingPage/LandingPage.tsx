import { Button, Flex } from "pulsewidth-ui";
import styles from "./landingPage.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fragment } from "react/jsx-runtime";
import NavBar from "../../components/NavBar/NavBar";
import { Link } from "react-router-dom";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const LandingPage = () => {
  return (
    <Fragment>
      <NavBar></NavBar>
      <Flex direction="row" className={styles.wrapper}>
        <h1 className={[styles.h1, styles.mb20].join(" ")}>
          A{" "}
          <span className={`${styles.gradient} ${styles.color1}`}>
            lightweight
          </span>
          ,{" "}
          <span className={`${styles.gradient} ${styles.color2}`}>
            flexible
          </span>
          , and{" "}
          <span className={`${styles.gradient} ${styles.color3}`}>elegant</span>{" "}
          React UI library
        </h1>
        <h3 className={styles.mb20}>
          Pulsewidth UI gives you all the tools you need to create scalable
          applications quickly.
        </h3>
        <Flex>
          <Button
            as={Link}
            to="/docs"
            variant="outline"
            style={{ marginRight: "10px" }}
          >
            Get Started
          </Button>
          <Button
            as={Link}
            to="https://www.github.com/samphelan/pulsewidth-ui"
            variant="soft"
          >
            <FontAwesomeIcon icon={faGithub} style={{ marginRight: "10px" }} />
            Github
          </Button>
        </Flex>
      </Flex>
    </Fragment>
  );
};

export default LandingPage;
