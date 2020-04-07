import React from 'react';
import logo from './logo.svg';
import './App.css';
import i18n from './i18n';


import { withNamespaces } from 'react-i18next';
//'t' funct is to change languages
function App({ t }) {

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  }

  return (
    <div className="App">
      <header className="App-header">
      {/*This two buttons change language*/}
      <button onClick={() => changeLanguage('ua')}>ua</button>
      <button onClick={() => changeLanguage('en')}>en</button>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        { /* there you can see 't' func to load locales from 'locales' folder
        you also can write your own localization at file 'translation.json'
        at en or ua folders -->*/}
          {t("welcomeMessage")}
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("learnReactButton")}
        </a>
      </header>
    </div>
  );
}

export default withNamespaces()(App);
