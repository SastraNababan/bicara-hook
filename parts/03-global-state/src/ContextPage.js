import React,{ useContext } from "react";
import AppContext from './AppContext'
import "./App.css";

const { 
  LangContext, 
  LangProvider,
  ThemeContext,
  ThemeProvider 
} = AppContext;

function LangPage() {
  return (
    <LangProvider>
      <ThemeProvider>
        <Header />
        <Content />
        <Footer />
      </ThemeProvider>
    </LangProvider>
  );
}

function Header() {
  return (
    <>
      <i>-- Header --</i>
      <Menu />
    </>
  );
}

function Menu() {
  const props = useContext(LangContext);
  const themeProps = useContext(ThemeContext)
  console.log('menu render')
  return (
    <div>
      <ul>
        <li>Home</li>
        <li>Products</li>
        <li>
          Languange
          <select value={props.lang} onChange={props.changeLang}>
            <option value="🇬🇧"> 🇬🇧 English </option>
            <option value="🇮🇩"> 🇮🇩 Indonesia </option>
          </select>
        </li>
        <li>
          Theme
          <select value={themeProps.theme} onChange={themeProps.changeTheme}>
            <option value="light"> Light </option>
            <option value="dark"> Dark </option>
          </select>
        </li>
      </ul>
    </div>
  );
}

function Content() {
  console.log("content render");
  return (
    <>
      <i>-- Content --</i>
      <h3> 🤙 Hello React Context </h3>
    </>
  );
}

function Footer() {
  const props = useContext(LangContext);
  const themeProps = useContext(ThemeContext);
  console.log("footer render")
  return (
    <>
      <i>-- Footer --</i>
      <p>Languange : {props.lang} </p>
      <p>Theme : {themeProps.theme} </p>
    </>
  );
}

export default LangPage;
