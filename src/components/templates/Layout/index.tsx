import { Box } from '@chakra-ui/react';
import { Footer, Header } from 'components/templates';
import type { FC, ReactNode } from 'react';

type Props = {
  children?: ReactNode;
};

const Layout: FC<Props> = ({ children }) => (
  <>
    <Header />
    <Box>{children}</Box>
    <Footer />
  </>
);

export default Layout;
