import React, { useState } from "react";
import {
  Box,
  Button,
  Form,
  FormField,
  TextInput,
  Text,
  Heading,
} from "grommet";
import { Checkmark } from "grommet-icons";

import { ShowTutorial } from "./ShowTutorial";
import { SelectionTag } from "./SelectionTag";

// function to get the date by setting seconds and milliseconds to 0
function getDate(date) {
  const d = new Date(date);
  d.setSeconds(0);
  d.setMilliseconds(0);
  return d;
}

// function to check if date1 is before date2
function isBeforeOrEqual(date1, date2) {
  return getDate(date1) <= getDate(date2);
}

/**
 * FormFilter component that represents the form to filter the events
 * @param {props} param0 - tag, setTag, dateStart, setDateStart, dateEnd, setDateEnd, setShowFormFilter
 * @param {string} tag - tag of the event
 * @param {function} setTag - function to set the tag of the event
 * @param {string} dateStart - start date of the event
 * @param {function} setDateStart - function to set the start date of the event
 * @param {string} dateEnd - end date of the event
 * @param {function} setDateEnd - function to set the end date of the event
 * @param {function} setShowFormFilter - function to show the form filter
 * @returns {JSX.Element} - FormFilter component
 */
const FormFileter = ({
  tag,
  setTag,
  dateStart,
  setDateStart,
  dateEnd,
  setDateEnd,
  setShowFormFilter,
}) => {
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (!tag) {
    //   setError("The topic is required");
    //   return;
    // }

    // the dateStart must be >= now
    if (!isBeforeOrEqual(new Date(), dateStart)) {
      setError("La data di inizio deve essere maggiore o uguale adesso");
      return;
    }

    if (dateEnd) {
      // is not None --> must be after or equal to dateStart
      if (!isBeforeOrEqual(dateStart, dateEnd)) {
        setError(
          "La data di fine deve essere maggiore o uguale alla data di inizio"
        );
        return;
      }
    }

    setError("");
    setShowFormFilter(false); // can show the events and hide the form
  };

  const handleTagChange = (tag) => {
    setTag(tag); // Set the selected tag from the dropdown
  };

  return (
    <>
      <Box
        width="medium"
        pad="medium"
        background="background-contrast"
        round="small"
        elevation="medium"
      >
        <Heading level={2} textAlign="center" margin="none">
          Filtra Eventi
        </Heading>

        <Form onSubmit={handleSubmit}>
          <SelectionTag value={tag} onChange={handleTagChange} />

          <FormField label="Start time" htmlFor="startTime">
            <TextInput
              type="datetime-local"
              value={dateStart}
              onChange={(e) => setDateStart(e.target.value)}
              required
            />
          </FormField>

          <FormField label="End time" htmlFor="endTime">
            <TextInput
              type="datetime-local"
              value={dateEnd}
              onChange={(e) => setDateEnd(e.target.value)}
            />
          </FormField>

          {error && (
            <Text
              color="status-critical"
              size="small"
              margin={{ top: "small" }}
            >
              {error}
            </Text>
          )}

          <Box
            direction="row"
            gap="medium"
            justify="center"
            margin={{ top: "medium" }}
          >
            <Button primary label="Invia" type="submit" icon={<Checkmark />} />
          </Box>
        </Form>
        <Box margin={{ top: "medium" }}>
          <ShowTutorial
            tutorial={
              "Il Topic e la Data di Fine non sono obbligatori da inserire. La data di inizio invece va inserito, di default e' messa ad adesso. Finito di inserire i dati, restituisce gli eventi disponibili in base ai filtri inseriti. La data di inizio deve essere da adesso in poi"
            }
          />
        </Box>
      </Box>
    </>
  );
};

export { FormFileter };
