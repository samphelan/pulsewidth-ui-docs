import {
  Accordion,
  AccordionContent,
  AccordionHeader,
  Button,
  Drawer,
  Flex,
  List,
  ListItem,
  ListItemButton,
} from "pulsewidth-ui";
import { Fragment } from "react/jsx-runtime";
import NavBar from "../../components/NavBar/NavBar";
import styles from "./docs.module.css";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { findComponentByPath, navData, NavData } from "./navData";

type SideNavProps = {
  navData: NavData[];
  page: string;
  onClickLink?: () => void;
  noBorder?: boolean;
  className?: string;
};

const SideNav = ({
  navData,
  page,
  onClickLink,
  noBorder = false,
  className,
}: SideNavProps) => {
  return (
    <Flex
      direction="column"
      className={[
        styles.navWrap,
        ...(noBorder ? [] : [styles.navWrapBorder]),
        className,
      ].join(" ")}
    >
      {navData.map((section) => (
        <Accordion key={section.title} defaultExpanded={true}>
          <AccordionHeader className={styles.accordionHeader}>
            {section.title.toUpperCase()}
          </AccordionHeader>
          <AccordionContent className={styles.content}>
            <div className={styles.line} />
            <List className={styles.list}>
              {section.sections.map((subSection) => (
                <Fragment key={subSection.title || subSection.pages[0].path}>
                  {subSection.title && (
                    <ListItem className={styles.subSection}>
                      {subSection.title.toUpperCase()}
                    </ListItem>
                  )}
                  {subSection.pages.map((p) => (
                    <ListItem key={p.path} className={styles.pageLink}>
                      <ListItemButton
                        as={Link}
                        to={`/docs/${p.path}`}
                        className={styles.pageLinkButton}
                        variant={
                          page.toLowerCase() === p.path.toLowerCase() ||
                          (page === "" && p.path.toUpperCase() === "OVERVIEW")
                            ? "soft"
                            : "plain"
                        }
                        onClick={() => {
                          if (onClickLink) onClickLink();
                        }}
                      >
                        {p.title || p.path}
                      </ListItemButton>
                    </ListItem>
                  ))}
                </Fragment>
              ))}
            </List>
          </AccordionContent>
        </Accordion>
      ))}
      <div style={{ minHeight: "200px" }}></div>
    </Flex>
  );
};

const Docs = () => {
  const { page = "" } = useParams();
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <Fragment>
      <NavBar
        startDecorator={
          <Button
            style={{ margin: "0 5px", padding: "10px 12px" }}
            variant="outline"
            onClick={() => {
              setDrawerOpen((prev) => !prev);
            }}
            className="showOnTablet"
          >
            <FontAwesomeIcon icon={faBars} />
          </Button>
        }
      ></NavBar>
      <Flex className={styles.wrapper} style={{ paddingTop: "51px" }}>
        <Drawer
          open={drawerOpen}
          onExit={() => {
            setDrawerOpen(false);
          }}
          variant="outline"
        >
          <SideNav
            noBorder
            page={page}
            navData={navData}
            onClickLink={() => {
              setDrawerOpen(false);
            }}
          />
        </Drawer>
        <SideNav page={page} navData={navData} className={"hideOnTablet"} />
        <Flex className={styles.pageWrap}>
          {findComponentByPath(page || "Overview")}
        </Flex>
      </Flex>
    </Fragment>
  );
};

export default Docs;
