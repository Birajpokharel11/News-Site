import 'react-perfect-scrollbar/dist/css/styles.css';

import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';

import theme from './theme';

import Routes from './routes';
import { loadUserStart } from './store/auth/auth.actions';
import setAuthToken from './utils/setAuthToken';
import { useDispatch } from 'react-redux';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUserStart());
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes />
      </Router>
    </ThemeProvider>
  );
}

export default App;
