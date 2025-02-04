import { FormEvent, IsPendingSection, ShowErrorSection } from "../components";

import { PageHeader, PageContent } from "grommet";

import {
  useGetEventsById,
} from "../api/queries";

import { useParams } from 'react-router-dom'; // used to show the event with the id in the url

import { useAuth } from "../hooks/Auth";

/**
 * ModifyEvent component that represents the modify event page
 * It get the id of the event from the url and shows the event with that id
 * @returns {JSX.Element} - ModifyEvent component
 */
const ModifyEvent = () => {
  const {state} = useAuth();
  const { isAuthenticated } = state;
  
  const { id } = useParams();  

  const { data, isPending, isError, error } = useGetEventsById(
    {id: id},
    undefined,
    {
      enabled: isAuthenticated,
    }
  );

  let event = isPending ? [] : data;

  if (isPending || isError) {
    return isError ? ShowErrorSection(error.message) : IsPendingSection();
  }
  
  return (
    <PageContent>
      <PageHeader title="Modify event" />
      <FormEvent event={event} />
    </PageContent>
  );
}

export { ModifyEvent };
