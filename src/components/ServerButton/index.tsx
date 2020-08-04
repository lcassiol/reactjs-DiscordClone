import React from 'react';

import { Button } from './styles';

export interface Props {
  selected?: boolean;
  isHome?: boolean;
  hasNotifications?: boolean;
  mentions?: number;
  imageUrl?: string;
}

const ServerButton: React.FC<Props> = ({
  selected,
  isHome,
  hasNotifications,
  mentions,
  imageUrl,
}) => {
  return (
    <Button
      isHome={isHome}
      hasNotifications={hasNotifications}
      mentions={mentions}
      className={selected ? 'active' : ''}
    >
      {imageUrl && (
        <img src={imageUrl} alt={isHome ? 'Rocketseat' : 'serverImage'} />
      )}
    </Button>
  );
};

export default ServerButton;
