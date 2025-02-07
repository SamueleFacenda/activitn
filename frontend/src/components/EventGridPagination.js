import { Box, Pagination } from "grommet";

import { EventGrid } from "./EventGrid";
import { useState } from "react";

/**
 * Component that displays a paginated grid of events. By default, it displays 5 events per page.
 * @param {Array} events - list of events
 * @param {Array} buttons - list of buttons
 * @returns JSX component that displays a paginated grid of events
 */
function EventGridPagination({ events, buttons }) {
  // console.log("BUTTONS ", buttons)
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // number of events per page

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentEvents = events.slice(startIndex, endIndex);

  const handlePageChange = (event) => {
    setCurrentPage(event.page);
  };

  return (
    <>
      <EventGrid events={currentEvents} buttons={buttons} />
      <Box align="center">
        <Pagination
          margin={{ top: "large" }}
          numberItems={events.length}
          step={itemsPerPage}
          onChange={handlePageChange}
          page={currentPage}
        />
      </Box>
    </>
  );
}

export { EventGridPagination };
