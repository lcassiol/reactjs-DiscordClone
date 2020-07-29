import styled from 'styled-components';
import { Add, ExpandMore } from 'styled-icons/material';

export const Container = styled.div`
  grid-area: CL;

  display: flex;
  flex-direction: column;

  padding: 24px 9.5px 0 16px;
  background-color: var(--secondary);
`;

export const ChannelContent = styled.div`
  margin-bottom: 15px;
`;

export const Category = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 6px;

  > div span {
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 500;
    color: var(--gray);
  }

  > div {
    margin-left: -8px;
  }
`;

export const ExpandIcon = styled(ExpandMore)`
  width: 15px;
  height: 15px;

  color: var(--gray);
  cursor: pointer;

  margin-top: 2px;
`;

export const AddCategoryIcon = styled(Add)`
  width: 21px;
  height: 21px;

  color: var(--symbol);
  cursor: pointer;
`;
