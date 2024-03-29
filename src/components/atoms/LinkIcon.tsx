import { Icon, Link } from '@chakra-ui/react';
import React, { FC } from 'react';
import { IconType } from 'react-icons';

type Props = {
  href: string;
  icon: IconType;
  color?: string;
  motion?: boolean;
};

const LinkIcon: FC<Props> = ({ href, icon, color, motion = true }) => {
  const scale = motion ? '1.2' : '1.0';
  return (
    <Link href={href} isExternal>
      <Icon
        as={icon}
        w={8}
        h={8}
        transition="all 0.2s ease-out"
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
