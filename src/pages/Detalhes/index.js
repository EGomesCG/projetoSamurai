import React from 'react';
import Profile from './Profile';
import Filter from './Filte';
import Repositories from './Repositories';
import { Container, Sidebar, Main } from './styles';

const Repositores = () => (
  <Container>
    <Sidebar>
      <Profile />
      <Filter />
    </Sidebar>
    <Main>
      <Repositories />
    </Main>
  </Container>
);
export default Repositores;
