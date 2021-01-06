import { Box, Heading, Image, Text } from '@chakra-ui/react';
import { BoxShadow } from 'components/atoms';
import React, { VFC } from 'react';

type Props = {
  title: string;
  languages: string;
  mockup: string;
};

const WorkPostTop: VFC<Props> = ({ title, languages, mockup }) => (
  <Box align="center" pos="relative" mb="15rem">
    <BoxShadow px={4} py={4}>
      <Heading as="h1" size="xl">
        {title}
      </Heading>
      <Text>{languages}</Text>
      <Box pb={20} />
      <Image
        src={mockup}
        alt={title}
        w="60%"
        h="auto"
        pos="absolute"
        top="60%"
        left="50%"
        transform="translateX(-50%)"
      />
    </BoxShadow>
  </Box>
);

export default WorkPostTop;
