import { FC, ReactNode } from 'react';
import { Container } from './style';

export const PageContainer: FC<{ children: ReactNode, id: string | undefined }>= ({ children, id }) => {
  return (
    <Container id={id}>
      {children}
    </Container>
  );
};