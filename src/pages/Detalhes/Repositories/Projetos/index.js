import React from 'react';
import { Container, Name, Description, Footer, Lang, Link } from './styles';

const Projeto = () => (
  <Container color="#f37272">
    <Name>Projeto JS - Nome</Name>
    <Description>JavaScript React - descrição</Description>
    <Footer color="#f37272">
      <Lang>Projeto Lang</Lang>
      <Link href="https://devsamurai.com.br" target="_blank">
        VER
      </Link>
    </Footer>
  </Container>
);
export default Projeto;
