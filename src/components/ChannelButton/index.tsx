import React from 'react';

import {
  Container,
  AudiotagIcon,
  HashtagIcon,
  Icons,
  InviteIcon,
  SettingsIcon,
} from './styles';

interface Props {
  channelName: string;
  selected?: boolean;
  audioChannel?: boolean;
}

const ChannelButton: React.FC<Props> = ({
  channelName,
  selected,
  audioChannel,
}) => {
  return (
    <Container className={selected ? 'active' : ''}>
      <div>
        {audioChannel ? <AudiotagIcon /> : <HashtagIcon />}

        <span>{channelName}</span>
      </div>
      <Icons>
        <InviteIcon />
        <SettingsIcon />
      </Icons>
    </Container>
  );
};

export default ChannelButton;
