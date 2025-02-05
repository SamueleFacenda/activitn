import {
  Box,
  Text,
} from 'grommet';

import styled from 'styled-components';

import { NameUserID } from './NameUserID';

const StyledBox = styled(Box)`
  min-height: 100px; /* Altezza minima */
  transition: all 0.3s ease;
  overflow-wrap: break-word; /* Aggiunto per forzare il ritorno a capo */
  word-wrap: break-word; /* Aggiunto per compatibilità con più browser */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 10px;

  &:hover {
    transform: scale(1.1);
  }
`;

// function to convert the date to the European format
function convertToEuropeanFormat(dateString) {
  const date = new Date(dateString);

  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();

  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');

  return `${day}-${month}-${year} - ${hours}:${minutes}`;
}

const Message = ({ message }) => {
  const { messageContent, userName, date, isUserMessage } = message;
  console.log("MESSAGE: ", message);
  return (
    <StyledBox
      direction="row"
      align="start"
      pad="small"
      background={isUserMessage ? 'lightgreen' : 'lightgrey'} // TODO: to be changed for light & dark theme
      round="small"
      margin={{ bottom: 'small' }}
    >
      <Box direction="column" margin={{ left: 'small' }} width="100%">
        {/* Section with the user data */}
        <Box direction="row" justify="between">
          {/* <Text weight="bold">{userName}</Text> */}
          <NameUserID id={userName} />
          <Text size="xsmall" color="dark-6">{convertToEuropeanFormat(date)}</Text> 
        </Box>

        {/* Messaggio che va a capo se necessario */}
        <Text margin={{ top: 'small' }}>{messageContent}</Text>
      </Box>
    </StyledBox>
  );
};

export { Message };