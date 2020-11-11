import * as React from "react";
import styled from "styled-components";
import { MessageDescriptor } from "react-intl";

import { TextRenderer } from "../TextRenderer";

export interface ButtonProps {
  text: string | MessageDescriptor;
}

const BasicButton = styled.button`
  min-width: 150px;
  height: 44px;
  border-radius: 4px;
  border-style: solid;
  box-sizing: border-box;
`;

const Primary = styled(BasicButton)`
  background-color: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.secondary};
  border-color: ${({ theme }) => theme.color.dark};
  border-bottom-width: 4px;
`;

const bottomBorderMap = {
  tertiary: "1px",
  secondary: "4px",
  text: "0px",
};
const Button = styled(BasicButton)<{
  kind: "secondary" | "tertiary" | "text";
}>`
  background-color: ${({ theme }) => theme.color.secondary};
  color: ${({ theme }) => theme.color.primary};
  border-color: ${({ theme }) => theme.color.medium};
  border-width: ${({ kind }) => (kind === "text" ? 0 : "1px")};
  border-bottom-width: ${({ kind }) => bottomBorderMap[kind]};
`;

export const PrimaryButton: React.FC<ButtonProps> = ({ text }) => (
  <Primary>
    <TextRenderer text={text} />
  </Primary>
);

export const SecondaryButton: React.FC<ButtonProps> = ({ text }) => (
  <Button kind="secondary">
    <TextRenderer text={text} />
  </Button>
);

export const TertiaryButton: React.FC<ButtonProps> = ({ text }) => (
  <Button kind="tertiary">
    <TextRenderer text={text} />
  </Button>
);

export const TextButton: React.FC<ButtonProps> = ({ text }) => (
  <Button kind="text">
    <TextRenderer text={text} />
  </Button>
);
