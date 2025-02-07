import {
  Box
} from "grommet";

/**
 * Component that displays a message when the user is not logged in.
 * @returns JSX component that displays a message when the user is not logged in
 */
const NotLoggedIn = () => {
  return (
    <Box>
      <h2>Non sei loggato, puoi farlo cliccando sulla sidebar in Login</h2>
    </Box>
  )
}

export { NotLoggedIn };