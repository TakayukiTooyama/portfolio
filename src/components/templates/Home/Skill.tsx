import { Box, Stack } from '@chakra-ui/react';
import { SectionTitle } from 'components/atoms';
import { SkillCard } from 'components/molecules';
import React, { VFC } from 'react';
import { Element } from 'react-scroll';

const Skill: VFC = () => {
  const cardContents = [
    { title: 'MarkUp', text: 'HTML, CSS, TailwindCSS, ChakraUI, Sass(Scss)' },
    {
      title: 'FrontDev',
      text: 'JavaScript, React, Redux, TypeScript, Next.js, Gatsby',
    },
    { title: 'BackDev', text: 'Node.js, Firebase' },
    { title: 'Other Tool', text: 'git, yarn, AdobeXD, Figma' },
  ];
  return (
    <Element name="skill">
      <Box align="center" h="100vh">
        <SectionTitle title="Skill" />
        <Box mb={4} />
        <Stack spacing={8} maxW="500px" mx="auto">
          {cardContents.map((item) => (
            <SkillCard key={item.title} title={item.title} text={item.text} />
          ))}
        </Stack>
      </Box>
    </Element>
  );
};

export default Skill;
