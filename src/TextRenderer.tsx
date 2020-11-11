import * as React from "react";
import { FormattedMessage, MessageDescriptor } from "react-intl";

export const TextRenderer: React.FC<{ text: string | MessageDescriptor }> = ({
  text,
}) => (typeof text === "string" ? <>{text}</> : <FormattedMessage {...text} />); // eslint-disable-line react/jsx-props-no-spreading
