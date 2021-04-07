import { Box, useColorMode } from '@chakra-ui/react';
import React, { VFC } from 'react';

type Props = {
  bglight?: string;
  bgdark?: string;
  filllight?: string;
  filldark?: string;
  up?: boolean;
};

const Wave: VFC<Props> = ({
  bglight = 'gray.100',
  bgdark = 'gray.900',
  filllight = '#EBECF2',
  filldark = '#111111',
  up = false,
}) => {
  const fillDark = filldark === 'gray.800' ? '#1A212C' : filldark;
  const { colorMode } = useColorMode();
  const bgColor = { light: bglight, dark: bgdark };
  const fill = { light: filllight, dark: fillDark };
  return (
    <Box bg={bgColor[colorMode]}>
      {up ? (
        <svg preserveAspectRatio="none" viewBox="0 0 1185 248">
          <path
            fill={fill[colorMode]}
            d="M50.5 199.8c112.4 0 87.5-49 188.7-59.3s146.7 38.3 219.5 38.3 107.9-21.9 210.8-69.3c102.8-47.3 274-8.7 424.8 69.3 37.7 19.5 68 36.7 90.7 51.5V0H0v193C15 197.2 31.6 199.8 50.5 199.8zM1109 106.9c11 0 20 9 20 20 0 11-9 20-20 20s-20-9-20-20C1089 115.9 1098 106.9 1109 106.9zM370.5 57.9c13.5 0 24.5 11 24.5 24.5 0 13.5-11 24.5-24.5 24.5S346 95.9 346 82.4C346 68.9 357 57.9 370.5 57.9zM315 35.9c6.1 0 11 4.9 11 11s-4.9 11-11 11 -11-4.9-11-11S308.9 35.9 315 35.9z"
          />
        </svg>
      ) : (
        <svg fill={fill[colorMode]} viewBox="0 0 1185 248">
          <circle cx="76" cy="121.1" r="20" />
          <circle cx="870" cy="201.1" r="11" />
          <circle cx="814.5" cy="165.6" r="24.5" />
          <path d="M0 0v17.7c22.7 14.8 53 31.9 90.7 51.5 150.8 78 322 116.6 424.8 69.3 102.9-47.4 138-69.3 210.8-69.3s118.3 48.6 219.5 38.3 76.3-59.3 188.7-59.3c18.9 0 35.5 2.6 50.5 6.8V0H0z" />
        </svg>
      )}
    </Box>
  );
};

export default Wave;
