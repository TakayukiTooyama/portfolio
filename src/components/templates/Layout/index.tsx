import { Container as Main } from '@chakra-ui/react';
import { Container, Footer, Header } from 'components/templates';
import type { FC, ReactNode } from 'react';

type Props = {
  children?: ReactNode;
};

const Layout: FC<Props> = ({ children }) => (
  <Container h="100vh">
    <Header />
    <Main py={8}>{children}</Main>
    <Footer />
  </Container>
);

export default Layout;
