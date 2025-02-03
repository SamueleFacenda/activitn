import { Select, FormField } from "grommet";

// Predefined tags
const TAGS = [
  "Sport",
  "Creatività",
  "Musica",
  "Studio",
  "Giochi da tavolo",
  "Socializzazione",
  "Volontariato",
  "Viaggio"
];

/**
 * A simple dropdown component for selecting a tag from a list of predefined options.
 * Each option consists of a label and an associated icon.
 * @param {Object} props - The props for the component.
 * @param {Object} props.value - The currently selected tag value.
 * @param {function} props.onChange - Callback function to handle the change in selected tag.
 * 
 * @returns {JSX.Element} A `Select` component from Grommet that allows the user to pick a tag.
 */
const SelectionTag = ({ value, onChange }) => {
  return (
    <FormField label="Topic Event" htmlFor="tag">  
      <Select 
        options={TAGS}
        value={value}
        onChange={({ option }) => onChange(option)} // Updating the value on change
        placeholder="Select a tag..." // Adding a placeholder
      />
    </FormField>
  );
};

export { SelectionTag };
