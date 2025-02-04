import React, { useState } from "react";
import {
  Button,
  Box,
  Form,
  FormField,
  Heading,
  TextArea,
  TextInput,
} from "grommet";

import { useAuth } from "../hooks/Auth";

import {
  usePostEvents,
  usePatchEventsById,
} from "../api/queries";
import { useQueryClient } from "@tanstack/react-query";
import { UseGetEventsKeyFn } from "../api/queries";

import { SelectionTag } from "./SelectionTag";

// function to format the date for the input
const formatDateForInput = (isoString) => {
  return isoString.slice(0, 16); // Truncate to get only "YYYY-MM-DDTHH:MM"
};

/**
 * FormEvent component that represents the form to create or edit an event
 * If the event is not passed, it creates a new event otherwise it edits the event
 * @param {props} param0 - event
 * @param {object} event - event object
 * @returns {JSX.Element} - FormEvent component
 */
export function FormEvent({ event }) {
  const [name, setName] = useState(event ? event.name : "");
  const [description, setDescription] = useState(event ? event.description : "");
  const [date, setDate] = useState(event ? formatDateForInput(event.date) : "");
  const [location, setLocation] = useState(event ? event.location : "");
  const [group, setGroup] = useState(event ? event.group : "");
  const [tag, setTag] = useState(event ? event.tag : "");

  const handleTagChange = (tag) => {
    setTag(tag); // Set the selected tag from the dropdown
  };

  const { state } = useAuth();

  const queryClient = useQueryClient();
  const { mutate: createEvent } = usePostEvents(undefined, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: UseGetEventsKeyFn() });
      alert("Event created successfully");
    },
  });

  const { mutate: editEvent } = usePatchEventsById(undefined, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: UseGetEventsKeyFn() });
      alert("Event edited successfully"); 
    },
  });

  const isCreate = !event;

  if (!state.userId) {
    return (
      <h2>Not logged in</h2>
    )
  }
  
  const getBody = () => {
    return {
      "name": name,
      "description": description,
      "date": date,
      "location": location,
      "group": group,
      "tag": tag,
    }
  }

  const handleSubmit = () => {
    const value = getBody();
    if (isCreate) {
      createEvent({ body: value });
    } else {
      editEvent({ id: event._id, body: value });
    }
  };

  return (
    <Box
      pad="small"
      margin="medium"
      align="center"
      border={{ size: "xsmall" }}
      round="large"
      elevation="large"
      flex="grow"
      background="background-contrast"
      height="max-content"
    >
      <Heading level="2"> {isCreate ? "Create Event" : "Edit Event"} </Heading>
      <Form
        onSubmit={() => handleSubmit()}
      >
        <FormField label="Event Name" htmlFor="name">
          <TextInput
            id="name"
            name="name"
            placeholder="Enter event name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormField>

        <FormField label="Description" htmlFor="desc">
          <TextArea
            id="desc"
            name="description"
            placeholder="Enter event description"
            required
            resize="vertical"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </FormField>
        <FormField label="Date" htmlFor="date">
          <TextInput
            id="date"
            name="date"
            type="datetime-local"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </FormField>

        <FormField label="Location" htmlFor="loc">
          <TextInput
            id="loc"
            name="location"
            placeholder="Enter event location"
            required
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </FormField>

        <SelectionTag value={tag} onChange={handleTagChange} />

        {/* <FormField label="Group Size" htmlFor="size">
          <TextInput
            id="size"
            name="group" // TODO add size to backend
            type="number"
            required
            min="2" // group size should be at least 1 --> doesn't make sense to have a group of 1
            placeholder="Enter group size (at least 2)"
            value={group}
            onChange={(e) => setGroup(e.target.value)}
          />
        </FormField> */}
        <Box>
          <Button
            type="submit"
            primary
            label={isCreate ? "Create Event" : "Edit Event"}
          />
        </Box>
      </Form>
    </Box>
  );
}
