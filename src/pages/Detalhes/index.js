import React, { useState } from 'react';
import Profile from './Profile';
import Filter from './Filte';
import Repositories from './Repositories';
import { Container, Sidebar, Main } from './styles';
import avatares from '../assets/images/avatar.jpg';
import { getLansFrom } from '../../services/api';

const Repositores = () => {
  const [linguagem, setLinguagem] = useState();

  const user = {
    login: 'Front-End Érica',
    avatar: avatares,
    name: 'Gomes Gonçalves',
    followers: 0,
    following: 0,
    company: null,
    blog: 'https://devsamurai.com.br',
    location: 'Diadema/SP',
  };

  const repositories = [
    {
      id: 1,
      name: 'Rep 1',
      descricao: 'Descrição',
      html: 'https://devsamurai.com.br',
      lang: 'JavaScript',
    },
    {
      id: 2,
      name: 'Rep 2',
      descricao: 'Descrição',
      html: 'https://devsamurai.com.br',
      lang: 'TypeScript',
    },
    {
      id: 3,
      name: 'Rep 3',
      descricao: 'Descrição',
      html: 'https://devsamurai.com.br',
      lang: 'HTML',
    },
    {
      id: 4,
      name: 'Rep 4',
      descricao: 'Descrição',
      html: 'https://devsamurai.com.br',
      lang: 'HTML',
    },
    {
      id: 5,
      name: 'Rep 5',
      descricao: 'Descrição',
      html: 'https://devsamurai.com.br',
      lang: 'JavaScript',
    },
    {
      id: 6,
      name: 'Rep 6',
      descricao: 'Descrição',
      html: 'https://devsamurai.com.br',
      lang: 'Git',
    },
  ];

  // Enviamos a consulta do repositorio para o metodo no arquivo da API(poderia se um arquivo unico)
  // O resultado ficou salvo na const lang, que enviamos para o componente Filter
  const langs = getLansFrom(repositories);

  // const handleonFilterClick = (lang) => {
  //   console.log('Detalhes');
  //   console.log(lang);
  //   setLinguagem(lang);
  // };
  console.log(linguagem, 'Detalhes');
  return (
    <Container>
      <Sidebar>
        <Profile user={user} />
        {/* 1º - Ling está passando a  array montada para os botões dos filtros */}
        {/* 2º - qLinguagem está passando a linguagem selecionada - */}
        <Filter
          ling={langs}
          qLinguagem={linguagem}
          onClick={() => setLinguagem()}
        />
      </Sidebar>
      <Main>
        <Repositories projetos={repositories} qLinguagem={linguagem} />
      </Main>
    </Container>
  );
};
export default Repositores;
