import { Box, Divider, Flex, Image, Stack, Text } from '@chakra-ui/react';
import { Border, DarkModeBox, SectionTitle } from 'components/atoms';
import { Container } from 'components/templates';
import React, { VFC } from 'react';
import { Element } from 'react-scroll';

type Props = {
  title: string;
  mockup: string;
  languages: string;
};

const WorkPostSpecification: VFC<Props> = ({ title, mockup, languages }) => (
  <>
    <DarkModeBox bglight="white">
      <Container>
        <Element name="spetification">
          <SectionTitle title="Spetification" mb={12} />
          <Flex
            justify="space-between"
            direction={['column', 'column', 'row']}
            align="center"
          >
            <Image src={mockup} alt={title} w="100%" maxW="300px" h="auto" />
            <Box mb={[10, 10, 0]} />
            <Stack>
              <Text>使用言語</Text>
              <Divider />
              <Text>{languages}</Text>
            </Stack>
          </Flex>
        </Element>
      </Container>
      <Border />
    </DarkModeBox>
  </>
);

export default WorkPostSpecification;
