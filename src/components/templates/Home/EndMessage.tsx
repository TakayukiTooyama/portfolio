import { Box, Text } from '@chakra-ui/react';
import { ButtonToTop, DarkModeBox } from 'components/atoms';
import React, { VFC } from 'react';

const EndMessage: VFC = () => (
  <>
    <DarkModeBox align="center">
      <Box
        h={['100px', '200px', '300px']}
        lineHeight={['100px', '200px', '300px']}
      >
        <Text fontSize={['2xl', '3xl', '4xl']}>Thank you for comming!</Text>
      </Box>
      <ButtonToTop />
      <Box pb={24} />
    </DarkModeBox>
  </>
);

export default EndMessage;
