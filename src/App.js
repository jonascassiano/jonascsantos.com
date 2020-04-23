import React, { useEffect } from 'react';
import './App.css';
import Typical from 'react-typical'
import ReactGa from 'react-ga'

function App() {
  useEffect(() => {
    ReactGa.initialize('UA-152578899-1')

    ReactGa.pageview('/')
  }, [])

  const ClickHandler = (name) => {
    ReactGa.event({
      category: name,
      action: 'Clicked'
    })
  }

  return (
    <div className="App">
      <header className="header">
        <nav class="nav">
          <ul>
            <li>
              <button class="nav__toggler nav__toggler--close">
                <span></span>
                <span></span>
              </button>
            </li>
            <li>
              <a aria-current="page" class="" href="/">Home</a>
            </li>
            <li>
              <a href="/projects/">Projects</a></li><li><a href="/about/">About</a>
            </li>
            <li>
              <a href="https://blog.alexdevero.com/" rel="noopener noreferrer" target="_blank">Blog</a>
            </li>
            <li>
              <a href="/contact/">Contact</a>
            </li>
          </ul>
          <button class="nav__toggler nav__toggler--toggle">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
      </header>

      <main className="Main">
        <img
          src="https://avatars1.githubusercontent.com/u/15957868?s=460&u=0c7bfe98e60a74ee427a1d053f3603d0c4848e04&v=4"
          className="Photo shadowed"
          alt="logo"
        />
        <h1>Hi, I'm Jonas dos Santos</h1>
        <p>
          I'm {' '}
          <Typical
            loop={Infinity}
            wrapper="b"
            steps={[
              'a Fullstack Developer 💻',
              1500,
              'a Brazilian student 🇧🇷',
              1500,
              'an Open Sourcer ✅',
              1500,
              "a designer 🖌️ (still trying xD)",
              1500,
              "a dreamer 🚀",
              3000,
            ]}
          />
        </p>
        <div class="icon-wrap flex row">
          <a href="https://github.com/jonascsantos" onClick={() => ClickHandler('github')}>
            <div class="flex shadowed translucent icon">
              <ion-icon name="logo-github"></ion-icon>
            </div>
          </a>
          <a href="https://www.linkedin.com/in/jonascsantos" onClick={() => ClickHandler('linkedin')}>
            <div class="flex shadowed translucent icon">
              <ion-icon name="logo-linkedin"></ion-icon>
            </div>
          </a>
          <a href="https://www.instagram.com/jonas.cass/" onClick={() => ClickHandler('instagram')}>
            <div class="flex shadowed translucent icon">
              <ion-icon name="logo-instagram"></ion-icon>
            </div>
          </a>
          <a href="https://twitter.com/jonascsantos_" onClick={() => ClickHandler('twitter')}>
            <div class="flex shadowed translucent icon">
              <ion-icon name="logo-twitter"></ion-icon>
            </div>
          </a>
          <a href="mailto:jonas.cassiano@hotmail.com" onClick={() => ClickHandler('email')}>
            <div class="flex shadowed translucent icon">
              <ion-icon name="at"></ion-icon>
            </div>
          </a>
        </div>
      </main>
    </div >
  );
}



export default App;
