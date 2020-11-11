import * as React from "react";
import { Modal } from ".";

export default {
  title: "Components/Modal",
};

export const ModalWithLeftHeader: React.FC = () => (
  <Modal.Container>
    <Modal.Header text="Hello" />
    <Modal.Content>Some other text</Modal.Content>
  </Modal.Container>
);
export const ModalWithCenteredHeader: React.FC = () => (
  <Modal.Container>
    <Modal.Header text="Hello" centered />
    <Modal.Content>Some other text</Modal.Content>
  </Modal.Container>
);
