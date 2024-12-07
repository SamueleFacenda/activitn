import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { 
  Button,
  Grommet, 
  grommet as grommetTheme,
  Header, 
  Page,
  Text 
} from 'grommet';
import { deepMerge } from "grommet/utils";
import { Moon, Sun } from "grommet-icons";

import { Home } from './pages';
import { AppBar } from './components';

const pages = [
  // {
  //   label: "Servers",
  //   Icon: ServersIcon,
  //   path: "/servers"
  // },
  // {
  //   label: "Users",
  //   Icon: Group,
  //   path: "/users"
  // },
  // {
  //   label: "Settings",
  //   Icon: SettingsOption,
  //   path: "/settings"
  // }
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

  return (
    <Router>
      <Grommet theme={theme} full themeMode={dark ? "dark" : "light"}>
        <Page>

          <AppBar>
            <Text size="large">Activitn</Text>
            <Button
              a11yTitle={dark ? "Switch to Light Mode" : "Switch to Dark Mode"}
              icon={dark ? <Moon /> : <Sun />}
              onClick={() => setDark(!dark)}
            />
          </AppBar>
          <Routes>
            <Route index element={<Home />} />
          </Routes>
        </Page>
      </Grommet>
    </Router>
  );
}

export default App;
