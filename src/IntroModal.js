import React, { useState } from "react";
import { Modal, Button, Form } from "semantic-ui-react";
import ModalForm from "./ModalForm";
import ModalCard from "./ModalCard";

const IntroModal = ({
  displayModal,
  onOpenDisplayModal,
  onCloseDisplayModal,
  dropDownValue,
}) => {
  return (
    <Modal
      onOpen={onOpenDisplayModal}
      onClose={onCloseDisplayModal}
      open={displayModal}
      closeIcon
      size="tiny"
    >
      <Modal.Header>We've picked out a blog for you!</Modal.Header>
      <Modal.Content className="ModalContent">
        <ModalCard dropDownValue={dropDownValue} />

        <ModalForm dropDownValue={dropDownValue} />
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={onCloseDisplayModal}>Close</Button>
      </Modal.Actions>
    </Modal>
  );
};
export default IntroModal;
