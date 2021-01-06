import { Container } from '@chakra-ui/react';
import { DarkModeBox } from 'components/atoms';
import { Footer, Header } from 'components/templates';
import type { FC, ReactNode } from 'react';

type Props = {
  children?: ReactNode;
};

const Layout: FC<Props> = ({ children }) => (
  <DarkModeBox bgdark="#000">
    <Header />
    <Container maxW="2xl" py={8}>
      {children}
    </Container>
    <Footer />
  </DarkModeBox>
);

export default Layout;
