import { Box, Heading, Text, TextArea, Spinner } from "grommet";
import { useGetEventsById } from "../api/queries";
import { useParams } from "react-router-dom"; // used to show the event with the id in the url
import { useAuth } from "../hooks/Auth";
import { NameUserID } from "../components/NameUserID";
import { ListUsers } from "../components/ListUsers";
import { ShowErrorSection, IsPendingSection } from "../components";

// function format date
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
 * EventDescription component that represents the description of an event
 * It get the id of the event from the url and shows the event with that id
 * @returns {JSX.Element} - EventDescription component
 */
const EventDescription = () => {
  const { state: authState } = useAuth();
  const { isAuthenticated } = authState;
  const { id } = useParams();

  const { data, isPending, isError, error } = useGetEventsById(
    { id: id },
    undefined,
    {
      enabled: isAuthenticated,
    }
  );

  if (isPending || isError) {
    return isError ? ShowErrorSection(error.message) : IsPendingSection();
  }

  const event = data;
  // const longDescription = "a".repeat(1000);
  // event.description = longDescription;
  return (
    <Box
      pad="medium"
      gap="medium"
      background="background-contrast"
      round="small"
      elevation="small"
      width="80%"
      margin="50px auto"
    >
      <Heading level="1" textAlign="center" color="brand">
        {event.name}
      </Heading>

      <EventDetail label="Data:" TextComp={() => <Text>{convertToEuropeanFormat(event.date)}</Text>} />
      <EventDetail label="Luogo:" TextComp={() => <Text>{event.location}</Text>} />
      <EventDetail label="Organizzatore:" TextComp={() => <NameUserID id={event.organizer} />} />

      <EventDetail 
        label="Descrizione:" 
        TextComp={() => (
          <TextArea
            value={event.description}
            readOnly
            resize={false}
            style={{border: "none"}}
          />
        )}
      />

      <Box margin={{ top: "medium" }}>
        <ListUsers listUser={event.attendees} />
      </Box>
    </Box>
  );
};

const EventDetail = ({ label, TextComp }) => (
  <Box direction="row" align="center" gap="small" margin={{ bottom: "small" }}>
    <Heading level="3" margin="none">
      {label}
    </Heading>
    <TextComp />
  </Box>
);

export { EventDescription };
