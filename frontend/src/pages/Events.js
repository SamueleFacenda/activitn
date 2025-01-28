import {
    PageContent, 
    PageHeader, 
  } from 'grommet';


import FormEvent from '../components/FormEvent';

const Events = () => (
    <PageContent flex="grow">       
        <PageHeader title="Events"/>
        <FormEvent/>
    </PageContent>
)

export { Events }