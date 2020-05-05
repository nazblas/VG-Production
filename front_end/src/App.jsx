import React from 'react';
import './App.css';
import { withNamespaces } from 'react-i18next';
import Main from './containers/Main/Main.jsx';
import { storeDataToSessionStorage } from './api/session_storage.js';

function App({ t }) {
    storeDataToSessionStorage();   
    return (
        <div className="App">
            <Main/>
        </div>
      );
  };

export default withNamespaces()(App);
