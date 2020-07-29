import React from 'react';

import { Container, Avatar } from './styles';

interface Props {
  isBot?: boolean;
  nickname: string;
}

const UserList: React.FC<Props> = ({ isBot, nickname }) => {
  return (
    <Container>
      <Avatar className={isBot ? 'bot' : ''} />

      <strong>{nickname}</strong>

      {isBot && <span>Bot</span>}
    </Container>
  );
};

export default UserList;
