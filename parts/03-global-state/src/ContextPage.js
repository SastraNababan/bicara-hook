
import React, { useState, createContext, useContext } from "react";
import "./App.css";
import AppContext from './AppContext'
const {
  LangContext,
  ThemeContext,
  LangProvider,
  ThemeProvider
} = AppContext;

// When there's no Provider, the defaultValue argument is used for function createContext.

function ContextPage() {
  return (
    <LangProvider>
      <ThemeProvider>
        <Header />
        <Content/>
        <Footer />
      </ThemeProvider>
    </LangProvider>
  );
}

function Header() {
  return (
      <>
        <i>-- Header --</i>
        <h3>Header </h3>
        <Menu />
      </>
  )
}

function Menu() {
  const langState = useContext(LangContext)
  const themeState = useContext(ThemeContext)
  return (
    <div>
      <ul>
        <li>Home</li>
        <li>Products</li>
        <li>
          Languange  
          <select onChange={langState.changeLang} value={langState.lang}>
            <option value="🇬🇧"> 🇬🇧 English </option>
            <option value="🇮🇩"> 🇮🇩 Indonesia </option>
          </select>
        </li>
        <li>
          Theme : {themeState.theme} 
          <select onChange={themeState.changeTheme} value={themeState.state}>
            <option value="light"> Light </option>
            <option value="dark"> Dark </option>
          </select>
        </li>
      </ul>
    </div>
  );
}
 
function Content() {
  return(
    <>
      <i>-- Content --</i>
      <h3> 🤙 Hello React Context </h3>
    </>
  )
}

function Footer() {
 const langState = useContext(LangContext);
 const themeState = useContext(ThemeContext); 
  return (
    <>
      <i>-- Footer --</i>
      <p>Languange : {langState.lang}  |  Theme : {themeState.theme}</p>
    </>
  );
}
 
export default ContextPage;
