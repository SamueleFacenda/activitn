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
  UseGetEventsKeyFn,
} from "../api/queries";
import { useQueryClient } from "@tanstack/react-query";

import { SelectionTag } from "./SelectionTag";
import { NotLoggedIn } from "./NotLoggedIn";

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
  const [value, setValue] = useState(event || {
    name: "",
    description: "",
    date: "",
    location: "",
    group: "",
    tag: "",
  });

  if (value.date) { // if the date exists, format it
    value.date = formatDateForInput(value.date);
  }
  const { state: authState } = useAuth();

  const queryClient = useQueryClient();
  const { mutate: createEvent } = usePostEvents(undefined, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: UseGetEventsKeyFn() });
      alert("Evento creato con successo");
    },
  });

  const { mutate: editEvent } = usePatchEventsById(undefined, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: UseGetEventsKeyFn() });
      alert("Evento modificato con successo"); 
    },
  });

  const isCreate = !event;

  if (!authState.isAuthenticated) {
    return (
      <NotLoggedIn />
    )
  }

  const handleSubmit = (value) => {
    // tag should be selected
    if (!value.tag) {
      alert("Inserisci la tipologia dell'evento");
      return;
    }

    // the date should be in the future
    const date = new Date(value.date);
    if (date < new Date()) {
      alert("La data dell'evento deve essere nel futuro");
      return;
    }

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
      <Heading level="2"> {isCreate ? "Crea Evento" : "Modifica Evento"} </Heading>
      <Form
        value={value}
        onChange={(nextValue) => setValue(nextValue)}
        onReset={() => setValue({})}
        onSubmit={({ value }) => handleSubmit(value)}
      >
        <FormField label="Nome Evento" htmlFor="name">
          <TextInput
            id="name"
            name="name"
            placeholder="Inserisci il nome dell'evento"
            required
          />
        </FormField>

        <FormField label="Descrizione" htmlFor="desc">
          <TextArea
            id="desc"
            name="description"
            placeholder="Inserisci la descrizione dell'evento"
            required
            resize="vertical"
          />
        </FormField>
        <FormField label="Data" htmlFor="date">
          <TextInput
            id="date"
            name="date"
            type="datetime-local"
            required
          />
        </FormField>

        <FormField label="Luogo" htmlFor="loc">
          <TextInput
            id="loc"
            name="location"
            placeholder="Inserisci il luogo dell'evento"
            required
          />
        </FormField>

        <SelectionTag name="tag" />

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
