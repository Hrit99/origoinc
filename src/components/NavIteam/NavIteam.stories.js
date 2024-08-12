import { NavIteam } from ".";

export default {
  title: "Components/NavIteam",
  component: NavIteam,
  argTypes: {
    state: {
      options: ["active", "idle"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    state: "active",
    className: {},
    frameClassName: {},
    divClassName: {},
    text: "Home",
  },
};
