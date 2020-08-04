import React from 'react';

import { Container, Separator } from './styles';
import ServerButton from '../ServerButton';

import Logo from '../../assets/Logo.svg';

const image1 =
  'https://images.unsplash.com/photo-1596366799057-3f1df512cd4f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80';

const image2 =
  'https://images.unsplash.com/photo-1531488903598-056300265091?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80';

const image3 =
  'https://images.unsplash.com/photo-1596138121396-64293423a9a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80';

const image4 =
  'https://images.unsplash.com/photo-1596338949301-8c60cc6d10cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80';

const image5 =
  'https://images.unsplash.com/photo-1596046070666-473705748e6c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80';
const ServerList: React.FC = () => {
  return (
    <Container>
      <ServerButton isHome imageUrl={Logo} />

      <Separator />

      <ServerButton imageUrl={image1} />
      <ServerButton imageUrl={image2} hasNotifications />
      <ServerButton imageUrl={image3} mentions={12} />
      <ServerButton imageUrl={image4} />
      <ServerButton imageUrl={image5} selected />
    </Container>
  );
};

export default ServerList;
