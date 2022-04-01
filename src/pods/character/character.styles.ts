import { css } from 'emotion';

export const root = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20rem;
`;

export const rowItem = css`
  color: red;
  align-items: flex-start;
  align-items: baseline;
`;

export const item = css`
  width: 4rem;
  text-align: left;
  flex: none;
`;

export const itemState = css`
  align-items: left;
  & p {
    font-weight: bold;
    font-size: 1.1rem;
  }
`;
