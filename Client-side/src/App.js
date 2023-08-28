import React, { useState } from 'react';
import { Container, Col } from 'react-bootstrap';
import { Brightness4, WbSunny } from '@material-ui/icons';
import Map from './components/Map';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <div className={`App ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <header style={{ width: "100%", display: "flex", justifyContent: "center" }} className="App-header">
        <h1>Star Wars Entity Map</h1>
      <button className={`mode-toggle-btn ${isDarkMode ? 'dark-mode' : 'light-mode'}`} onClick={toggleMode}>
        {isDarkMode ? <Brightness4 className="icon" /> : <WbSunny className="icon" />}
      </button>
      </header>
      <main className="main-content">
        <Container fluid>
          <Col xs={12} lg={12} className="map-col">
            <Map />
          </Col>
        </Container>
      </main>
    </div>
  );
}

export default App;
