import { Card, CardHeader, CardBody, Spinner, Heading, Text, Icon, Grommet } from "grommet";
import styled from "styled-components";

import {
  Group,
  Location,
  Calendar,
  Notes,
} from "grommet-icons";

// maybe replace the icons with: ✍️👥📍📅

const StyledCard = styled(Card)`
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.2);
  }
`;

export const EventCard = ({ event, isLoading }) => {
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

  const onClick = (id) => {
    // TODO: Navigate to event page
    console.log("Clicked");
  };

  return (
    <StyledCard
      background="background-contrast"
      margin="small"
      elevation="small"
      round="small"
      pad="medium"
      width="medium"
      onClick={() => onClick()}
    >
      <CardHeader>
          <Heading level="3" margin="none">
            {event.name}
          </Heading>
        </CardHeader>
        <CardBody>
          <Text size="small">
            <Calendar /> <strong>Data:</strong> {new Date(event.date).toISOString()}
          </Text>
          <Text size="small"> <Location color="red"/> {event.location}</Text>
          <Text size="small"><Group color="blue" /> {event.group} partecipanti</Text>
          <Text size="small" margin={{ top: "small" }}>
            <Notes />
            <strong>Descrizione:</strong> {truncateDescription(event.description)}
          </Text>
        </CardBody>
      
    </StyledCard>
  );
};
