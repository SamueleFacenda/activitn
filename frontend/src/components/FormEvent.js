import { useState, React } from "react";

import "./FormEvent.css";
import SubmitBtn from "./SubmitBtn";
import { TextInput, Box, Grommet, Form, TextArea, Text } from "grommet";

const customTheme = {
  global: {
    colors: {
      border: {
        light: '#cccccc', // Light theme color for border
        dark: '#ffffff',  // Dark theme color for border
      },
    },
    focus: {
      border: {
        color: 'border', // dynamic border color based on the theme
      },
    },
  },
};

export default function FormEvent() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [group, setGroup] = useState(2);

  function getTextInput(stateName, setState, placeholder) {
    // return a text input that is "connected" to a state passed as a parameter
    return (
      <Box margin={{ top: "20px" }} align="center">
        <TextInput
          type="text"
          value={stateName}
          onChange={(e) => setState(e.target.value)}
          placeholder={placeholder}
          required
          className="text-input"
          width="medium"
       />
      </Box>
    );
  }

  return (
    <Grommet theme={customTheme}>
      <Box
        pad="large"
        align="center"
        border={{ size: "small" }}
        round="large"
      >
        <Text size="large">Create Event</Text>
        <Form>
          <Box margin={{ top: "20px" }} align="center">
            <Text>Event Name</Text>
            {getTextInput(name, setName, "Enter event name")}
          </Box>

          <Box margin={{ top: "20px" }} align="center">
            <Text>Description</Text>
            <Box margin={{ top: "20px" }}>
              <TextArea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter event description"
                required
                className="description-textarea"
                style={{ width: "500px", borderWidth: '1px' }}  
              />
            </Box>
          </Box>
          <Box margin={{ top: "20px" }} align="center">
            <Text>Date</Text>
            <Box margin={{ top: "20px" }}>
              <TextInput
                type="datetime-local"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
                className="date-input"
                style={{ borderWidth: '1px' }}
              />
            </Box>
          </Box>

          <Box margin={{ top: "20px" }} align="center">
            <Text>Location</Text>
            {getTextInput(location, setLocation, "Enter event location")}
          </Box>

          <Box margin={{ top: "20px" }} align="center">
            <Text>Group Size</Text>
            <Box margin={{ top: "20px" }}>
              <TextInput
                type="number"
                value={group}
                onChange={(e) => setGroup(e.target.value)}
                required
                min="2" // group size should be at least 1 --> doesn't make sense to have a group of 1
                className="number-input"
                style={{ borderWidth: '1px' }}
              />
            </Box>
          </Box>

          <Box margin={{ top: "20px" }} align="center">
            <SubmitBtn text="Create Event" />
          </Box>
        </Form>
      </Box>
    </Grommet>
  );
}
