import * as React from "react";
import AsyncCreatableSelect from "react-select/async-creatable";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
  { value: "mint", label: "Mint" },
  { value: "banana", label: "Banana" },
  { value: "maple", label: "Maple" },
  { value: "honey", label: "Honey" },
];

export interface SelectProps {
  text?: string;
}

const filterColors = (inputValue: string) => {
  return options.filter((i) =>
    i.label.toLowerCase().includes(inputValue.toLowerCase())
  );
};

const promiseOptions = (inputValue: string) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(filterColors(inputValue));
    }, 1000);
  });

export const SearchSelectComponent: React.FC<SelectProps> = () => (
  <AsyncCreatableSelect
    cacheOptions
    defaultOptions
    loadOptions={promiseOptions}
  />
);
