import React, { useState, useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { 
  Box,
  Grommet, 
  grommet as grommetTheme,
  Page,
  ResponsiveContext,
} from 'grommet';
import { deepMerge } from "grommet/utils";

import { Home, Events, UserSettings } from './pages';
import { AppBar, SideBar } from './components';
import { AuthProvider } from "./hooks/Auth";

import {
  Grommet as GrommetIcon,
  Calendar,
  HomeRounded,
} from "grommet-icons";

const pages = [
  {
    label: "Home",
    Icon: HomeRounded,
    path: "/"
  },
  {
    label: "Events",
    Icon: Calendar,
    path: "/events"
  },
  {
    label: "User Settings",
    Icon: UserSettings,
    path: "/usersettings"
  }
];

const theme = deepMerge(grommetTheme, {
  global: {
    colors: {
      brand: '#228BE6',
    },
    font: {
      family: "Roboto",
      size: "18px",
      height: "20px",
    },
  },
});

function App() {
  const [dark, setDark] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <Router>
      <AuthProvider>
        <Grommet theme={theme} full themeMode={dark ? "dark" : "light"}>
          <AppBar 
            toggleSideBar={() => setShowSidebar(!showSidebar)} 
            appName="Activitn" 
            appIcon={<GrommetIcon/>} 
            dark={dark} 
            setDark={setDark} />
          <Box direction="row-responsive" flex>
            <SideBar pages={pages} showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
            <Page>
              
              <Routes>
                <Route index element={<Home/>} />
                <Route path="/events" element={<Events />} />
                <Route path="/usersettings" element={<UserSettings />} />
              </Routes>
            </Page>
          </Box>
        </Grommet>
      </AuthProvider>
    </Router>
  );
}

export default App;
