import * as React from "react";
import styled from "styled-components";
import { MessageDescriptor } from "react-intl";

import { TextRenderer } from "../TextRenderer";

const Wrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.color.primary};
  border-radius: 4px;
`;
const HeadingContainer = styled.div`
  background-color: ${({ theme }) => theme.color.primary};
`;
const Title = styled.h3<{ centered?: boolean }>`
  color: ${({ theme }) => theme.color.secondary};
  text-align: ${({ centered }) => (centered ? "center" : "left")};
  margin: 0;
  padding: 16px;
`;

const Container: React.FC = ({ children }) => <Wrapper>{children}</Wrapper>;

interface HeaderProps {
  text: string | MessageDescriptor;
  centered?: boolean;
}

const Header: React.FC<HeaderProps> = ({ text, centered }) => (
  <HeadingContainer>
    <Title centered={centered}>
      <TextRenderer text={text} />
    </Title>
  </HeadingContainer>
);

const Content = styled.div`
  padding: 16px;
`;

export const Modal = {
  Header,
  Container,
  Content,
};
