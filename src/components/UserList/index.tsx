import React from 'react';

import { Container, Role } from './styles';
import UserRow from './components/UserRow';

const UserList: React.FC = () => {
  return (
    <Container>
      <Role>Disponivel - 1</Role>
      <UserRow nickname="Cassio Carvalho" />

      <Role>Offline - 18</Role>
      <UserRow nickname="Ghilherme Rodz" isBot />
    </Container>
  );
};

export default UserList;
