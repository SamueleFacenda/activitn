import { 
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Grid,
    Heading,
    PageContent, 
    PageHeader, 
    Paragraph,
    ResponsiveContext,
  } from 'grommet';

import React, { useContext } from 'react';

function CardTemplate({ title }) {
    const size = useContext(ResponsiveContext);
    return (
      <Card>
        <CardHeader pad="medium">
          <Heading level={2} margin="none">
            {title}
          </Heading>
        </CardHeader>
        <CardBody pad="medium">
          <Paragraph maxLines={size === "small" ? 3 : undefined}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            porttitor non nulla ac vehicula. Aliquam erat volutpat. Mauris auctor
            faucibus est at mattis. Aliquam a enim ac nisi aliquam consectetur et
            ac velit. Mauris ut imperdiet libero.
          </Paragraph>
        </CardBody>
        <CardFooter pad="medium" background="background-contrast">
          Footer
        </CardFooter>
      </Card>
    );
  };


const Home = () => (
    <PageContent>       
        <PageHeader title="Welcome to Grommet!" />
        <Grid columns="medium" gap="large" pad={{ bottom: "large" }}>
            <CardTemplate title={"Card 1"} />
            <CardTemplate title={"Card 2"} />
            <CardTemplate title={"Card 3"} />
        </Grid>
    </PageContent>
)

export { Home }