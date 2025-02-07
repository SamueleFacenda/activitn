import { RoutedButton } from "./RoutedButton";

import { View } from "grommet-icons";

/**
 * ViewButton component that renders a button to view an event
 * @param {Object} event - event object
 * @returns {JSX.Element} - ViewButton component
 */
const PATH = "/events";
const ViewButton = ({event}) => {
  return (
    <RoutedButton
      path={`${PATH}/${event._id}`}
      // label="View"
      icon={<View />}
      primary
      style={{
        backgroundColor: "#4C84FF",
     }}
    />
  );
}

export { ViewButton };