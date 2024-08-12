import { OurWorkCard } from ".";

export default {
  title: "Components/OurWorkCard",
  component: OurWorkCard,
  argTypes: {
    property1: {
      options: ["hover", "normal"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "hover",
    className: {},
    image: "https://c.animaapp.com/VZNw3juI/img/image.png",
    frameClassName: {},
    divClassName: {},
    text: "Bebos Mobile Mechanic",
    propertyDefaultWrapperFrame: "https://c.animaapp.com/VZNw3juI/img/frame-870-9.svg",
    propertyDefaultWrapperImg: "https://c.animaapp.com/VZNw3juI/img/frame-869-9.svg",
    img: "https://c.animaapp.com/VZNw3juI/img/image-1.png",
    group: "https://c.animaapp.com/VZNw3juI/img/group-8.png",
    frameClassNameOverride: {},
    divClassNameOverride: {},
    text1: "01",
    buutonFrame: "https://c.animaapp.com/VZNw3juI/img/frame-869-13.svg",
    buutonImg: "https://c.animaapp.com/VZNw3juI/img/frame-870-13.svg",
  },
};
