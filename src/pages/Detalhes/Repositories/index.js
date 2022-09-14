import React from 'react';
import PropTypes from 'prop-types';
import Projeto from './Projetos';
import { Container } from './styles';

const Repositories = ({ projetos, qLinguagem }) => {
  console.log(projetos, 'Repor');
  console.log(qLinguagem, 'Repor');

  // const projs = projetos.map((proj) => (
  //   <Projeto key={proj.id} projeto={proj} />
  // ));
  // .filter((proj) => qLinguagem === null || proj.lang === qLinguagem);

  return (
    <h2>
      Projetos
      <Container>
        {projetos.map((pj) => (
          <Projeto key={pj.id} proj={pj} />
        ))}
      </Container>
    </h2>
  );
};

Repositories.defaultProps = {
  qLinguagem: null,
};

Repositories.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  projetos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      descricao: PropTypes.string.isRequired,
      html: PropTypes.string.isRequired,
      lang: PropTypes.string,
    }).isRequired
  ).isRequired,
  qLinguagem: PropTypes.string,
};
export default Repositories;
