import React from 'react';

import { Container, Role } from './styles';
import UserRow from './components/UserRow';

interface UserProps {
  nickname: string;
  isBot?: boolean;
  image?: string;
}

interface Props {
  users: {
    online: UserProps[];
    offline: UserProps[];
  };
}

const UserList: React.FC<Props> = ({ users }) => {
  return (
    <Container>
      <Role>{`Disponivel - ${users.online.length}`}</Role>
      {users.online.map((user) => (
        <UserRow
          nickname={user.nickname}
          isBot={user.isBot}
          image={user.image}
        />
      ))}

      <Role>{`Offline - ${users.offline.length}`}</Role>
      {users.offline.map((user) => (
        <UserRow
          nickname={user.nickname}
          isBot={user.isBot}
          image={user.image}
        />
      ))}
    </Container>
  );
};

export default UserList;
