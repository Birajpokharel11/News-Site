import 'react-perfect-scrollbar/dist/css/styles.css';

import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';

import theme from './theme';
import Routes from './routes';

import { loadUserStart } from './store/auth/auth.actions';

function App() {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(loadUserStart());
  // }, []);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes />
      </Router>
    </ThemeProvider>
  );
}

export default App;
