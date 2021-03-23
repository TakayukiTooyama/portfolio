import { useColorMode } from '@chakra-ui/react';
import React, { VFC } from 'react';

type Props = {
  filllight?: string;
  filldark?: string;
};

const Wave2: VFC<Props> = ({ filllight = '#EBECF2', filldark = '#111111' }) => {
  const fillDark = filldark === 'gray.800' ? '#1A212C' : filldark;
  const { colorMode } = useColorMode();
  const fill = { light: filllight, dark: fillDark };
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill={fill[colorMode]}
        fillOpacity="1"
        d="M0,128L80,144C160,160,320,192,480,197.3C640,203,800,181,960,181.3C1120,181,1280,203,1360,213.3L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
      />
    </svg>
  );
};

export default Wave2;
