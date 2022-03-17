import { css } from 'styled-components';

export const color = {
  primary: '#5add65',
  secondary: '#02d562',
  border: '#BDBDBD',

  darkFont: '#333',
  lightFont: '#767676',
};

export const spacing = {
  padding: {
    small: 10,
    medium: 24,
    large: 50,
  },
  borderRadius: {
    small: 5,
    default: 10,
  },
};


export const pageMargins = css`
  padding: ${spacing.padding.medium}px 0 ${spacing.padding.medium}px 0;
  max-width: 1125px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  justify-content: center;
`;

