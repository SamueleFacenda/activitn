import { Grid } from "grommet";
import { EventCard } from "./EventCard";

/**
 * EventGrid component that renders a grid of events
 * @param {Object[]} events - list of events
 * @param {Object[]} buttons - list of buttons
 * @returns {JSX.Element} - EventGrid component
 */
function EventGrid({ events, buttons }) {
  return (
    <Grid
      columns={{ count: "fit", size: "small" }} // Adatta il numero di colonne allo spazio disponibile
      gap="small"
    >
      {events.map((event) => (
        <EventCard
          key={event._id}
          event={event}
          buttons={buttons}
        />
      ))}
    </Grid>
  );
}

export { EventGrid };
