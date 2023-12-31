import { Text } from "../../containers/LanguageProvider";

export const infoAbout = {
  id: "about",
  whiteBg: true,
  lightText: false,
  headLine: <Text tid="info-about" />,
  description: <Text tid="info-text" />,
  buttonLabel: <Text tid="info-button" />,
  imgStart: true,
  img: require("../../images/pexels-kristina-paukshtite-3242264.jpg"),
  alt: "Honoria",
  dark: false,
  primary: false,
  withList: false,
};

export const infoContact = {
  id: "contact",
  whiteBg: false,
  lightText: true,
  headLine: <Text tid="contact-header" />,
  description: <Text tid="contact-text" />,
  buttonLabel: <Text tid="contact-button" />,
  imgStart: false,
  img: require("../../images/svg-contact.svg").default,
  alt: "contact",
  dark: true,
  primary: true,
  withList: false,
};

export const infoProblems = {
  id: "problems",
  whiteBg: false,
  lightText: true,
  headLine: <Text tid="problems-header" />,
  description: <Text tid="problems-text" />,
  list1: <Text tid="problems-list1" />,
  list2: <Text tid="problems-list2" />,
  list3: <Text tid="problems-list3" />,
  list4: <Text tid="problems-list4" />,
  list5: <Text tid="problems-list5" />,
  buttonLabel: <Text tid="problems-button" />,
  imgStart: false,
  img: require("../../images/pexels.jpg"),
  alt: "sleeping baby",
  dark: true,
  primary: true,
  withList: true,
};

export const infoProcess = {
  id: "process",
  whiteBg: true,
  lightText: false,
  headLine: <Text tid="process-header" />,
  description: <Text tid="process-text" />,
  list1: <Text tid="process-list1" />,
  list2: <Text tid="process-list2" />,
  list3: <Text tid="process-list3" />,
  list4: <Text tid="process-list4" />,
  list5: <Text tid="process-list5" />,

  buttonLabel: <Text tid="process-button" />,
  imgStart: true,
  img: require("../../images/pexels3.jpg"),
  alt: "contact",
  dark: false,
  primary: false,
  withList: true,
};

export const infoResult = {
  id: "result",
  whiteBg: true,
  lightText: false,
  headLine: <Text tid="result-header" />,
  description: "",
  list1: <Text tid="result-list1" />,
  list2: <Text tid="result-list2" />,
  list3: <Text tid="result-list3" />,
  buttonLabel: <Text tid="result-button" />,
  imgStart: true,
  img: require("../../images/pexels3.jpg"),
  alt: "contact",
  dark: false,
  primary: false,
  withList: true,
};


