import { Heading, PageContent, PageHeader, Button, Box } from "grommet";

import { useAuth } from "../hooks/Auth";

import {
  RoutedButton,
  ViewButton,
  EventGridPagination,
  IsPendingSection,
  ShowErrorSection,
  ButtonModal,
  ShowTutorial,
  ChatButton,
  NotLoggedIn,
} from "../components";

import {
  useGetUsersByIdSubscriptions, // all the events where the user is subscribed and is active
  useGetUsersByIdEvents, // all the events organized by the user
  useDeleteEventsByEventIdByUserId, // remove a user from an event
  useDeleteEventsById, // delete an event
} from "../api/queries";

import { useQueryClient } from "@tanstack/react-query";
import { UseGetEventsKeyFn } from "../api/queries";
import { Edit, Redo } from "grommet-icons";
import { useEffect, useState } from "react";

/**
 * Component that shows the events that the user has subscribed to. For each event pass the
 * ViewButton and LeaveButton components as buttons
 * @param {boolean} isAuthenticated - is the user authenticated
 * @param {string} idUser - user id
 * @returns {JSX.Element} - SubscribedEvents component
 */
function SubscribedEvents(isAuthenticated, idUser) {
  const [events, setEvents] = useState(null);
  const { data, isPending, isError, error } = useGetUsersByIdSubscriptions(
    { id: idUser },
    undefined,
    {
      enabled: isAuthenticated,
    }
  );

  const queryClient = useQueryClient();
  const { mutate: leaveEvent } = useDeleteEventsByEventIdByUserId(undefined, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: UseGetEventsKeyFn() });
    },
    onError: (error) => {
      console.log("Error deleting user in a event: ", error);
    },
  });

  useEffect(() => {
    if (!isPending && data) {
      setEvents(data);
    }
  }, [data, isPending]);

  if (isPending || isError) {
    // show the loading or error message
    return isError ? ShowErrorSection(error.message) : IsPendingSection();
  }

  if (events === null) {
    // for testing
    return <Heading level="2">No events subscribed</Heading>;
  }

  const handleLeaveEvent = (event) => {
    leaveEvent({ eventId: event._id, userId: idUser });
    // remove the event from the list
    const newEvents = events.filter((e) => e._id !== event._id);
    setEvents(newEvents);
  };

  const LeaveButton = ({ event }) => {
    return (
      <Button
        icon={<Redo />}
        // label="Leave"
        onClick={() => handleLeaveEvent(event)}
        primary
        // style={{backgroundColor: "#4CAF50"}}
      />
    );
  };

  return (
    <EventGridPagination
      events={events}
      buttons={[ViewButton, LeaveButton, ChatButton]}
    />
  );
}

/**
 * Component that shows the events that the user has created. For each event pass the
 * EditButton, DeleteButton and ViewButton components as buttons
 * @param {boolean} isAuthenticated - is the user authenticated
 * @param {string} idUser - user id
 * @returns {JSX.Element} - CreatedEvents component
 */
function CreatedEvents(isAuthenticated, idUser) {
  const [events, setEvents] = useState(null);
  const { data, isPending, isError, error } = useGetUsersByIdEvents(
    { id: idUser },
    undefined,
    {
      enabled: isAuthenticated,
    }
  );

  const queryClient = useQueryClient();
  const { mutate: deleteEvent } = useDeleteEventsById(undefined, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: UseGetEventsKeyFn() });
    },
    onError: (error) => {
      console.log("Error deleting event: ", error);
    },
  });

  useEffect(() => {
    if (!isPending && data) {
      setEvents(data);
    }
  }, [data, isPending]);

  if (isPending || isError) {
    // show the loading or error message
    return isError ? ShowErrorSection(error.message) : IsPendingSection();
  }

  if (events === null) {
    // for testing
    return <Heading level="2">No events created</Heading>;
  }

  const handleDelete = (event) => {
    const id = event._id;
    console.log("DELETE event with id: ", id);

    // delete in events the event with the id
    const newEvents = events.filter((e) => e._id !== id);
    setEvents(newEvents);

    deleteEvent({ id: id }); // Directly passing the ID
  };

  function DeleteButton({ event }) {
    return (
      <ButtonModal
        typeAction="DELETE_EVENT"
        event={event}
        methodApply={() => handleDelete(event)}
      />
    );
  }

  const EditButton = ({ event }) => {
    const path = `/modify-event/${event._id}`;
    return (
      <RoutedButton
        icon={<Edit />}
        // label="Edit"
        path={path}
        // style={{backgroundColor: "#FFA500"}}
        primary
      />
    );
  };

  // view event
  return (
    <EventGridPagination
      events={events}
      buttons={[EditButton, DeleteButton, ViewButton, ChatButton]}
    />
  );
}

/**
 * Component for the MyEvents page that shows the events that the user is subscribed to and the events that the user has created
 * A user can view, leave, edit or delete events by clicking on the respective buttons
 * @returns {JSX.Element} - MyEvents component
 */
const MyEvents = () => {
  const { state } = useAuth();
  const { isAuthenticated } = state;
  const userId = state.userId;

  if (!userId) {
    return (
      <NotLoggedIn />
    );
  }

  return (
    <PageContent>
      <PageHeader title="My Events" />
      <ShowTutorial
        tutorial={
          "Qui abbiamo la sezione degli eventi, dove si puo' vedere (Bottone simbolo 👁️) eventi, si puo' disiscriversi dagli eventi (Bottone simobolo ❌) a cui si e' iscritti, chattare (Bottone simbolo 💬) con gli utenti iscritti all'evento e infine, si puo' cancellare (Bottone simbolo 🗑️) o modificare (Bottone simbolo ✏️) gli eventi creati."
        }
      />
      <Box pad="medium" gap="medium">
        <Heading level="2">Subscribed Events</Heading>
        {SubscribedEvents(isAuthenticated, userId)}
        <Heading level="2">Created Events</Heading>
        {CreatedEvents(isAuthenticated, userId)}
      </Box>
    </PageContent>
  );
};

export { MyEvents };
