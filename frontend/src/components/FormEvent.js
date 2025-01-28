import React, { useState } from "react";
import { Button, Box, Form, FormField, Heading, TextArea, TextInput } from "grommet";


export default function FormEvent() {
  const [value, setValue] = useState({});

  return (
    <Box
      pad="small"
      margin="medium"
      align="center"
      border={{ size: "xsmall" }}
      round="large"
      elevation="large"
      flex="grow"
    >
      <Heading level="2">Create Event</Heading>
      <Form
        value={value}
        onChange={nextValue => setValue(nextValue)}
        onReset={() => setValue({})}
        onSubmit={({ value }) => {console.log(value)}}>

        <FormField label="Event Name" htmlFor="name">
          <TextInput
            id="name" name="name"
            placeholder="Enter event name"
            required
          />
        </FormField>

        <FormField label="Description" htmlFor="desc">
          <TextArea
            id="desc" name="desc"
            placeholder="Enter event description"
            required
            resize="vertical"
          />
        </FormField>
        <FormField label="Date" htmlFor="date">
          <TextInput
            id="date" name="date"
            type="datetime-local"
            required
          />
        </FormField>  

        <FormField label="Location" htmlFor="loc">
          <TextInput
            id="loc" name="loc"
            placeholder="Enter event location"
            required
          />
        </FormField>

        <FormField label="Group Size" htmlFor="size">
          <TextInput
            id="size" name="size"
            type="number"
            required
            min="2" // group size should be at least 1 --> doesn't make sense to have a group of 1
          />
        </FormField>

        <Button margin={{ vertical: "medium" }} type="submit" primary label="Create Event" />
      </Form>
    </Box>
  );
}
