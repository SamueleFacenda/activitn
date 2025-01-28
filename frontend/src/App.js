import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { 
  Box,
  Grommet, 
  Page,
} from 'grommet';

import { Home, Events, UserSettings, Login } from './pages';
import { AppBar, SideBar } from './components';
import { AuthProvider } from "./hooks/Auth";
import { theme } from './style';

import {
  Grommet as GrommetIcon,
  Calendar,
  HomeRounded,
} from "grommet-icons";

const pages = [
  {
    label: "Home",
    Icon: HomeRounded,
    path: "/",
    Element: Home,
    displayInSidebar: true
  },
  {
    label: "Events",
    Icon: Calendar,
    path: "/events",
    Element: Events,
    displayInSidebar: true
  },
  {
    label: "User Settings",
    Icon: UserSettings,
    path: "/usersettings",
    Element: UserSettings,
    displayInSidebar: false
  },
  { // for now put the login page accessible from the sidebar
    label: "Login",
    Icon: UserSettings, // TODO: Change this icon
    path: "/login",
    Element: Login,
    displayInSidebar: true
  }
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
              appIcon={<GrommetIcon/>} 
              dark={dark} 
              setDark={setDark} />
            <Box direction="row-responsive" fill>
              <SideBar pages={pages} showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
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
