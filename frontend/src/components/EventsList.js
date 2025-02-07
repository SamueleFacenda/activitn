import { useGetEvents, usePostEventsByEventIdByUserId } from "../api/queries";
import { useAuth } from "../hooks/Auth";

import { Box, Button } from "grommet";

import { UserAdd } from "grommet-icons";

import { ViewButton } from "./ViewButton";

import { useQueryClient } from "@tanstack/react-query";
import { UseGetEventsKeyFn } from "../api/queries";

import { EventGridPagination } from "./EventGridPagination";

// FIX: BUG date is > today
import { IsPendingSection, ShowErrorSection } from "../components";

/**
 * Function that filter the events by the idUser, tag (topic), startTime and endTime of the events
 * @param {Array} events - array of events
 * @param {string} idUser - id of the user
 * @param {string} startTime - start time of the event (is always defined and >= now)
 * @param {string} endTime - end time of the event (can be undefined)
 * @param {string} tag - tag of the event (can be "" / undefined)
 * @returns the filtered events
 */
function filterEvents(events, idUser, startTime, endTime, tag) {
  const filteredEvents = [];
  for (let i = 0; i < events.length; ++i) {
    if (
      events[i].organizer === idUser ||
      events[i].attendees.includes(idUser)
    ) {
      // user is already in the event
      // console.log("User is already in the event");
      continue;
    }

    if (tag !== "" && events[i].tag !== tag) {
      // tag exists and doesn't match
      // console.log("Tag exists and doesn't match");
      continue;
    }

    // console.log(startTime, events[i].date);
    if (startTime > events[i].date) {
      // console.log("Too early");
      // too early
      continue;
    }
    // console.log(endTime)
    if (endTime !== "" && endTime < events[i].date) {
      // too late
      // console.log("Too late");
      continue;
    }

    filteredEvents.push(events[i]); // good candidate
  }

  return filteredEvents;
}

export function EventsList({ tag, dateStart, dateEnd }) {
  const { state } = useAuth();
  const idUser = state.userId;
  const { isAuthenticated } = state;

  const { data, isPending, isError, error } = useGetEvents(
    undefined,
    undefined,
    {
      enabled: isAuthenticated,
    }
  );

  const queryClient = useQueryClient();
  const { mutate: joinEvent } = usePostEventsByEventIdByUserId(undefined, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: UseGetEventsKeyFn() });
    },
  });

  const handleJoinEvent = (event) => {
    alert("Joining event: " + event.name);
    joinEvent({ eventId: event._id, userId: idUser });
  };

  const JoinButton = ({ event }) => {
    return (
      <Button
        label="Join"
        icon={<UserAdd />}
        primary
        onClick={() => {
          handleJoinEvent(event);
        }}
      />
    );
  };

  let events = isPending ? [] : data;

  if (isPending || isError) {
    return isError ? <ShowErrorSection error={error} /> : <IsPendingSection />;
  }

  events = filterEvents(events, idUser, dateStart, dateEnd, tag);

  // console.log(events.length)
  if (events.length === 0) {
    return (
      <Box align="center">
        <h2>Non ci sono eventi disponibili</h2>
      </Box>
    );
  }

  return (
    <EventGridPagination events={events} buttons={[ViewButton, JoinButton]} />
  );
}
