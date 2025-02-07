import { Box, InfiniteScroll } from "grommet";

import { Message } from "./Message";

/**
 * MessageList component that displays the messages in the chat
 * @param {props} param0 - messages
 * @param {Array} messages - messages to display in the chat (the struct of the message should be
 * {messageContent, userName (as ID of the user), date, isUserMessage})
 * @returns {JSX.Element} - MessageList component
 */
const MessageList = ({ messages }) => {
  // console.log(messages);
  return (
    <Box
      pad="medium"
      overflow="auto"
      background="background-contrast"
      round="small"
    >
      <InfiniteScroll items={messages}>
        {(message, index) => <Message key={index} message={message} />}
      </InfiniteScroll>
    </Box>
  );
};

export { MessageList };
