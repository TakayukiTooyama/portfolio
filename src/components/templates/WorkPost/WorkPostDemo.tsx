import { Box, HStack, Image } from '@chakra-ui/react';
import { SectionTitle } from 'components/atoms';
import React, { useState, VFC } from 'react';
import type { SampleDetail } from 'types/post';

type Props = {
  sampleDetails: SampleDetail[];
};

const WorkPostDemo: VFC<Props> = ({ sampleDetails }) => {
  const [selectecdSample, setSelectecdSample] = useState(sampleDetails[0]);
  return (
    <Box align="center">
      <SectionTitle title="Sample" />
      <Box mb={4} />
      <Image src={selectecdSample.src} alt={selectecdSample.alt} />
      <HStack wrap="wrap" spacing={4}>
        {sampleDetails &&
          sampleDetails.map((item) => (
            <Image
              boxSize="100px"
              key={item.alt}
              src={item.src}
              alt={item.alt}
              onClick={() => setSelectecdSample(item)}
              h="auto"
              _hover={{
                transform: 'Scale(1.1)',
                transition: 'transform 0.4s ease',
              }}
            />
          ))}
      </HStack>
    </Box>
  );
};

export default WorkPostDemo;
