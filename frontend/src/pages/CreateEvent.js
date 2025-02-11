import { FormEvent } from "../components";

import {
  PageContent,
  PageHeader,
} from "grommet";

/**
 * CreateEvent component that represents the create event page
 * @returns {JSX.Element} - CreateEvent component
 */
export function CreateEvent() {
  return (
    <PageContent>
      <PageHeader title="Create event" />
      <FormEvent />
    </PageContent>
  );
}
