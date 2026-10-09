import {
  CSSVariablesResolver,
  createTheme,
  MantineColorsTuple,
} from '@mantine/core';

export const workbenchCyan: MantineColorsTuple = [
  '#E0F7FE',
  '#BAE6FD',
  '#7DD3FC',
  '#38BDF8',
  '#0EA5E9',
  '#0284C7',
  '#0369A1',
  '#075985',
  '#0C4A6E',
  '#082F49',
];

export const workbenchSlate: MantineColorsTuple = [
  '#F0F6FC',
  '#C9D1D9',
  '#8B949E',
  '#6E7681',
  '#484F58',
  '#30363D',
  '#21262D',
  '#161B22',
  '#0D1117',
  '#04080D',
];

export const workbenchTheme = createTheme({
  colors: {
    cyan: workbenchCyan,
    dark: workbenchSlate,
  },
  primaryColor: 'cyan',
  primaryShade: 3, // #38BDF8
  fontFamily: 'var(--rc-font-ui)',
  fontFamilyMonospace: 'var(--rc-font-mono)',
  headings: {
    fontFamily: 'var(--rc-font-ui)',
    fontWeight: '600',
  },
  defaultRadius: 'xs', // 4px
  cursorType: 'pointer',
});

export const workbenchResolver: CSSVariablesResolver = () => ({
  variables: {
    '--rc-canvas': '#0D1117',
    '--rc-surface': '#161B22',
    '--rc-surface-raised': '#21262D',
    '--rc-surface-pressed': '#30363D',
    '--rc-text-primary': '#F0F6FC',
    '--rc-text-secondary': '#8B949E',
    '--rc-text-muted': '#6E7681',
    '--rc-text-disabled': '#484F58',
    '--rc-border-subtle': '#21262D',
    '--rc-border-default': '#30363D',
    '--rc-border-focus': '#38BDF8',
    '--rc-accent': '#38BDF8',
    '--rc-accent-hover': '#7DD3FC',
    '--rc-accent-pressed': '#0284C7',
    '--rc-on-accent': '#041426',
    '--rc-danger': '#F85149',
    '--rc-warning': '#D29922',
    '--rc-success': '#3FB950',
    '--rc-badge-bg': '#162436',
    '--rc-badge-border': '#1E3A5F',
  },
  light: {},
  dark: {
    '--mantine-color-body': '#0D1117',
    '--mantine-color-text': '#F0F6FC',
    '--mantine-color-dimmed': '#8B949E',
    '--mantine-color-default-border': '#30363D',
    '--mantine-color-default': '#161B22',
    '--mantine-color-default-hover': '#21262D',
  },
});
