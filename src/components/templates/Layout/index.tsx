import type { FC, ReactNode } from 'react';
import { Container as Main } from '@chakra-ui/react';

import { Container, Header, Footer } from 'components/templates';

type Props = {
  children?: ReactNode;
};

export const Layout: FC<Props> = ({ children }) => {
  return (
    <Container h="100vh">
      <Header />
      <Main py={8}>{children}</Main>
      <Footer />
    </Container>
  );
};
