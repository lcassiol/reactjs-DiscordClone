import React from 'react';

import {
  Container,
  ChannelContent,
  Category,
  ExpandIcon,
  AddCategoryIcon,
} from './styles';
import ChannelButton from '../ChannelButton';

const ChannelList: React.FC = () => {
  return (
    <Container>
      <ChannelContent>
        <Category>
          <div>
            <ExpandIcon />
            <span>Canais de Texto</span>
          </div>
          <AddCategoryIcon />
        </Category>

        <ChannelButton selected channelName="chat-livre" />
        <ChannelButton channelName="trabalho" />
        <ChannelButton channelName="dotinha" />
        <ChannelButton channelName="csgo" />
        <ChannelButton channelName="valorant" />
      </ChannelContent>

      <ChannelContent>
        <Category>
          <div>
            <ExpandIcon />
            <span>Canais de Audio</span>
          </div>
          <AddCategoryIcon />
        </Category>

        <ChannelButton audioChannel channelName="chat-livre" />
        <ChannelButton audioChannel channelName="trabalho" />
        <ChannelButton audioChannel channelName="dotinha" />
        <ChannelButton audioChannel channelName="csgo" />
        <ChannelButton audioChannel channelName="valorant" />
      </ChannelContent>
    </Container>
  );
};

export default ChannelList;
