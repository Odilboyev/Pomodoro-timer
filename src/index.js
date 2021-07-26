import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SettingsContentProvider from './Context/settingsContent';

ReactDOM.render(
  <SettingsContentProvider>
    <App />
  </SettingsContentProvider>,
  document.getElementById('root')
);
