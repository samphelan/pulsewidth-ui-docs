import { Button, Flex } from "pulsewidth-ui";
import styles from "./navBar.module.css";
import logo from "../../assets/logo_transparent.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const NavBar = () => {
  return (
    <Flex as="nav" className={styles.wrapper}>
      <Flex as={Link} to="/" className={styles.logoWrapper}>
        <img
          src={logo}
          style={{ height: "50px", width: "50px", margin: 0, padding: 0 }}
        />
        <h3>PulsewidthUI</h3>
      </Flex>

      <Flex style={{ alignItems: "center" }}>
        <Button
          as={Link}
          to="https://github.com/samphelan/pulsewidth-ui"
          style={{ padding: "5px 5px" }}
        >
          <FontAwesomeIcon icon={faGithub} style={{ fontSize: "25px" }} />
        </Button>
      </Flex>
    </Flex>
  );
};

export default NavBar;
