import { Box, Text } from '@chakra-ui/react';
import { ButtonToTop, DarkModeBox } from 'components/atoms';
import React, { VFC } from 'react';

const EndMessage: VFC = () => (
  <>
    <DarkModeBox align="center">
      <Box pb={16} pt={24}>
        <Text fontSize={['2xl', '3xl', '4xl']}>Thank you for coming</Text>
      </Box>
      <ButtonToTop />
      <Box pb={12} />
    </DarkModeBox>
  </>
);

export default EndMessage;
