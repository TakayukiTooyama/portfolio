import { Heading, useColorMode } from '@chakra-ui/react';
import React, { FC } from 'react';

type Props = {
  title: string;
  pl?: number;
};

const SectionTitle: FC<Props> = ({ title, pl = 0 }) => {
  const { colorMode } = useColorMode();
  const bgColor = { light: 'black', dark: 'white' };

  return (
    <Heading
      pl={pl}
      size="2xl"
      lineHeight="1.5"
      fontFamily="Sofia"
      background={bgColor[colorMode]}
      textShadow=" 0 0 0.1em rgba(255,255,255,0.05), 0.01em 0.04em 0.03em rgba(255,255,255,0.4)"
      bgClip="text"
    >
      {title}
    </Heading>
  );
};

export default SectionTitle;
