import React from 'react';
import { StylesProvider, createGenerateClassName, jssPreset } from '@material-ui/styles';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { create } from 'jss';
import rtl from 'jss-rtl';
import createTheme from './theme';
import { CssBaseline } from '@material-ui/core';
import { SnackbarProvider } from 'notistack';
import Scaffold from './Scaffold';

const generateClassName = createGenerateClassName();


const App = ({ direction }) => {
  const theme = createTheme(direction);

  const jss = direction === 'rtl' ? { jss: create({ plugins: [...jssPreset().plugins, rtl()] }) } : undefined;


  return (
    <StylesProvider {...jss} generateClassName={generateClassName}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <SnackbarProvider maxSnack={3}>
          <Scaffold />
        </SnackbarProvider>
      </MuiThemeProvider>
    </StylesProvider>
  );
}

export default App;
