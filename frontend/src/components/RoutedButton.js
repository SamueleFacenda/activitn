import { useNavigate, useMatch } from "react-router-dom";
import { Button } from "grommet";

// pass the absolute path to the button
function RoutedButton({ path, ...props }) {
  const navigate = useNavigate();
  const match = useMatch(path);  
  const isActive = match != null; 

  const handleClick = () => {
    navigate(path); 
  };

  return (
    <Button
      active={isActive} 
      onClick={handleClick} 
      {...props}
    >
    </Button>
  );
}

export { RoutedButton };
