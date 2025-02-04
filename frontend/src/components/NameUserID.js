import { useGetUsersById } from "../api/queries";

import { Text, Spinner } from "grommet";

import { useAuth } from "../hooks/Auth";

const NAME_MAX_LENGTH = 20;
// Method to truncate the name if it is too long
const truncateNameLength = (name) => {
  if (name.length > NAME_MAX_LENGTH) {
    return name.slice(0, NAME_MAX_LENGTH) + "...";
  }
  return name;
};

/**
 * A component that displays the name of the user with the given ID
 * @param {id} String - The user ID 
 * @returns {Text} - The name of the user with the given ID
 */
const NameUserID = ({ id }) => {
  const { state } = useAuth();
  const { isAuthenticated } = state;
  const { data, isPending, isError, error } = useGetUsersById(
    { id: id },
    undefined,
    {
      enabled: isAuthenticated,
    }
  );
  
  if (isPending) {
    return <Spinner />;
  }

  if (isError) {
    return <Text>Error: {error.message}</Text>;
  }
  
  const user = isPending ? [] : data;
  return <Text>{truncateNameLength(user.name)}</Text>;
};

export { NameUserID };
