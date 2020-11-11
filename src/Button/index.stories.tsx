import * as React from "react";
import { PrimaryButton, SecondaryButton, TertiaryButton, TextButton } from ".";

export default {
  title: "Components/Button",
};

export const ButtonPrimary: React.FC = () => <PrimaryButton text="Hello" />;

export const ButtonSecondary: React.FC = () => <SecondaryButton text="Hello" />;

export const ButtonTertiary: React.FC = () => <TertiaryButton text="Hello" />;

export const ButtonText: React.FC = () => <TextButton text="Hello" />;
