import React, { useState } from "react";
import { Box, Button, Layer, Text } from "grommet";

import { Trash } from "grommet-icons";

const Messages = {
  DELETE_EVENT: "Are you sure you want to delete this event?",
};

// const ButtonModal = ({ Btn, messageModal, event, methodApply }) => {
//   const [open, setOpen] = useState(false);

//   // Funzione per aprire il Layer (modal)
//   const openModal = () => {
//     console.log("Modal aperto!");
//     setOpen(true);
//   }

//   // Funzione per chiudere il Layer
//   const closeModal = () => setOpen(false);

//   // Funzione per l'azione di conferma
//   const handleConfirm = () => {
//     // Azione di conferma
//     console.log("Azione confermata!");
//     methodApply(event);
//     closeModal(); // Chiudi il modal dopo la conferma
//   };

//   return (
//     <>
//       <Button label="ok" width="min-content" onClick={openModal} />

//       {open && (
//         <Layer
//           animate={true}
//           animation="fadeIn"
//           // animation="slideIn"
//           onEsc={closeModal} // Chiudi il modal quando si preme Esc
//           onClickOutside={closeModal} // Close the modal when clicking outside
//         >
//           <Box pad="medium" gap="small" width="min-content">
//             <Text>{ messageModal }</Text>
//             <Box direction="row" gap="small" justify="end">
//               <Button label="Annulla" onClick={closeModal} />
//               <Button label="Conferma" primary onClick={handleConfirm} />
//             </Box>
//           </Box>
//         </Layer>
//       )}
//     </>
//   );
// };

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
    closeModal(); // Chiudi il modal dopo la conferma
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
        color={color}
      />
    );
  };

  const DeleteEventButton = () => {
    return (
      <ConfirmButton
        label="Delete Event"
        Icon={<Trash />}
        color="status-critical"
      />
    );
  };

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
          onEsc={closeModal} // Chiudi il modal quando si preme Esc
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
