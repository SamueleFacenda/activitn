import {Box, Heading, Spinner} from "grommet";

/**
 * Component that displays a loading message.
 * @returns JSX component that displays a loading message
 */
const IsPendingSection = () => {
  return (
    <Box direction="row">
      <Heading level="2">Loading...</Heading>
      <Spinner />
    </Box>
  );
};

export { IsPendingSection };