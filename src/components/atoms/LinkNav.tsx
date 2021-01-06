import React, { VFC } from 'react';
import { Link } from 'react-scroll';

type Props = {
  name: string;
  link: string;
};

const LinkNav: VFC<Props> = ({ name, link }) => (
  <Link activeClass="active" to={link} spy smooth offset={-70} duration={800}>
    {name}
  </Link>
);

export default LinkNav;
