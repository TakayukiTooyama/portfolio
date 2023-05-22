import { Box, Divider, Flex, Image, Stack, Text } from '@chakra-ui/react';
import { Border, DarkModeBox, SectionTitle } from 'components/atoms';
import { Container, WorkPostSample } from 'components/templates';
import React, { FC } from 'react';
import { Element } from 'react-scroll';
import { SampleDetail } from 'types/post';

type Props = {
  title: string;
  mockup: string;
  languages: string;
  content: string;
  funcList: string;
  sampleDetails: SampleDetail[];
};

const WorkPostContent: FC<Props> = ({
  title,
  mockup,
  languages,
  content,
  funcList,
  sampleDetails,
}) => (
  <DarkModeBox bglight="white">
    <Container>
      <Element name="Content">
        <SectionTitle title="Content" mb={12} />
        <Stack spacing={12}>
          <Flex
            w="100%"
            justify="center"
            direction={['column', 'column', 'row']}
            align="center"
          >
            <Image
              src={mockup}
              alt={title}
              w="100%"
              h="auto"
              maxW={['100%', '100%', '300px']}
              borderRadius="5px"
              shadow="base"
            />
            <Box mb={[10, 10, 0]} mr={[0, 0, 8]} />
            <Stack w="100%">
              <Text fontSize="18px">使用言語</Text>
              <Divider />
              <Text>{languages}</Text>
            </Stack>
          </Flex>
          <Stack>
            <Text fontSize="18px">機能一覧</Text>
            <Divider />
            <Box px={2} dangerouslySetInnerHTML={{ __html: `${funcList}` }} />
          </Stack>
          <WorkPostSample sampleDetails={sampleDetails} />
          <Stack>
            <Text fontSize="18px">説明</Text>
            <Divider />
            <Box px={2} dangerouslySetInnerHTML={{ __html: `${content}` }} />
          </Stack>
        </Stack>
      </Element>
    </Container>
    <Border />
  </DarkModeBox>
);

export default WorkPostContent;
