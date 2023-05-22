import { Box, Divider, Image, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import React, { useEffect, useState, FC } from 'react';
import type { SampleDetail } from 'types/post';

type Props = {
  sampleDetails: SampleDetail[];
};

const WorkPostSample: FC<Props> = ({ sampleDetails }) => {
  const [selectecdSample, setSelectecdSample] = useState(sampleDetails[0]);

  useEffect(() => {
    setSelectecdSample(sampleDetails[0]);
  }, [sampleDetails]);

  return (
    <Stack>
      <Text fontSize="18px">サンプル</Text>
      <Divider mb={4} />
      <Image
        src={selectecdSample.sampleImage.url}
        alt={selectecdSample.alt}
        shadow="base"
        w="100%"
        h="auto"
        fit="cover"
      />
      <Box mb={8} />
      <SimpleGrid spacing={4} columns={[3, 4, 5]}>
        {sampleDetails &&
          sampleDetails.map((item) => (
            <Image
              boxSize="200px"
              key={item.alt}
              src={item.sampleImage.url}
              alt={item.alt}
              onClick={() => setSelectecdSample(item)}
              h="auto"
              shadow="base"
              transition="all 0.4s ease"
              _hover={{
                transform: 'scale(1.05)',
                transition: 'all 0.4s ease',
                shadow: '2xl',
              }}
              cursor="pointer"
            />
          ))}
      </SimpleGrid>
    </Stack>
  );
};

export default WorkPostSample;
