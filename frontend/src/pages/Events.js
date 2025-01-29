import {
    PageContent, 
    PageHeader, 
  } from 'grommet';


import { EventsList, FormEvent } from '../components';

const Events = () => (
    <PageContent flex="grow">       
        <PageHeader title="Events"/>
        <FormEvent/>
        <EventsList/>
    </PageContent>
)

export { Events }