import React, { useState } from "react";
import { useGetEvents } from "../api/queries";
import { useAuth } from "../hooks/Auth";

import { EventGrid } from "./EventGrid";
import { Box, InfiniteScroll, Grid, Pagination } from "grommet";

export function EventsList() {
  const { state } = useAuth();
  const { accessToken } = state;
  const { isAuthenticated } = state;

  const { data, isPending, isError, error } = useGetEvents(
    undefined,
    undefined,
    {
      enabled: isAuthenticated,
    }
  );

  // const events = isPending ? [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] : data;
	const events = [
		{
			"id": "1",
			"name": "Scout",
			"description": "Scout teach you how to survive in the wild",
			"date": "2021-10-10T10:00:00.000Z",
			"location": "Trento",
			"group": "11/20", // is 11/20 a valid value?
		},
		{
			"id": "2",
			"name": "Hiking",
			"description": "Hiking in the mountains",
			"date": "2021-10-12T10:00:00.000Z",
			"location": "Trento",
			"group": "11/20",
		},
		{
			"id": "3",
			"name": "Climbing",
			"description": "Climbing the mountain",
			"date": "2021-10-14T10:00:00.000Z",
			"location": "Trento",
			"group": "11/20",
		},
		{
			"id": "4",
			"name": "Skiing",
			"description": "Skiing in the mountains",
			"date": "2021-10-16T10:00:00.000Z",
			"location": "Trento",
			"group": "11/20",
		},
		{
			id: "5",
			name: "Scout",
			description: "Scout teach you how to survive in the wild",
			date: "2021-10-10T10:00:00.000Z",
			location: "Trento",
			group: "11/20",
		},
		{
			id: "6",
			name: "Hiking",
			description: "Hiking in the mountains",
			date: "2021-10-12T10:00:00.000Z",
			location: "Trento",
			group: "11/20",
		},
		{
			id: "7",
			name: "Climbing",
			description: "Climbing the mountain",
			date: "2021-10-14T10:00:00.000Z",
			location: "Trento",
			group: "11/20",
		},
		{
			id: "8",
			name: "Skiing",
			description: "Skiing in the mountains",
			date: "2021-10-16T10:00:00.000Z",
			location: "Trento",
			group: "11/20",
		},
		{
			id: "9",
			name: "Scout",
			description: "Scout teach you how to survive in the wild",
			date: "2021-10-10T10:00:00.000Z",
			location: "Trento",
			group: "11/20",
		},
		{
			id: "10",
			name: "Scout",
			description: "Scout teach you how to survive in the wild... To be continue in the next episode, see you next time",
			date: "2021-10-10T10:00:00.000Z",
			location: "Trento",
			group: "11/20",
		},
		
	]
  console.log(isPending, accessToken);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // number of events per page

  // get the events of the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentEvents = events.slice(startIndex, endIndex);

  const handlePageChange = (event) => {
    setCurrentPage(event.page);
  };

  return (
		<>
			<EventGrid events={currentEvents} />
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
