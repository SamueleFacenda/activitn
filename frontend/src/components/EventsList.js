import React, {} from "react";
import { useGetEvents } from "../api/queries";
import { useAuth } from "../hooks/Auth";

import { EventCard } from "./EventCard";
import { Box, InfiniteScroll } from 'grommet';

export function EventsList() {
    const { state } = useAuth();
    const { accessToken } = state;
    const { isAuthenticated } = state;

    const { data, isPending, isError, error } = useGetEvents(undefined, undefined,{
        enabled: isAuthenticated,
    });

    const events = isPending ? [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] : data;
    console.log(isPending, accessToken)

    return (
        <Box>
            <InfiniteScroll items={events} step={10}>
                {(event) => (
                    <EventCard key={event._id || event} event={event} isLoading={isPending} />
                )}
            </InfiniteScroll>
        </Box>
    );
}