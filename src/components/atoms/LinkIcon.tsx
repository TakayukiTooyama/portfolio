import { Icon, Link } from '@chakra-ui/react';
import React, { VFC } from 'react';
import { IconType } from 'react-icons';

type Props = {
  href: string;
  icon: IconType;
  color?: string;
  motion?: boolean;
};

const LinkIcon: VFC<Props> = ({ href, icon, color, motion }) => {
  const scale = motion ? '1.2' : '1.0';
  return (
    <Link href={href} isExternal>
      <Icon
        as={icon}
        w={8}
        h={8}
        _hover={{
          color,
          transform: `scale(${scale})`,
          transition: 'all 0.4s ease-out',
        }}
      />
    </Link>
  );
};

export default LinkIcon;
