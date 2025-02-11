import {
  Box,
  Heading
} from "grommet";

/**
 * Component that displays a message when the user is not logged in.
 * @returns JSX component that displays a message when the user is not logged in
 */
const NotLoggedIn = () => {
  return (
    <Box>
      <Heading level="2">Non sei autenticato, puoi farlo cliccando sulla sidebar in Login</Heading>
    </Box>
  )
}

export { NotLoggedIn };
