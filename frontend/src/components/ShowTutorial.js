import { Button, Box, Text } from "grommet";

import { Catalog } from "grommet-icons";

import { useState } from "react";

/**
 * ShowTutorial component that renders a button to show a tutorial text
 * @param {String} tutorial - text of the tutorial
 * @returns {JSX.Element} - ShowTutorial component
 */
const ShowTutorial = ({ tutorial }) => {
  const [showTutorial, setShowTutorial] = useState(false);
  return (
    <Box>
      <Button
        icon={<Catalog />}
        label="Show Tutorial"
        onClick={() => setShowTutorial(!showTutorial)}
        primary
      />
      {showTutorial && (
        <Box
          animation="fadeIn"
          style={{ transition: "transform 0.3s ease" }}
        >
          <Text>{tutorial}</Text>
        </Box>
      )}
    </Box>
  );
};

export { ShowTutorial };
