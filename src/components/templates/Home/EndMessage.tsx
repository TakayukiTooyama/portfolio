import { Box, Text } from '@chakra-ui/react';
import { ButtonToTop, DarkModeBox } from 'components/atoms';
import React, { VFC } from 'react';

const EndMessage: VFC = () => (
  <DarkModeBox>
    <Box pb={12} align="center">
      <Box pb={16} pt={24}>
        <Text
          fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
          fontFamily={`'Capriola',"Helvetica Neue"`}
        >
          Thank you for coming
        </Text>
      </Box>
      <ButtonToTop />
    </Box>
  </DarkModeBox>
);

export default EndMessage;
