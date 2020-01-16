import React from 'react'
import logo from './logo.svg';
const info = {
  title:"",
  youtube:""
} 
function Layout(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1> React Hook #1 - Component State </h1>
      </header>
      <main className="App-body">{props.children}</main>
      <footer className="App-footer">
        <div className="links">
          <a href="https://www.youtube.com/watch?v=UgAkn8IsEkk&sub_confirmation=1">
            <img
              alt=""
              width={24}
              height={24}
              src="https://img.icons8.com/color/50/000000/youtube-squared.png"
            ></img>
            Youtube
          </a>

          <a href="https://github.com/SastraNababan/bicara-hook">
            <img
              width={24}
              height={24}
              src="https://img.icons8.com/metro/26/000000/github.png"
              alt=""
            ></img>
            Github
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Layout

