import { ReactElement } from "react";
import AutocompleteDoc from "./views/AutocompleteDoc/AutocompleteDoc";
import ButtonDoc from "./views/ButtonDoc/ButtonDoc";
import CheckboxDoc from "./views/CheckboxDoc/CheckboxDoc";
import PasswordDoc from "./views/PasswordDoc/PasswordDoc";
import PhoneDoc from "./views/PhoneDoc/PhoneDoc";
import RadioDoc from "./views/RadioDoc/RadioDoc";
import SelectDoc from "./views/SelectDoc/SelectDoc";
import SliderDoc from "./views/SliderDoc/SliderDoc";
import TextInputDoc from "./views/TextInputDoc/TextInputDoc";
import DrawerDoc from "./views/DrawerDoc/DrawerDoc";
import FlexDoc from "./views/FlexDoc/FlexDoc";
import AccordionDoc from "./views/AccordionDoc/AccordionDoc";
import ListDoc from "./views/ListDoc/ListDoc";
import TooltipDoc from "./views/TooltipDoc/TooltipDoc";
import Overview from "./views/Overview/Overview";
import Installation from "./views/Installation/Installation";
import Usage from "./views/Usage/Usage";
import Contributing from "./views/Contributing/Contributing";

type Page = {
  title?: string;
  path: string;
  component: ReactElement;
};

type Section = {
  title?: string;
  pages: Page[];
};

export type NavData = {
  title: string;
  sections: Section[];
};

export const navData: NavData[] = [
  {
    title: "Getting Started",
    sections: [
      {
        pages: [
          { path: "Overview", component: <Overview /> },
          { path: "Installation", component: <Installation /> },
          { path: "Usage", component: <Usage /> },
        ],
      },
    ],
  },
  {
    title: "Components",
    sections: [
      {
        title: "Inputs",
        pages: [
          {
            path: "Autocomplete",
            component: <AutocompleteDoc />,
          },
          { path: "Button", component: <ButtonDoc /> },
          { path: "Checkbox", component: <CheckboxDoc /> },
          { path: "Password", component: <PasswordDoc /> },
          { path: "Phone", component: <PhoneDoc /> },
          { path: "Radio", component: <RadioDoc /> },
          { path: "Select", component: <SelectDoc /> },
          { path: "Slider", component: <SliderDoc /> },
          { path: "TextInput", component: <TextInputDoc /> },
        ],
      },
      {
        title: "Layout & Containers",
        pages: [
          { path: "Drawer", component: <DrawerDoc /> },
          { path: "Flex", component: <FlexDoc /> },
        ],
      },
      {
        title: "Data Display",
        pages: [
          { path: "Accordion", component: <AccordionDoc /> },
          { path: "List", component: <ListDoc /> },
          { path: "Tooltip", component: <TooltipDoc /> },
        ],
      },
    ],
  },
  {
    title: "Contributing",
    sections: [
      {
        pages: [{ path: "Contributing", component: <Contributing /> }],
      },
    ],
  },
];

export const findComponentByPath = (
  pagePath: string
): JSX.Element | undefined => {
  for (const section of navData) {
    for (const subSection of section.sections) {
      const page = subSection.pages.find(
        (p) => p.path.toLowerCase() === pagePath.toLowerCase()
      );
      if (page) {
        return page.component;
      }
    }
  }
  return undefined;
};

const capitalizeFirstLetter = (str: string) => {
  if (str.length === 0) return "";
  if (str.length === 1) return str.charAt(0).toUpperCase();
  return `${str.charAt(0).toUpperCase()}${str.substring(1)}`;
};

export const getSurroundingPages = (
  path: string
): { prevPage: string | null; nextPage: string | null } => {
  const pageTitles = [];
  for (const section of navData) {
    for (const subSection of section.sections) {
      pageTitles.push(...subSection.pages.map((p) => p.path.toLowerCase()));
    }
  }
  const index = pageTitles.indexOf(path.toLowerCase());
  const prevPage = index > 0 ? pageTitles[index - 1] : null;
  const nextPage = index < pageTitles.length - 1 ? pageTitles[index + 1] : null;
  return {
    prevPage: prevPage && capitalizeFirstLetter(prevPage),
    nextPage: nextPage && capitalizeFirstLetter(nextPage),
  };
};
