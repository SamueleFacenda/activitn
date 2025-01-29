import {
    Header, 
    Button,
    Text,
    Box
} from 'grommet';

import { useAuth } from '../hooks/Auth';
import { Moon, Sun } from "grommet-icons";

function AppBar({ appIcon, appName, toggleSideBar, dark, setDark }) {
    const { state, logout } = useAuth();
    const { isAuthenticated } = state;

    return (
        <Header background="brand" pad="small" justify="between" direction="row" align="center">
            <Button onClick={toggleSideBar}>
                <Box
                    flex={false}
                    direction="row"
                    align="center"
                    margin={{ left: "small" }}>
                {appIcon}
                <Text size="large" margin={{ left: "small" }}>{appName}</Text>
                </Box>
            </Button>
            <Button
                a11yTitle={dark ? "Switch to Light Mode" : "Switch to Dark Mode"}
                icon={dark ? <Moon /> : <Sun />}
                onClick={() => setDark(!dark)} />
        </Header>
    );
};

export { AppBar };