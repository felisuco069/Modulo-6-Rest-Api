import { css } from 'emotion';

export const root = css`
  display: flex;
`;
export const cardMedia = css`
  width: auto;
`;

export const datasContainer = css`
  display: flex;
  flex-direction: column;
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
export const input = css`
  margin-left: 1rem;
  width: 20rem;
`;
