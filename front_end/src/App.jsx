import React from 'react';
import './App.css';
//import i18n from './i18n';
import { withNamespaces } from 'react-i18next';
import Searchbar from './containers/Searchbar/Searchbar.jsx';
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
