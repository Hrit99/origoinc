import { Frame } from ".";

export default {
  title: "Components/Frame",
  component: Frame,
  argTypes: {
    property1: {
      options: ["variant-2", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "variant-2",
    text: "01",
    text1: "SEO Management_",
    group: "https://c.animaapp.com/VZNw3juI/img/group-7.png",
  },
};
