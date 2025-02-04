import React from 'react';
import { Box, Heading, Text} from 'grommet';
import styled from 'styled-components';


// styled component for the section
const Section = styled(Box)`
  padding: 40px 20px;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
`;

/**
 * Home component that represents the home page
 * @returns {JSX.Element} - Home component
 */
const Home = () => {
  return (
    <Box fill>
      {/* Header Section */}
      <Box align="center" justify="center" pad="large">
        <Heading level={1}>Activitn</Heading>
        <Text size="large" margin="none">
          Una piattaforma per connetterti con persone in Trentino. Crea, partecipa e trova eventi di ogni tipo!
        </Text>
      </Box>

      {/* About Section */}
      <Section >
        <Heading level={3}>Cos'è Activitn?</Heading>
        <Text size="medium" margin="none">
          <strong>Activitn</strong> è una piattaforma pensata per aiutarti a connetterti con persone in Trentino, 
          creando eventi o partecipando a quelli esistenti. Sport, viaggi, giochi da tavolo e molto altro ti aspettano.
          Potrai creare eventi scegliendo un luogo, data, descrizione e tipologia dell'evento tra i tag prefissati (sport, viaggio, volontariato, musica ...),
          cercare eventi in base ai tuoi interessi e tempo libero, partecipare a eventi organizzati da altri utenti, modificare e cancellare eventi gia' creati.
        </Text>
      </Section>

      {/* Utilizzo del sito Section */}
      <Section>
        <Heading level={3}>Come usare il sito</Heading>
        <Text size="medium">
          Puoi accedere alle varie sezioni cliccando sulla sidebar. In alcune pagine, troverai un bottone "Show tutorial" che ti aiuterà a capire come utilizzare la pagina. 
          Inoltre, in alto a destra c'è un pulsante che consente la modalità scura, migliorando ulteriormente la tua esperienza.
        </Text>
      </Section>

      {/* Footer */}
      <Box pad="small" background="background-contrast" align="center" height="small">
        <Text size="small">Creato da: Samuele Facenda, Yifei Zhang, Thomas Cetto</Text>
      </Box>
    </Box>
  );
};

export { Home };
