import styled from 'styled-components';
import { Hashtag } from 'styled-icons/heroicons-outline';
import { PersonAdd, Settings } from 'styled-icons/material';
import { Volume } from 'styled-icons/foundation';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  cursor: pointer;

  padding: 5px 3px;
  border-radius: 5px;

  background-color: transparent;

  transition: background-color 0.2s;

  > div {
    display: flex;
    align-items: center;
  }

  > div span {
    margin-left: 5px;
    color: var(--senary);
  }

  &:hover,
  &.active {
    background-color: var(--quinary);

    > div span {
      color: var(--white);
    }

    > div svg {
      display: inline;
    }
  }
`;

export const Icons = styled.div`
  > svg {
    display: none;
    transition: display 0.5s;
  }

  ${Container}:hover & {
    > svg {
      display: inline;
    }
  }
`;

export const AudiotagIcon = styled(Volume)`
  width: 18px;
  height: 18px;

  color: var(--symbol);
`;

export const HashtagIcon = styled(Hashtag)`
  width: 20px;
  height: 20px;

  color: var(--symbol);
`;

export const InviteIcon = styled(PersonAdd)`
  width: 16px;
  height: 16px;

  color: var(--symbol);
  cursor: pointer;

  transition: color 0.2s;

  &:hover {
    color: var(--white);
  }
`;

export const SettingsIcon = styled(Settings)`
  width: 16px;
  height: 16px;

  margin-left: 4px;

  color: var(--symbol);
  cursor: pointer;

  transition: color 0.2s;

  &:hover {
    color: var(--white);
  }
`;
