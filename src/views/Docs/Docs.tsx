import {
  Accordion,
  AccordionContent,
  AccordionHeader,
  Flex,
  List,
  ListItem,
  ListItemButton,
} from "pulsewidth-ui";
import { Fragment } from "react/jsx-runtime";
import NavBar from "../../components/NavBar/NavBar";
import styles from "./docs.module.css";
import { Link, useParams } from "react-router-dom";
import AutocompleteDoc from "./views/AutocompleteDoc/AutocompleteDoc";
import TextInputDoc from "./views/TextInputDoc/TextInputDoc";
import Overview from "./views/Overview/Overview";
import Installation from "./views/Installation/Installation";
import CheckboxDoc from "./views/CheckboxDoc/CheckboxDoc";
import RadioDoc from "./views/RadioDoc/RadioDoc";
import SelectDoc from "./views/SelectDoc/SelectDoc";
import FlexDoc from "./views/FlexDoc/FlexDoc";
import TooltipDoc from "./views/TooltipDoc/TooltipDoc";
import ListDoc from "./views/ListDoc/ListDoc";
import Usage from "./views/Usage/Usage";
import SliderDoc from "./views/SliderDoc/SliderDoc";
import PasswordDoc from "./views/PasswordDoc/PasswordDoc";
import PhoneDoc from "./views/PhoneDoc/PhoneDoc";
import AccordionDoc from "./views/AccordionDoc/AccordionDoc";

const renderPage = (p: string) => {
  switch (p.toLowerCase()) {
    case "overview":
      return <Overview></Overview>;
    case "installation":
      return <Installation></Installation>;
    case "usage":
      return <Usage></Usage>;
    case "accordion":
      return <AccordionDoc></AccordionDoc>;
    case "autocomplete":
      return <AutocompleteDoc></AutocompleteDoc>;
    case "textinput":
      return <TextInputDoc></TextInputDoc>;
    case "checkbox":
      return <CheckboxDoc></CheckboxDoc>;
    case "password":
      return <PasswordDoc></PasswordDoc>;
    case "phone":
      return <PhoneDoc></PhoneDoc>;
    case "radio":
      return <RadioDoc></RadioDoc>;
    case "select":
      return <SelectDoc></SelectDoc>;
    case "slider":
      return <SliderDoc></SliderDoc>;
    case "flex":
      return <FlexDoc></FlexDoc>;
    case "list":
      return <ListDoc></ListDoc>;
    case "tooltip":
      return <TooltipDoc></TooltipDoc>;
    default:
      return <Overview></Overview>;
  }
};

const Docs = () => {
  const { page = "" } = useParams();

  const navData = [
    {
      title: "Getting Started",
      sections: [{ title: null, pages: ["Overview", "Installation", "Usage"] }],
    },
    {
      title: "Components",
      sections: [
        {
          title: "Inputs",
          pages: [
            "Autocomplete",
            "TextInput",
            "Checkbox",
            "Password",
            "Phone",
            "Radio",
            "Select",
            "Slider",
          ].sort(),
        },
        { title: "Layout", pages: ["Flex"] },
        { title: "Data Display", pages: ["Accordion", "List", "Tooltip"] },
      ],
    },
  ];

  return (
    <Fragment>
      <NavBar></NavBar>
      <Flex className={styles.wrapper} style={{ paddingTop: "51px" }}>
        <Flex direction="column" className={styles.navWrap}>
          {navData.map((section) => (
            <Accordion key={section.title} defaultExpanded={true}>
              <AccordionHeader className={styles.accordionHeader}>
                {section.title.toUpperCase()}
              </AccordionHeader>
              <AccordionContent className={styles.content}>
                <div className={styles.line} />
                <List className={styles.list}>
                  {section.sections.map((p) => (
                    <Fragment key={p.title || p.pages[0]}>
                      {p.title && (
                        <ListItem className={styles.subSection}>
                          {p.title.toUpperCase()}
                        </ListItem>
                      )}
                      {p.pages.map((p) => (
                        <ListItem key={p} className={styles.pageLink}>
                          <ListItemButton
                            as={Link}
                            to={`/docs/${p}`}
                            className={styles.pageLinkButton}
                            variant={
                              page === p ||
                              (page === "" && p.toUpperCase() === "OVERVIEW")
                                ? "soft"
                                : "plain"
                            }
                          >
                            {p}
                          </ListItemButton>
                        </ListItem>
                      ))}
                    </Fragment>
                  ))}
                </List>
              </AccordionContent>
            </Accordion>
          ))}
        </Flex>
        <Flex className={styles.pageWrap}>{renderPage(page)}</Flex>
      </Flex>
    </Fragment>
  );
};

export default Docs;
