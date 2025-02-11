import { EventsList, FormFilter, NotLoggedIn } from "../components";

import { PageContent, PageHeader, Box } from "grommet";
import {useState} from "react";

import { useAuth } from "../hooks/Auth";

/**
 * SearchEvent component that represents the search event page. 
 * First there is a form to filter the events and then the events are displayed
 * @returns {JSX.Element} - SearchEvent component
 */

function SearchEvent() {
  const {state: authState} = useAuth();
  const [value, setValue] = useState({
    tag: "",
    dateStart: "",
    dateEnd: "",
  });
  const [showFormFilter, setShowFormFilter] = useState(true);

  if (!authState.isAuthenticated) {
    return (
      <PageContent>
        <PageHeader title="Search Event 🔍" />
        <NotLoggedIn />
      </PageContent>
    );
  }

  if (showFormFilter) { // don't have a tag setted
    return (
      <PageContent>
        <PageHeader title="Cerca Eventi 🔍" />
        <Box pad="medium" textAlign="center" align="center">
          <FormFilter
            value={value}
            setValue={setValue}
            setShowFormFilter={setShowFormFilter}
          />
        </Box>
      </PageContent>
    );
  } else {
    return (
      <PageContent>
        <PageHeader title="Events" />
        <EventsList tag={value.tag} dateStart={value.dateStart} dateEnd={value.dateEnd} />
      </PageContent>
    )
  }
}

export { SearchEvent };
