import { Buuton } from ".";

export default {
  title: "Components/Buuton",
  component: Buuton,
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
    frame: "https://c.animaapp.com/VZNw3juI/img/frame-869-13.svg",
    text: "Let’s Talk Now",
    img: "https://c.animaapp.com/VZNw3juI/img/frame-870-13.svg",
    divClassName: {},
  },
};
