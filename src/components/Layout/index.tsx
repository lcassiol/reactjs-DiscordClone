import React from 'react';

import { Grid } from './styles';

import ServerList from '../ServerList';
import ServerName from '../ServerName';
import ChannelInfo from '../ChannelInfo';
import ChannelList from '../ChannelList';
import UserInfo from '../UserInfo';
import UserList from '../UserList';
import ChannelData from '../ChannelData';

const channels = {
  text: [
    { name: 'chat-livre' },
    { name: 'trabalho' },
    { name: 'dotinha' },
    { name: 'csgo' },
    { name: 'valorant' },
  ],
  audio: [
    { name: 'chat-livre' },
    { name: 'trabalho' },
    { name: 'dotinha' },
    { name: 'csgo' },
    { name: 'valorant' },
  ],
};

const Layout: React.FC = () => {
  return (
    <Grid>
      <ServerList />
      <ServerName />
      <ChannelInfo />
      <ChannelList channels={channels} />
      <UserInfo />
      <ChannelData />
      <UserList />
    </Grid>
  );
};

export default Layout;
