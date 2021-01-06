import { Box } from '@chakra-ui/react';
import { BoxShadow, DarkModeBox, SectionTitle } from 'components/atoms';
import React, { VFC } from 'react';

const WorkPostContent: VFC = () => (
  <Box>
    <SectionTitle title="Content" />
    <Box mb={4} />
    <DarkModeBox>
      <BoxShadow px={4} py={4}>
        hellohellohellohellohellohellohellohellohellohello
      </BoxShadow>
    </DarkModeBox>
  </Box>
);

export default WorkPostContent;
