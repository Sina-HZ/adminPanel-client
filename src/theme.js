import { createMuiTheme } from '@material-ui/core';

const createTheme = (direction) => createMuiTheme({
  direction: direction,
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      'Yekan Bakh',
    ].join(','),
  },
  // shadows: {

  // },
  shape: {
    borderRadius: 5,
  },
  palette: {
    primary: {
      main: COLORS.primary,
      dark: COLORS.primaryDark,
    },
    secondary: {
      main: COLORS.secondary,
      light: COLORS.secondaryLight,
      dark: COLORS.secondaryDark,
    },
    success: {
      light: COLORS.successLight,
      main: COLORS.successMain
    },
    error:{
      main: COLORS.danger,
      light: COLORS.errorLight
    },
    info:{
      main: COLORS.detected
    },
    text: {
      primary: COLORS.data,
      secondary: COLORS.label,
    },
    divider: COLORS.divider,
    grey: {
      "700": COLORS.veryLightPink,
      "600": COLORS.data,
      "500": COLORS.labelHover,
      "400": COLORS.label,
      "300": COLORS.border,
      "200": COLORS.chipBackground,
      "100": COLORS.buttonBackground,
    },
    action: {
      active: COLORS.link,
    },
    background: {
      default: COLORS.background,
      paper: '#fff',
    },
  },
  overrides: {
    MuiContainer: {
      root: {
        backgroundColor: COLORS.background,
      },
    },
    MuiButton: {
      root: {
        borderRadius: 20,
      }
    },
    MuiTypography: {
      caption: {
        color: COLORS.label,
      },
    },
    MuiPaper: {
      rounded: {
        borderRadius: 8,
      },
      elevation1: {
        boxShadow: '0 5px 10px 0 rgba(0, 0, 0, 0.08)',
      },
      elevation2: {
        boxShadow: '0 4px 8px 0 rgba(19, 37, 71, 0.1);',
      },
      elevation4: {
        boxShadow: 'none',
      },
      outlined: {
        boxShadow: '0 4px 8px 0 rgba(19, 37, 71, 0.05)',
      },
    },
    MuiCssBaseline: {
      '@global': {
      body: {
        flip: false,
        direction: direction,
      },
      html: {
          backgroundColor: COLORS.background,
        },
        'html *': {
          fontFamily: 'Yekan Bakh',
        },
      },
    },
  },
});


export default createTheme;

export const COLORS = {
  border: '#e6e6e6',
  background: '#f5f5f5',
  divider: '#eaecef',
  primary: '#2699fb',
  brandLight: '#2699fb',
  primaryDark: '#2699fb',
  secondary: '#2699fb',
  secondaryLight: '#2b4a83',
  secondaryDark: '#21254e',
  link: '#23457f',
  label: '#999999',
  data: '#333333',
  chipBackground: '#eeeeee',
  buttonBackground: '#FAFAFA',
  labelHover: '#666666',
  progressStart: '#00a03d',
  progressMiddle: '#FF9900',
  progressFinished: '#FF2152', //#a0003d
  danger: '#FF2152',
  iconColor: '#ccc',
  dividerCutColor: '#e8e9eb',
  dividerCutColorMobile: '#ecedef',
  detected: '#0098ff',
  confirmed: '#00a03d',
  successMain: '#00a03d',
  successLight: '#ccecd8',
  errorLight: '#ffeeee',
  veryLightPink: '#cccccc'
  // '#0098FF' blue
  // '#FF9900' orange
  // '#cccccc'
}