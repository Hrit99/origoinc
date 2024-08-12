import { PropertyDefaultWrapper } from ".";

export default {
  title: "Components/PropertyDefaultWrapper",
  component: PropertyDefaultWrapper,
  argTypes: {
    property1: {
      options: ["black", "normal", "variant-4", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "black",
    className: {},
    frameClassName: {},
    frame: "https://c.animaapp.com/VZNw3juI/img/frame-869.svg",
    frameClassNameOverride: {},
    divClassName: {},
    imgClassName: {},
    img: "https://c.animaapp.com/VZNw3juI/img/frame-870.svg",
    frame1: "https://c.animaapp.com/VZNw3juI/img/frame-869-2.svg",
    frame2: "https://c.animaapp.com/VZNw3juI/img/frame-870-2.svg",
    frame3: "https://c.animaapp.com/VZNw3juI/img/frame-869-3.svg",
    text: "Let’s Talk Now",
    frame4: "https://c.animaapp.com/VZNw3juI/img/frame-870-3.svg",
  },
};
