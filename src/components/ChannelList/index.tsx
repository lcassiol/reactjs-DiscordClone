import React, { useState } from 'react';

import {
  Container,
  ChannelContent,
  Category,
  ExpandIcon,
  AddCategoryIcon,
} from './styles';
import ChannelButton from '../ChannelButton';

interface ChannelProps {
  name: string;
}

interface Props {
  channels: {
    text: ChannelProps[];
    audio: ChannelProps[];
  };
}

const ChannelList: React.FC<Props> = ({ channels }) => {
  const [selectedChannel, setSelectedChannel] = useState('chat-livre');

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

        {channels.text.map((channel) => (
          <ChannelButton
            selected={selectedChannel === channel.name}
            channelName={channel.name}
          />
        ))}
      </ChannelContent>

      <ChannelContent>
        <Category>
          <div>
            <ExpandIcon />
            <span>Canais de Audio</span>
          </div>
          <AddCategoryIcon />
        </Category>

        {channels.audio.map((channel) => (
          <ChannelButton audioChannel channelName={channel.name} />
        ))}
      </ChannelContent>
    </Container>
  );
};

export default ChannelList;
