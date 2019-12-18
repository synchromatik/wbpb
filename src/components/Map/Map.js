import React, { useState } from 'react';
import MapGL from '@urbica/react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';


// Initial location of pb studio
const InitialState = {
  viewport: {
    latitude: 44.819406,
    longitude: 20.452809,
    zoom: 17.8,
    width: '100%',
    height: 400,
    mapStyle: 'mapbox://styles/mapbox/streets-v11',
  },
};

function Map() {
  const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1Ijoic3luY2hyb21hdGlrIiwiYSI6ImNrMjViajZxNTEyMG4zbm1xNG9oNzBldmUifQ.7LKfs33uDUzLePh054m3LA';
  const [gdesam] = useState(InitialState);
  return (
    <>
      <footer className="footer">
        <MapGL
          style={{ width: '100%', height: '400px' }}
          mapStyle="mapbox://styles/mapbox/light-v9"
          accessToken={MAPBOX_ACCESS_TOKEN}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...gdesam.viewport}
        />
      </footer>
    </>
  );
}

export default Map;
