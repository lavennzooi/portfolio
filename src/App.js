import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './App.css';
import Welcome from './components/welcome';
import Nav from './components/nav';
import About from './components/about';
import Expertise from './components/expertise';
import Social from './components/social';
import Experience from './components/experience';
import Projects from './components/projects';
import Avatar from './components/avatar';
import goTop from './assets/icon/straight.png'


function App() {
  const root = document.documentElement;

  useEffect(() => {
    const handleMouseMove = (e) => {
      root.style.setProperty('--mouse-x', e.clientX + 'px');
      root.style.setProperty('--mouse-y', e.clientY + 'px');
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [root.style]);

  return (
    <div id="App">
      <Router>
        <main>
          <div id="backlight"/>
          <aside>
            <div className="Info">
              <Welcome></Welcome>
              <Nav></Nav>
              <Social></Social>
            </div>
          </aside>
          <content>
            <About></About>
            <Expertise></Expertise>
            <Experience></Experience>
            <Projects></Projects>
            <Avatar></Avatar>
          </content>
        </main>
        <HashLink to="/#backlight" smooth={true} duration={500}>
          <img className="goTop" src={[goTop]} alt="Go to Top"/>
        </HashLink>
      </Router>
    </div>
  );
}

export default App;
