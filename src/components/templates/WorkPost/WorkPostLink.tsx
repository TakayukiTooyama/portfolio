import { Box, Stack } from '@chakra-ui/react';
import {
  Border,
  ButtonToTop,
  DarkModeBox,
  SectionTitle,
} from 'components/atoms';
import { LinkCard } from 'components/molecules';
import { PostLink } from 'components/organisms';
import { Container } from 'components/templates';
import React, { VFC } from 'react';
import { Element } from 'react-scroll';

type Props = {
  siteLink: string;
  github: string;
  nextSlug: string;
  prevSlug: string;
};

const WorkPostLink: VFC<Props> = ({ siteLink, github, nextSlug, prevSlug }) => (
  <DarkModeBox>
    <Container maxW="xl" align="center">
      <Element name="link">
        <SectionTitle title="Link" pl={3} mb={4} />
        <Stack spacing={8} mb={8}>
          <LinkCard name="Demo" href={siteLink} />
          <LinkCard name="GitHub Repository" href={github} />
        </Stack>
        <PostLink nextSlug={nextSlug} prevSlug={prevSlug} />
        <Box mb={20} />
        <ButtonToTop />
      </Element>
    </Container>
    <Border />
  </DarkModeBox>
);

export default WorkPostLink;
