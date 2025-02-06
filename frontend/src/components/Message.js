import { Box, Text } from "grommet";

import styled from "styled-components";

import { NameUserID } from "./NameUserID";

const WIDTH_MESSAGE = "80%";
const StyledBox = styled(Box)`
  min-height: 100px;
  transition: all 0.3s ease;
  overflow-wrap: break-word; /* Go to the next line if it's too long */
  word-wrap: break-word; /* For more compability for browsers */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 10px;
  width: ${WIDTH_MESSAGE};
  &:hover {
    transform: scale(1.05);
  }
`;

// function to convert the date to the European format
function convertToEuropeanFormat(dateString) {
  const date = new Date(dateString);

  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  return `${day}-${month}-${year} - ${hours}:${minutes}`;
}

const MESSAGE_MAX_LENGTH = 90;
// Function to truncate the message if it is too long
function truncateMessage(text) {
  if (text.length > MESSAGE_MAX_LENGTH) {
    return text.slice(0, MESSAGE_MAX_LENGTH) + "...";
  }
  return text;
}

/**
 * Message component that displays the message in the chat
 * @param {props} param0 - message 
 * @param {Object} message - message to display in the chat (the struct of the message should be
 * {messageContent, userName (as ID of the user), date, isUserMessage})
 * @returns {JSX.Element} - Message component
 */
const Message = ({ message }) => {
  const { messageContent, userName, date, isUserMessage } = message;
  console.log("MESSAGE: ", message);
  return (
    <StyledBox
      direction="row"
      align="start"
      pad="small"
      background={isUserMessage ? "my-message" : "other-message"}
      round="small"
      margin={{ bottom: "small" }}
    >
      <Box 
        direction="column" 
        margin={{ left: "small" }} 
        width="98%"
      >
        {/* Section with the user data */}
        <Box direction="row" justify="between">
          {/* <Text weight="bold">{userName}</Text> */}
          <NameUserID id={userName} />
          <Text size="xsmall" color="small-text">
            {convertToEuropeanFormat(date)}
          </Text>
        </Box>
        {/* Section with the message content */}
        <Text margin={{ top: "small" }} size="medium">{truncateMessage(messageContent)}</Text>
      </Box>
    </StyledBox>
  );
};

export { Message };
