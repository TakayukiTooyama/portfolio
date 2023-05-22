import { Box, Text } from '@chakra-ui/react';
import { ButtonToTop, DarkModeBox } from 'components/atoms';
import React, { FC } from 'react';

const EndMessage: FC = () => (
  <DarkModeBox>
    <Box pb={12} display="flex" flexDirection="column"  alignItems='center'>
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
