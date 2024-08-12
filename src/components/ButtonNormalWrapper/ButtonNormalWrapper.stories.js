import { ButtonNormalWrapper } from ".";

export default {
  title: "Components/ButtonNormalWrapper",
  component: ButtonNormalWrapper,
  argTypes: {
    button: {
      options: ["button-3", "hover", "group-1", "normal"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    button: "button-3",
    className: {},
    frameClassName: {},
    divClassName: {},
    text: "Let’s Talk Now",
    vectorClassName: {},
    vector: "https://c.animaapp.com/VZNw3juI/img/vector-1-4.svg",
    vectorClassNameOverride: {},
    img: "https://c.animaapp.com/VZNw3juI/img/vector-2-5.svg",
    imgClassName: {},
    vector1: "https://c.animaapp.com/VZNw3juI/img/vector-3-5.svg",
    vector2: "https://c.animaapp.com/VZNw3juI/img/vector-4-6.svg",
  },
};
