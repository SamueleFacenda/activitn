import { EventsList, FormFileter, NotLoggedIn } from "../components";

import { PageContent, PageHeader, Box } from "grommet";
import {useState} from "react";

import { useAuth } from "../hooks/Auth";

/**
 * SearchEvent component that represents the search event page. 
 * First there is a form to filter the events and then the events are displayed
 * @returns {JSX.Element} - SearchEvent component
 */

function SearchEvent() {
  const {state} = useAuth();
  const [tag, setTag] = useState("");
  const [dateStart, setDateStart] = useState("");
  const [dateEnd, setDateEnd] = useState("");
  const [showFormFilter, setShowFormFilter] = useState(true);

  const userId = state.userId;

  if (!userId) {
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
          <FormFileter 
            tag={tag}
            setTag={setTag}
            dateStart={dateStart}
            setDateStart={setDateStart}
            dateEnd={dateEnd}
            setDateEnd={setDateEnd}
            setShowFormFilter={setShowFormFilter}
          />
        </Box>
      </PageContent>
    );
  } else {
    return (
      <PageContent>
        <PageHeader title="Events" />
        <EventsList tag={tag} dateStart={dateStart} dateEnd={dateEnd} />
      </PageContent>
    )
  }
}

export { SearchEvent };
