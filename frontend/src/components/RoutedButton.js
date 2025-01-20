import { useNavigate } from "react-router-dom";
import { Button } from "grommet";

function RoutedButton({path, ...props}){
    const navigate = useNavigate();
    return (
        <Button onClick={() => navigate(path)} {...props} />
    );
}

export { RoutedButton };