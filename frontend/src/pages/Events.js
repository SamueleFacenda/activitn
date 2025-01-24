import {
    PageContent, 
    PageHeader, 
  } from 'grommet';


import FormEvent from '../components/FormEvent';

const Events = () => (
    <PageContent>       
        <PageHeader title="Events"/>
        <FormEvent theme={false}/>
    </PageContent>
)

export { Events }