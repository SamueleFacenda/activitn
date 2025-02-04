import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Box, Grommet, Page } from "grommet";

import {
  Home,
  Events,
  UserSettings,
  Login,
  SearchEvent,
  MyEvents,
  CreateEvent,
  ModifyEvent,
} from "./pages";
import { AppBar, SideBar } from "./components";
import { AuthProvider } from "./hooks/Auth";
import { theme } from "./style";

import {
  Grommet as GrommetIcon,
  Calendar,
  HomeRounded,
  Search,
  User,
} from "grommet-icons";
import { EventDescription } from "./pages/EventDescription";

const pages = [
  {
    label: "Home",
    Icon: HomeRounded,
    path: "/",
    Element: Home,
    displayInSidebar: true,
  },
  {
    label: "User Settings",
    Icon: UserSettings,
    path: "/usersettings",
    Element: UserSettings,
    displayInSidebar: false,
  },
  {
    // for now put the login page accessible from the sidebar
    label: "Login",
    Icon: User, // TODO: Change this icon
    path: "/login",
    Element: Login,
    displayInSidebar: true,
  },
  {
    // for now put the login page accessible from the sidebar
    label: "Search ",
    Icon: Search, // TODO: Change this icon
    path: "/events",
    Element: SearchEvent,
    displayInSidebar: true,
  },
  {
    label: "My Events",
    Icon: Calendar,
    path: "/myevents",
    Element: MyEvents,
    displayInSidebar: true,
  },
  {
    label: "Create Event",
    Icon: Calendar,
    path: "/create-event",
    Element: CreateEvent,
    displayInSidebar: true,
  },
  {
    label: "Modify Event",
    Icon: Calendar,
    path: "/modify-event/:id",
    Element: ModifyEvent,
    displayInSidebar: false,
  },
  {
    label: "Get event by ID",
    Icon: Calendar,
    path: "/events/:id",
    Element: EventDescription,
    displayInSidebar: false,
  },
];

function App() {
  const [dark, setDark] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <Router>
      <AuthProvider>
        <Grommet theme={theme} full themeMode={dark ? "dark" : "light"}>
          <Box fill>
            <AppBar
              toggleSideBar={() => setShowSidebar(!showSidebar)}
              appName="Activitn"
              appIcon={<GrommetIcon />}
              dark={dark}
              setDark={setDark}
            />
            <Box direction="row-responsive" fill>
              <SideBar
                pages={pages}
                showSidebar={showSidebar}
                setShowSidebar={setShowSidebar}
              />
              <Page overflow="auto">
                <Routes>
                  {pages.map(({ path, Element }) => (
                    <Route key={path} path={path} element={<Element />} />
                  ))}
                </Routes>
              </Page>
            </Box>
          </Box>
        </Grommet>
      </AuthProvider>
    </Router>
  );
}

export default App;
