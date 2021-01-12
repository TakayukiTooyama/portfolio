import { Border, BoxShadow, DarkModeBox, SectionTitle } from 'components/atoms';
import { Container } from 'components/templates';
import React, { VFC } from 'react';
import { Element } from 'react-scroll';

const WorkPostContent: VFC = () => (
  <>
    <DarkModeBox>
      <Container maxW="xl" align="center">
        <Element name="content">
          <SectionTitle title="Content" mb={4} />
          <BoxShadow px={[4, 4, 8]} py={[4, 4, 8]} box="inner">
            hellohellohellohellohellohellohellohellohellohello
          </BoxShadow>
        </Element>
      </Container>
      <Border />
    </DarkModeBox>
  </>
);

export default WorkPostContent;
