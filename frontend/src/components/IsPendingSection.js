import {Box, Spinner} from "grommet";

/**
 * Component that displays a loading message.
 * @returns JSX component that displays a loading message
 */
const IsPendingSection = () => {
  return (
    <Box direction="row">
      <h2>Loading...</h2>
      <Spinner />
    </Box>
  );
};

export { IsPendingSection };