import React from 'react';
import { Container, Cleaner, Selector } from './styles';

const langs = [
  { name: 'JavaScript React', count: 3, color: '#f1c40f' },
  { name: 'HTML', count: 3, color: '#9b59b6' },
  { name: 'TypeScript React', count: 5, color: '#3498db' },
  { name: 'CSS', count: 2, color: '#e74c3c' },
  { name: 'Boostrap', count: 3, color: '#2ecc71' },
  { name: 'Git', count: 1, color: '#e67e22' },
];
// const selectors = langs.map((name, count, color) => (
//   <Selector key={name.toLowerCase()} color={color}>
//     <span>{name}</span>
//     <span>{count}</span>
//   </Selector>
// ));

function Filter() {
  return (
    <Container>
      {langs.map((lang) => (
        <Selector key={lang.name.toLowerCase()} color={lang.color}>
          <span>{lang.name}</span>
          <span>{lang.count}</span>
        </Selector>
      ))}
      <Cleaner>Limpar</Cleaner>
    </Container>
  );
}
export default Filter;
