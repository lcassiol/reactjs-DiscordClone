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

const userList = {
  online: [
    {
      nickname: 'Cassio Carvalho',
      image: 'https://api.adorable.io/avatars/100/cassio',
    },
    {
      nickname: 'Diego Fernandes',
      image: 'https://api.adorable.io/avatars/100/diego',
    },
    {
      nickname: 'Pill Bates',
      image: 'https://api.adorable.io/avatars/100/bill',
    },
    {
      nickname: 'Meff Dezzos',
      image: 'https://api.adorable.io/avatars/100/cassio',
    },
  ],
  offline: [
    {
      nickname: 'Guilherme Rodz',
      isBot: true,
      image: 'https://api.adorable.io/avatars/100/guilherme',
    },
    {
      nickname: 'Marren Duffet',
      image: 'https://api.adorable.io/avatars/100/warren',
    },
    {
      nickname: 'Beepak Lhopra',
      image: 'https://api.adorable.io/avatars/100/deepa',
    },
    {
      nickname: 'Pene Mimmons',
      image: 'https://api.adorable.io/avatars/100/penemimm',
    },
    {
      nickname: 'Tio das vendas',
    },
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
      <UserList users={userList} />
    </Grid>
  );
};

export default Layout;
