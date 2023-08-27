import React from 'react';
import { Container, Col } from 'react-bootstrap';
import Map from './components/Map';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <header style={{width:"100%", display:"flex",justifyContent:"center"}} className="App-header">
        <h1>Star Wars Entity Map</h1>
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
