import { HStack, Image } from '@chakra-ui/react';
import { Border, DarkModeBox, SectionTitle } from 'components/atoms';
import { Container } from 'components/templates';
import React, { useState, VFC } from 'react';
import { Element } from 'react-scroll';
import type { SampleDetail } from 'types/post';

type Props = {
  sampleDetails: SampleDetail[];
};

const WorkPostSample: VFC<Props> = ({ sampleDetails }) => {
  const [selectecdSample, setSelectecdSample] = useState(sampleDetails[0]);
  return (
    <DarkModeBox bglight="white">
      <Container align="center">
        <Element name="sample">
          <SectionTitle title="Sample" mb={4} />
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
        </Element>
      </Container>
      <Border />
    </DarkModeBox>
  );
};

export default WorkPostSample;
