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
        />
    ));

    // show the vertical collapsible sidebar if the screen size is small, the bigger sidebar otherwise
    return (size === "small") ? (
            <Collapsible direction="vertical" open={showSidebar}>
                <Box
                    fill="vertical"
                    width="sidebar" 
                    background="light-2"
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
                background="light-2"
                width="sidebar"
                align="center"
                fill="vertical"
                justify="center"
                elevation="small"
            >
                {routeButtons}
            </Sidebar>
        );
}

export { SideBar };