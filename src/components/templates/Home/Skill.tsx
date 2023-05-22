import { Box, Stack } from '@chakra-ui/react';
import { DarkModeBox, SectionTitle } from 'components/atoms';
import Wave2 from 'components/atoms/boundary/Wave2';
import { SkillCard } from 'components/molecules';
import { Container } from 'components/templates';
import React, { FC } from 'react';
import { Element } from 'react-scroll';

const Skill: FC = () => {
  const cardContents = [
    { title: 'Design', text: 'TailwindCSS, RadixUI, Mantine, ChakraUI, HTML, CSS, Sass(Scss)' },
    {
      title: 'FrontEnd',
      text: 'Next.js, React, TypeScript',
    },
    { title: 'BackEnd', text: 'Node.js, Python, Pytorch, Ruby, Firebase' },
    { title: 'Other', text: 'AWS, Figma, Notion' },
  ];
  return (
    <DarkModeBox bglight="brand.600" bgdark="gray.800">
      <Container>
        <Element name="skill">
          <SectionTitle title="Skill" color="white" />
          <Box mb={4} />
          <Stack spacing={8} maxW="500px" mx="auto">
            {cardContents.map((item) => (
              <SkillCard key={item.title} title={item.title} text={item.text} />
            ))}
          </Stack>
        </Element>
      </Container>
      <Wave2 />
    </DarkModeBox>
  );
};

export default Skill;
