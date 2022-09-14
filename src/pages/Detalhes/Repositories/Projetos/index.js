import React from 'react';
import PropTypes from 'prop-types';
import { Container, Name, Description, Footer, Lang, Link } from './styles';

const Projeto = ({ proj }) => (
  <Container color="#8e44ad">
    <Name>{proj.name}</Name>
    <Description>{proj.descricao}</Description>
    <Footer color="#8e44ad">
      <Lang>{proj.lang}</Lang>
      <Link href={proj.html} target="_blank">
        VER
      </Link>
    </Footer>
  </Container>
);

Projeto.propTypes = {
  proj: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      descricao: PropTypes.string.isRequired,
      html: PropTypes.string.isRequired,
      lang: PropTypes.string,
    }).isRequired
  ).isRequired,
};
export default Projeto;
