import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Main from './Main';
import reportWebVitals from './reportWebVitals';
import { createTheme } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import MainRouter from './Routes/MainRouter';
import { Provider } from 'react-redux';
import store from './Redux/store';
import { ThemeProvider } from '@mui/joy';

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: '#11cb5f',
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
      <MainRouter>
        <ThemeProvider theme={theme}>
          <Main />
        </ThemeProvider>
      </MainRouter>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
