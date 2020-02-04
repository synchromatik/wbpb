import React from 'react';
import Map from 'pigeon-maps';
import Overlay from 'pigeon-overlay';
import PBMarker from '../../images/map-icon.png';
// // Initial location of pb studio
// const InitialState = {
//   viewport: {
//     latitude: 44.819406,
//     longitude: 20.452809,
//     zoom: 17.8,
//     width: '100%',
//     height: 400,
//     mapStyle: 'mapbox://styles/mapbox/streets-v11',
//   },
// };

function Mapa() {
  return (
    <Map
      center={[44.819406, 20.452809]}
      zoom={17.8}
      height={400}
    >
      <Overlay
        anchor={[44.819406, 20.452809]}
        offset={[43, 39]}
      >
        <img src={PBMarker} width={60} height={96} alt="PB Tattoo" />
      </Overlay>
    </Map>
  );
}

// function Map() {
//   const [gdesam] = useState(InitialState);
//   return (
//     <>
//       <footer className="footer">
//         <MapGL
//           style={{ width: '100%', height: '400px' }}
//           mapStyle="mapbox://styles/mapbox/light-v9"
//           accessToken={MAPBOX_ACCESS_TOKEN}
//           // eslint-disable-next-line react/jsx-props-no-spreading
//           {...gdesam.viewport}
//         />
//       </footer>
//     </>
//   );
// }

export default Mapa;
