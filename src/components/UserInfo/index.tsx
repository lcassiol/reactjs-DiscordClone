import React from 'react';

import {
  Container,
  Profile,
  Avatar,
  UserData,
  Icons,
  MicIcon,
  HeadphoneIcon,
  SettingsIcon,
} from './styles';

const UserInfo: React.FC = () => {
  const image = 'https://api.adorable.io/avatars/100/cassio';

  return (
    <Container>
      <Profile>
        <Avatar>
          <img src={image} alt="cassio" />
        </Avatar>
        <UserData>
          <strong>Cassio Carvalho</strong>
          <span>#2986</span>
        </UserData>
      </Profile>

      <Icons>
        <MicIcon />
        <HeadphoneIcon />
        <SettingsIcon />
      </Icons>
    </Container>
  );
};

export default UserInfo;
