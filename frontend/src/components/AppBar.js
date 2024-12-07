import {
    Header, 
} from 'grommet';

export const AppBar = (props) => (
<Header
    background="brand"
    pad={{ left: "medium", right: "small", vertical: "small" }}
    elevation="medium"
    {...props}
/>
);