import { RoutedButton } from "./RoutedButton";

import { Chat } from "grommet-icons";

/**
 * ChatButton component that renders a button to view an event
 * @param {Object} event - event object
 * @returns {JSX.Element} - ChatButton component
 */
const PATH = "/messages";
const ChatButton = ({event}) => {
  return (
    <RoutedButton
      path={`${PATH}/${event._id}`}
      // label="View"
      icon={<Chat />}
      primary
      style={{
        backgroundColor: "yellow",
     }}
    />
  );
}

export { ChatButton };