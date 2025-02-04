import { NameUserID } from "./NameUserID";

import { Box, InfiniteScroll, Heading } from "grommet";
import styled from "styled-components";

const StyledBox = styled(Box)`
  margin-left: 20px;
  height: max-content;
  min-height: 50px;
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.1);
  }
`;
/**
 * A component that displays a list of users, with each user's name fetched by their ID.
 * The users are displayed in a scrollable list, and each item is wrapped in a styled box.
 * The list supports infinite scrolling, displaying more users as the user scrolls.
 * @param {Object} props - The props for the component.
 * @param {Array} props.listUser - An array of user IDs that should be displayed.
 * Each user ID will be used to fetch the user's name and display it.
 *
 * @returns {JSX.Element} A `Box` containing an infinite scrollable list of users.
 */
function ListUsers({ listUser }) {
  // console.log("ListUsers: ", listUser);
  // const testUsers = [
  //   1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  //   11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  // ]
  // listUser = testUsers;
  console.log("ListUsers: ", listUser);
  return (
    <Box height="small" overflow="auto">
      <Heading level="3" margin="none">
        Partecipanti
      </Heading>
      <InfiniteScroll 
        items={listUser} 
        pad="large"
      >
        {(item, index) => (
          <StyledBox
            key={item}
            width="medium"
            pad="small"
            background={index % 2 === 0 ? "raking-1" : "raking-2"}
            elevation="medium"
            round="small"
            margin="small"
          >
            <NameUserID id={item}/>
          </StyledBox>
        )}
      </InfiniteScroll>
    </Box>
  );
}

export { ListUsers };
