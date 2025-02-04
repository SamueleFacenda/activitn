import { RoutedButton } from "./RoutedButton";
import {
  Box,
  Button,
  Collapsible,
  ResponsiveContext,
  Sidebar,
  Text,
} from "grommet";
import { Close, User, Logout } from "grommet-icons";
import { useContext } from "react";

import { useAuth } from "../hooks/Auth";

import { NameUserID } from "./NameUserID";

const styleSideElement = {
  padding: "10px 15px",
  fontSize: "16px",
  color: "#fff",
  fontWeight: "bold",
  textAlign: "left",
  borderBottom: "1px solid #ddd",
  transition: "background-color 0.3s ease",
};

/**
 * Component that shows the sidebar with the user section ('Utente anonimanto' or 'Benvenuto {User}') and 
 * the route buttons. It has a button to logout the user.
 * 
 * @param {props} param0 sidebar props
 * @param {Array} pages array of pages to show in the sidebar
 * @param {Boolean} showSidebar show the sidebar
 * @param {Function} setShowSidebar set the sidebar 
 * @returns {JSX.Element} A `Sidebar` containing the user section and the route buttons.
 */
function SideBar({ pages, showSidebar, setShowSidebar }) {
  const { state } = useAuth();
  const { logout } = useAuth();
  // console.log("State: ", state);
  const userId = state.userId;

  const size = useContext(ResponsiveContext);

  const routeButtons = pages.map(
    (page) =>
      page.displayInSidebar && (
        <RoutedButton
          key={page.label}
          path={page.path}
          label={page.label}
          //   icon={page.Icon}
          fill="horizontal"
          margin="none"
          plain
          style={styleSideElement}
          hoverIndicator={{
            background: "accent-1",
          }}
        />
      )
  );

  // function that return the user section with the user name if the user is logged in,
  function UserSection() {
    if (!userId) {
      return (
        <Text>
          Utente Anonimo
          <User />
        </Text>
      );
    }

    return (
      <Box
        align="center"
        justify="center"
        fill="horizontal"
        pad="small"
        style={styleSideElement}
      >
        <Box direction="row" gap="small" align="center">
          Benvenuto <NameUserID id={userId} />
        </Box>
        <Button
          icon={<Logout />}
          hoverIndicator
          plain
          style={{ color: "#fff", padding: "10px" }}
          onClick={() => {
            alert("Logout");
            logout();
          }}
        ></Button>
      </Box>
    );
  }

  // show the vertical collapsible sidebar if the screen size is small, the bigger sidebar otherwise
  return size === "small" ? (
    <Collapsible direction="vertical" open={showSidebar}>
      <Box
        fill="vertical"
        background="neutral-3"
        elevation="small"
        align="start"
        justify="start"
        pad="small"
        style={{ transition: "transform 0.3s ease" }}
      >
        <Button
          onClick={() => setShowSidebar(false)}
          icon={<Close />}
          hoverIndicator
          plain
          style={{ color: "#fff", padding: "10px" }}
        />

        <UserSection />
        {routeButtons}
      </Box>
    </Collapsible>
  ) : (
    <Sidebar
      background="neutral-3"
      width="200px"
      align="start"
      fill="vertical"
      justify="start"
      elevation="medium"
      pad="small"
      style={{ transition: "transform 0.3s ease" }}
    >
      <UserSection />
      {routeButtons}
    </Sidebar>
  );
}

export { SideBar };
