import {memo} from 'react';
import styled from 'styled-components';
import {breakpoints} from '@commons/theme';

const StyledCard = styled.div`
  overflow: hidden;
  padding: 24px;
  margin: 48px auto 0;
  background-color: #ffffff;
  box-shadow: 0 0 0.2em 0.2em #a0a0a0;
  border-radius: 4px;
  max-width: 420px;
  min-height: 400px;
  ${breakpoints.sm} {
    margin:  0 auto;
    padding: 8px,
    max-width: 320px
  }
`;

export default memo(StyledCard);
