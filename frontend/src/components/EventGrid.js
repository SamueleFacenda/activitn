import { Grid } from 'grommet';
import { EventCard } from './EventCard';
export function EventGrid({ events }) {
  return (
    <Grid 
      columns={{ count: "fit", size: "small" }} // Adatta il numero di colonne allo spazio disponibile
      gap="small"
    >
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </Grid>
  );
}