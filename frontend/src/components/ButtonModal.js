import React, { useState } from "react";
import { Box, Button, Layer, Text } from "grommet";

import { Trash } from "grommet-icons";

const Messages = {
  DELETE_EVENT: "Sei sicuro di cancellare questo evento?",
};

const ButtonModal = ({ typeAction, event, methodApply }) => {
  const [open, setOpen] = useState(false);

  // function to open the modal
  const openModal = () => {
    console.log("Modal aperto!");
    setOpen(true);
  };

  // function to close the modal
  const closeModal = () => setOpen(false);

  // function to handle the confirmation action --> invoke methodApply
  const handleConfirm = () => {
    methodApply(event);
    closeModal();
  };

  // message to show in the modal
  const modalMessage = Messages[typeAction];

  // ConfirmButton component with label, Icon and color --> template for the buttons
  const ConfirmButton = ({ label, Icon, color }) => {
    return (
      <Button
        label={label}
        icon={Icon}
        width="min-content"
        onClick={openModal}
        primary
        style={{
          backgroundColor: color,
        }}
      />
    );
  };

  // DeleteEvent Button template
  const DeleteEventButton = () => {
    return (
      <ConfirmButton
        // label="Delete Event"
        Icon={<Trash />}
        color="#FF4040"        
      />
    );
  };

  // function to get the button based on the typeAction
  const getButton = (typeAction) => {
    switch (typeAction) {
      case "DELETE_EVENT":
        return <DeleteEventButton />;
      default:
        throw new Error("Invalid typeAction");
    }
  };

  return (
    <>
      {getButton(typeAction)}
      {open && (
        <Layer
          animate={true}
          animation="fadeIn"
          // animation="slideIn"
          onEsc={closeModal} // Close the modal when pressing the Esc key
          onClickOutside={closeModal} // Close the modal when clicking outside
        >
          <Box pad="medium" gap="small" width="min-content">
            <Text>{modalMessage}</Text>
            <Box direction="row" gap="small" justify="end">
              <Button label="Annulla" onClick={closeModal} />
              <Button label="Conferma" primary onClick={handleConfirm} />
            </Box>
          </Box>
        </Layer>
      )}
    </>
  );
};

export { ButtonModal };
