import React from 'react';
import {ThemeProvider} from 'styled-components';

import Login from './src/pages/Login';
import Type from './src/pages/Type';
import Car from './src/pages/Car';
import Payment from './src/pages/Payment';
import Ride from './src/pages/Ride';

import theme from './src/theme/theme';
import Home from './src/pages/Home';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
};

export default App;
