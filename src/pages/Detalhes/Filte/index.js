import React from 'react';
import PropTypes from 'prop-types';
import { Container, Cleaner, Selector } from './styles';

// const langs = [
//   { name: 'JavaScript React', count: 3, color: '#f1c40f' },
//   { name: 'HTML', count: 3, color: '#9b59b6' },
//   { name: 'TypeScript React', count: 5, color: '#3498db' },
//   { name: 'CSS', count: 2, color: '#e74c3c' },
//   { name: 'Boostrap', count: 3, color: '#2ecc71' },
//   { name: 'Git', count: 1, color: '#e67e22' },
// ];
// const selectors = langs.map((name, count, color) => (
//   <Selector key={name.toLowerCase()} color={color}>
//     <span>{name}</span>
//     <span>{count}</span>
//   </Selector>
// ));

function Filter({ ling, qLinguagem, onClick }) {
  console.log(ling, 'Filtro');
  console.log(qLinguagem, 'Filtro');
  console.log(ling.name, 'Filtro');

  return (
    <Container>
      {ling.map((e) => (
        <Selector
          key={e.name.toLowerCase()}
          color={e.color}
          // Se a linguagem for selecionada então a propriedade select é ativada
          className={qLinguagem === e.name ? '' : 'selected'}
          // Caso o onclick for NULL não chama essa função
          onClick={() => onClick && onClick(e.name)}
        >
          <span>{e.name}</span>
          <span>{e.count}</span>
        </Selector>
      ))}
      <Cleaner onclick={() => onclick && onclick(undefined)}>Limpar</Cleaner>
    </Container>
  );
}
// Aqui estão especificando que os atributos recebidos podem serem null's
Filter.defaultProps = {
  qLinguagem: null,
  onClick: null,
};

Filter.propTypes = {
  ling: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      count: PropTypes.number.isRequired,
      color: PropTypes.string,
    }).isRequired
  ).isRequired,
  // Como este atributos estão fora do .isRequired então é preciso realizar a rotina linha 40 à 43
  qLinguagem: PropTypes.string,
  onClick: PropTypes.func,
};

export default Filter;
