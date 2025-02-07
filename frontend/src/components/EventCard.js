import {
  Card,
  CardHeader,
  CardBody,
  Spinner,
  Heading,
  Text,
  Box,
} from "grommet";
import styled from "styled-components";

import { Location, Calendar, Notes, Tag } from "grommet-icons";

// maybe replace the icons with: ✍️👥📍📅
const StyledCard = styled(Card)`
  width: max-content;
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.1);
  }
`;

// function to convert the date to the European format
function convertToEuropeanFormat(dateString) {
  const date = new Date(dateString);

  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();

  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');

  return `${day}-${month}-${year} - ${hours}:${minutes}`;
}

/**
 * EventCard component that represents a card for an event
 * @param {props} param0 - event, isLoading, buttons
 * @param {Object} event - event
 * @param {boolean} isLoading - loading state
 * @param {Array} buttons - array of buttons (The buttons has onClick method that receives the event as parameter)
 * @returns {JSX.Element} - EventCard component
 */
export const EventCard = ({ event, isLoading, buttons }) => {
  if (isLoading) {
    return (
      <Card
        background="light-1"
        margin="small"
        elevation="medium"
        round="small"
        pad="small"
      >
        <CardHeader>
          <Spinner />
        </CardHeader>
        <CardBody>Loading...</CardBody>
      </Card>
    );
  }

  const MAX_DESCRIPTION_LENGTH = 50;
  const truncateDescription = (description) => {
    if (description.length > MAX_DESCRIPTION_LENGTH) {
      return `${description.substring(0, MAX_DESCRIPTION_LENGTH)}...`;
    }
    return description;
  };

  return (
    <StyledCard
      background="background-contrast"
      margin="small"
      elevation="small"
      round="small"
      pad="medium"
      // width="min-content"
    >
      <CardHeader>
        <Heading level="3" margin="none">
          {event.name}
        </Heading>
      </CardHeader>
      <CardBody>
        <Text size="small">
          <Calendar /> <strong>Data:</strong>{" "}
          {convertToEuropeanFormat(event.date)}
        </Text>
        <Text size="small">
          <Location color="red" /> {event.location}
        </Text>
        {/* <Text size="small">
          <Group color="blue" /> {event.group} partecipanti
        </Text> */}
        <Text size="small">
          <Tag /> {event.tag}
        </Text>
        <Text size="small" margin={{ top: "small" }}>
          <Notes />
          <strong>Descrizione:</strong> {truncateDescription(event.description)}
        </Text>
        <Box direction="row" gap="small" margin={{ top: "small" }} wrap={true}>
          {
            /* array of buttons */
            buttons.map((Btn, index) => (
              <Btn key={index} event={event} />
            ))
          }
        </Box>
      </CardBody>
    </StyledCard>
  );
};
