import * as React from "react";
import Select from "react-select";
import Creatable, { makeCreatableSelect } from "react-select/creatable";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

export interface SelectProps {
  text?: string;
}

// const SelectComponent = () => <Select options={options} />;

export const SelectComponent: React.FC<SelectProps> = () => (
  <Select options={options} />
);
