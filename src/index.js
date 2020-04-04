import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core'
import App from './App';
import grey from '@material-ui/core/colors/grey'

const theme = createMuiTheme({
  palette: {
    primary: grey
  }
})

console.log(theme)

ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
