import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import i18n from './i18n/i18n';
import AppRoutes from './routes/AppRoutes';




const App = () => {
  return (
    <BrowserRouter>
      
      <AppRoutes />

    </BrowserRouter>
  );
};

export default App;
