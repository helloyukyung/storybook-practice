import Input from "./Input";

export default {
  title: "Form/Input",
  component: Input,
};

export const Small = () => (
  <Input label="small" size="small" placeholder="small size" />
);

export const Medium = () => (
  <Input label="medium" size="medium" placeholder="medium size" />
);

export const Large = () => (
  <Input label="large" size="large" placeholder="large size" />
);

Small.storyName = "Small Input";
