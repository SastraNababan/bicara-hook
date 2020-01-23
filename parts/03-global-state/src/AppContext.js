import React,{useState,createContext} from 'react';

function AppContext() {
  const LangContext = createContext("en");
  const ThemeContext = createContext("light");

  const LangProvider = (props) => {
    const [lang, setLang] = useState("🇮🇩");
    const changeLang = e => {
      setLang(e.target.value);
    };
    const langState = {
      lang: lang,
      changeLang: changeLang
    };
    return(
      <LangContext.Provider value={langState}>
        {props.children}
      </LangContext.Provider>
    );
  }

  const ThemeProvider = (props) => {
    const [theme, setTheme] = useState("Light");
    const changeTheme = e => {
      setTheme(e.target.value);
    };

    const themeState = {
      theme: theme,
      changeTheme: changeTheme
    };    
    return(
      <ThemeContext.Provider value={themeState}>
        {props.children}
      </ThemeContext.Provider>
    );
  }
  
  return {
    LangContext,
    ThemeContext,
    LangProvider,
    ThemeProvider
  };
}

export default AppContext();
