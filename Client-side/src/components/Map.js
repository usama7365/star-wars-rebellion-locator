import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { Icon } from "leaflet";
import axios from "axios";
import locationImg from "../assets/location-icon.png";
import "leaflet/dist/leaflet.css";
import { useDispatch, useSelector } from "react-redux";
import { entityDataAction } from "../Actions/entityAction";
import EntityCard from "./EntityCard";

function Map() {
  const response = useSelector((state) => state.entityData.data);
  const [selectedEntity, setSelectedEntity] = useState(null);
  const [locations, setLocations] = useState([]);
  const dispatch = useDispatch();

  console.log(response, "res");

  const locationIcon = new Icon({
    iconUrl: locationImg,
    iconSize: [32, 32],
  });

  const handleMarkerClick = (id) => {
    dispatch(entityDataAction(id));
    setSelectedEntity(id);
  };

  useEffect(() => {
    async function fetchLocations() {
      try {
        const response = await axios.get("http://localhost:5000/api/secret");
        if (Array.isArray(response.data.locations)) {
          setLocations(response.data.locations);
        }
      } catch (error) {
        console.error("Error fetching locations:", error);
      }
    }

    fetchLocations();
  }, [response]);




  return (
    <>
    <div className="flex flex-col lg:flex-row  overflow-x-hidden relative">
      <div className="w-screen">
        <MapContainer
          center={[0, 0]}
          zoom={2}
          className="h-96 lg:h-screen w-full z-0 ">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {locations.map((location) => (
            <Marker
              key={location.id}
              position={[location.lat, location.long]}
              eventHandlers={{
                click: () => handleMarkerClick(location.id),
              }}
              icon={locationIcon}
            />
          ))}
        </MapContainer>
      </div>

 
    </div>
         <div className=" absolute bottom-0 left-0 right-0 pb-4">
         {selectedEntity && <EntityCard selectedEntity={response} />}
         </div>
         </>
  );
}

export default Map;
