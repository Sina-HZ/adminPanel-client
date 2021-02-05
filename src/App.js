import { StylesProvider, createGenerateClassName, jssPreset } from '@material-ui/styles';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { create } from 'jss';
import rtl from 'jss-rtl';
import './App.css';
import createTheme from './theme';
import { CssBaseline, Typography } from '@material-ui/core';
import Scaffold from './Scaffold';

const generateClassName = createGenerateClassName();


const App = ({ direction }) => {
  const theme = createTheme(direction);

  const jss = direction === 'rtl' ? { jss: create({ plugins: [...jssPreset().plugins, rtl()] }) } : undefined;


  return (
    <StylesProvider {...jss} generateClassName={generateClassName}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Scaffold />
      </MuiThemeProvider>
    </StylesProvider>
  );
}

export default App;
