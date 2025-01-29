import { Card, CardHeader, CardBody, Spinner } from 'grommet';

export const EventCard = ({ event, isLoading }) => {
    if (isLoading) {
        return (
            <Card background="light-1" margin="small" elevation="medium" round="small" pad="small">
                <CardHeader>
                    <Spinner />
                </CardHeader>
                <CardBody>
                    Loading...
                </CardBody>
            </Card>);
    }

    return (
        <Card background="light-1" margin="small" elevation="medium" round="small" pad="small">
            <CardHeader>
                {event.title}
            </CardHeader>
            <CardBody>
                {event.description}
            </CardBody>
        </Card>
    );
}