import { css } from 'styled-components';

const points = {
  xs: '600px',
  sm: '800px',
  lg: '1200px',
  xl: '1920px',
};

const breakpoints = {
  sm: `@media only screen and (max-width: ${points.xs})`,
  md: `@media only screen and (max-width: ${points.sm})`,
  lg: `@media only screen and (max-width: ${points.lg})`,
  xl: `@media only screen and (max-width: ${points.xl})`,
};

// Basic structure
const base = {
  button: {
    base: css`
      font-weight: 500;
      font-style: normal;
    `,
    large: css`
      height: 64px;
      width: 200px;
      font-size: 16px;

      line-height: 18px;
    `,
    medium: css`
      height: 56px;
      width: 200px;
      font-size: 16px;
      line-height: 18px;
    `,
    small: css`
      height: 40px;
      width: 120px;
      font-size: 14px;
      line-height: 24px;
    `,
    mediaQuery: css`
      ${breakpoints.xl} {
        height: 64px;
        width: 200px;
        font-size: 16px;
        font-weight: 500;
        font-style: normal;
        line-height: 18px;
      }
      ${breakpoints.md} {
        height: 40px;
        width: 120px;
        font-size: 16px;
        font-weight: 500;
        font-style: normal;
        line-height: 18px;
      }
      ${breakpoints.sm} {
        height: 40px;
        width: 120px;
        font-size: 16px;
        font-size: 14px;
        font-weight: 500;
        font-style: normal;
        line-height: 24px;
      }
    `,
  },
};

export default {
  light: {
    ...base,
    pallete: {
      primary: '#0c0c0c',
      primaryback: 'rgba(255,255,255,0.8)',
    },
  },
  dark: {
    ...base,
    pallete: {
      primary: 'rgba(255,255,255,0.8)',
      primaryback: '#0c0c0c',
    },
  },
};

export { points, breakpoints };
