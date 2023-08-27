import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import { Icon } from 'leaflet';
import axios from 'axios';
import EntityDetails from './EntityDetails';
import locationImg from '../assets/location-icon.png';
import 'leaflet/dist/leaflet.css';



function Map() {
  const [selectedEntity, setSelectedEntity] = useState(null);
  const [locations, setLocations] = useState([]);

  const locationIcon = new Icon({
    iconUrl: locationImg,
    iconSize: [32, 32],
  });


  //  when trying to fetch the secret message from the URL https://github.com/Muhammad-GH/starwars-frontend/data/secret.json.
//  IT show 404 Not Found" error

  const fetchEntityDetailsForMarker = async (id) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/entities/${id}`);
      console.log('Entity details response:', response.data);
      setSelectedEntity(response.data); 
    } catch (error) {
      console.error('Error fetching entity details for marker:', error);
    }
  };
  
  
  useEffect(() => {
    async function fetchLocations() {
      try {
        const response = await axios.get('http://localhost:5000/api/secret');
        if (Array.isArray(response.data.locations)) {
          setLocations(response.data.locations);
        }
      } catch (error) {
        console.error('Error fetching locations:', error);
      }
    }

    fetchLocations();
  }, []);

  return (
    <div style={{ display: 'flex', width: '100%' }}>
    <div style={{ flex: '1' }}>
      <MapContainer center={[0, 0]} zoom={2} style={{ height: '500px' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {locations.map((location) => (
          <Marker
            key={location.id}
            position={[location.lat, location.long]}
            eventHandlers={{
              click: () => {
                fetchEntityDetailsForMarker(location.id);
              },
            }}
            icon={locationIcon}
          />
        ))}
      </MapContainer>
    </div>
    <div style={{ flex: '1', padding:" 110px" }}>
      <EntityDetails selectedEntity={selectedEntity} />
    </div>
  </div>
  );
}

export default Map;