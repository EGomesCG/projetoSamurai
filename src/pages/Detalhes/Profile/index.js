import React from 'react';
import PropTypes from 'prop-types';
import { FaGem, FaGlobe, FaLink, FaUserFriends } from 'react-icons/fa';
import { Container, Header, Avatar, Login, Name, Inner, Data } from './styles';

const Profile = ({ user }) => (
  <Container>
    <Header>
      <Avatar src={user.avatar} />
      <Login>{user.login}</Login>
      <Name>{user.name}</Name>
    </Header>
    <Inner>
      {user.followers !== 0 && user.following !== 0 && (
        <Data>
          <FaUserFriends size={15} />
          {/* &nbsp; espaço |  &middot; tracinho(-) */}
          {user.following}&nbsp;<i>seguidores</i>&nbsp;&middot;&nbsp;
          {user.followers}&nbsp;<i>seguindo</i>
        </Data>
      )}
      {user.company && (
        <Data>
          <FaGem size={15} />
          {user.company}
        </Data>
      )}
      {user.location && (
        <Data>
          <FaGlobe size={15} />
          {user.location}
        </Data>
      )}
      {user.blog && (
        <Data>
          <FaLink size={15} />
          {/* Essa é uma das formas de fazer refência ao link
        <a href="https://devsamurai.com.br">devsamurai.com.br</a>
        */}
          <a href={`\\${user.blog}`}>{user.blog}</a>
        </Data>
      )}
    </Inner>
  </Container>
);

Profile.propTypes = {
  user: PropTypes.shape({
    login: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    followers: PropTypes.number,
    following: PropTypes.number,
    company: PropTypes.string,
    blog: PropTypes.string,
    location: PropTypes.string,
  }).isRequired,
};
export default Profile;
