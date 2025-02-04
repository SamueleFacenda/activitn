import {
    PageContent, 
    PageHeader, 
  } from 'grommet';


import { EventsList, FormEvent } from '../components';

const event = {
    name: "Event",
    description: "Description",
    date: "Date",
    location: "Location",
    group: "Group"
}

const Events = () => (
    <PageContent flex="grow">       
        <PageHeader title="Events"/>
        {/* <FormEvent/> */}
        {/* <EventsList/> */}
        {/* <EventDescription event={event}/> */}
    </PageContent>
)

export { Events }