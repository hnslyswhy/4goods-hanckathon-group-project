import { useState } from "react";
import { Link } from "react-router-dom";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import "./Map.scss";

const MAP_API_KEY = process.env.REACT_APP_MAP_API_KEY;

const mapContainerStyle = {
  height: "400px",
  width: "800px",
};

const center = {
  lat: 49.246292,
  lng: -123.116226,
};

function Map({ allOrganizations }) {
  const [selected, setSelected] = useState({});

  const handleClick = (item) => {
    setSelected(item);
  };

  return (
    <LoadScript googleMapsApiKey={MAP_API_KEY}>
      <GoogleMap
        id="marker-example"
        mapContainerStyle={mapContainerStyle}
        zoom={11}
        center={center}
      >
        {allOrganizations.map((org) => {
          return (
            <Marker
              key={org._id}
              position={{
                lat: Number(org.geolocation[0]),
                lng: Number(org.geolocation[1]),
              }}
              onClick={() => handleClick(org)}
            />
          );
        })}

        {selected.location && (
          <InfoWindow
            position={{
              lat: selected.geolocation[0],
              lng: selected.geolocation[1],
            }}
            clickable={true}
            onCloseClick={() => setSelected({})}
          >
            <div className="info-window">
              <img src={selected.image} style={{ width: "10rem" }} />
              <Link to={{
                pathname: `organizations/${selected.accountId}`,
              }}>
                <p>{selected.program_name}</p>
              </Link>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
}

export default Map;
