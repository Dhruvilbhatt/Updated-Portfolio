import './Styles/App.css';
import Education from './components/Education';
import LandingPage from './components/LandingPage';
import Navbar from './components/Navbar';
import { useEffect, useState } from 'react';
import Tiles from './components/Tiles';
import GM from './components/GM';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Publications from './components/Publications';
import Teachings from './components/Teachings';
import Footer from './components/Footer';
import Modal from './components/Modal_Synaptics';
import UpdatedTiles from './components/UpdatedTiles';

function App() {
  const outofFocusTerminal = () => {
    var prevCursorDiv = document.getElementById("cursor-command-line");

    if (prevCursorDiv) {
      prevCursorDiv.style.display = "none";
    }
  }

  return (
    <div id="app-outer-div" style={{ pointerEvents: "all" }} onClick={outofFocusTerminal}>
      <Footer />
      <Navbar />
      <LandingPage />
      <UpdatedTiles />
      <GM />
      <Education />
      <Experience />
      <Projects />
      <Publications />
      <Teachings />
    </div>
  );
}

export default App;
