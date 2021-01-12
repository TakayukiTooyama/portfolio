import { Heading, HeadingProps, useColorMode } from '@chakra-ui/react';
import React, { FC } from 'react';

type Props = HeadingProps & {
  title: string;
  color?: string;
};

const SectionTitle: FC<Props> = (props) => {
  const { title, color = 'black' } = props;
  const { colorMode } = useColorMode();
  const bgColor = { light: color, dark: 'white' };

  return (
    <Heading
      textAlign="center"
      size="2xl"
      lineHeight="1.5"
      fontFamily="Sofia"
      background={bgColor[colorMode]}
      // textShadow=" 0 0 0.1em rgba(255,255,255,0.05), 0.01em 0.04em 0.03em rgba(255,255,255,0.4)"
      bgClip="text"
      {...props}
    >
      {title}
    </Heading>
  );
};

export default SectionTitle;
