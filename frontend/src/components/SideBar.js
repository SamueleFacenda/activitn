import { RoutedButton } from "./RoutedButton";
import { Box, Button, Collapsible, ResponsiveContext, Sidebar } from "grommet";
import { Close } from "grommet-icons";

import { useContext } from "react";

function SideBar({ pages, showSidebar, setShowSidebar }) {
    const size = useContext(ResponsiveContext);

    const routeButtons = pages.map((page) => (
        <RoutedButton
            key={page.label}
            path={page.path}
            label={page.label}
            // icon={page.Icon}
            fill="horizontal"
            margin="none"
            plain
        />
    ));

    // show the vertical collapsible sidebar if the screen size is small, the bigger sidebar otherwise
    return (size === "small") ? (
            <Collapsible direction="vertical" open={showSidebar}>
                <Box
                    fill="vertical"
                    width="sidebar" 
                    background="background-contrast"
                    elevation="small"
                    align="center"
                    justify="center"
                >
                    <Button onClick={() => setShowSidebar(false)}> <Close /> </Button>
                    {routeButtons}
                </Box>
            </Collapsible>
        ) : (
            <Sidebar
                background="background"
                width="sidebar"
                align="center"
                fill="vertical"
                justify="center"
                elevation="small"
                pad="none"
            >
                {routeButtons}
            </Sidebar>
        );
}

export { SideBar };