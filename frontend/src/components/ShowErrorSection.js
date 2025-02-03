import { Box } from "grommet";

/**
 * A simple component to display an error message in a box format.
 * This component is typically used to show error messages when an operation fails.
 * @param {Object} props - The props for the component.
 * @param {string} props.error - The error message to be displayed.
 * 
 * @returns {JSX.Element} A `Box` component from Grommet containing the error message.
 */
const ShowErrorSection = (error) => {
  return (
    <Box>
      <h2>Error: {error}</h2>
    </Box>
  );
};

export { ShowErrorSection };