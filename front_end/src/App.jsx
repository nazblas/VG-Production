import React from 'react';
import './App.css';
//import i18n from './i18n';
import { withNamespaces } from 'react-i18next';
import Searchbar from './containers/Searchbar/Searchbar.jsx';
import Main from './containers/Main/Main.jsx';

function App({ t }) {
    return (
        <div className="App">
            <Searchbar/>
            <Main/>
        </div>
      );
  };

export default withNamespaces()(App);
