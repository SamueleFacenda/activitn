import { useNavigate, useMatch } from "react-router-dom";
import { Button } from "grommet";

function RoutedButton({path, ...props}){
    const navigate = useNavigate();
    const match = useMatch(path);
    const isActive = match != null;
    return (
        <Button active={isActive} onClick={() => navigate(path)} {...props} />
    );
}

export { RoutedButton };