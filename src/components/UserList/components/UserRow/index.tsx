import React from 'react';

import { Container, Avatar } from './styles';

interface Props {
  isBot?: boolean;
  nickname: string;
  image?: string;
}

const UserList: React.FC<Props> = ({ isBot, nickname, image }) => {
  return (
    <Container>
      <Avatar className={isBot ? 'bot' : ''}>
        {image && <img src={image} alt="" />}
      </Avatar>

      <strong>{nickname}</strong>

      {isBot && <span>Bot</span>}
    </Container>
  );
};

export default UserList;
