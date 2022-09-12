import React from 'react';
import { FaGem, FaGlobe, FaLink, FaUserFriends } from 'react-icons/fa';
import { Container, Header, Avatar, Login, Name, Inner, Data } from './styles';
import avatar from '../../assets/images/avatar.jpg';

const Profile = () => (
  <Container>
    <Header>
      <Avatar src={avatar} />
      <Login>Front-End - Érica</Login>
      <Name>Gomes Gonçalves</Name>
    </Header>
    <Inner>
      <Data>
        <FaUserFriends size={15} />
        {/* &nbsp; espaço |  &middot; tracinho(-) */}
        30&nbsp;<i>seguidores</i>&nbsp;&middot;&nbsp;10&nbsp;<i>seguindo</i>
      </Data>
      <Data>
        <FaGem size={15} />
        Dev Samurai em Evolução
      </Data>
      <Data>
        <FaGlobe size={15} />
        Diadema
      </Data>
      <Data>
        <FaLink size={15} />
        <a href="https://devsamurai.com.br">devsamurai.com.br</a>
      </Data>
    </Inner>
  </Container>
);
export default Profile;
