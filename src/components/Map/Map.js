import React from 'react';
import Map from 'pigeon-maps';
import Overlay from 'pigeon-overlay';
import PBMarker from '../../images/map-icon.png';

const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1Ijoic3luY2hyb21hdGlrIiwiYSI6ImNrMjViajZxNTEyMG4zbm1xNG9oNzBldmUifQ.7LKfs33uDUzLePh054m3LA';

const mapbox = (mapboxId, accessToken) => (x, y, z, dpr) => `https://api.mapbox.com/styles/v1/mapbox/${mapboxId}/tiles/256/${z}/${x}/${y}${dpr >= 2 ? '@2x' : ''}?access_token=${accessToken}`;

const providers = {
  streets: mapbox('streets-v10', MAPBOX_ACCESS_TOKEN),
  satellite: mapbox('satellite-streets-v10', MAPBOX_ACCESS_TOKEN),
  outdoors: mapbox('outdoors-v10', MAPBOX_ACCESS_TOKEN),
  light: mapbox('light-v9', MAPBOX_ACCESS_TOKEN),
  dark: mapbox('dark-v9', MAPBOX_ACCESS_TOKEN),
};

const initialMapState = {
  center: [44.819406, 20.452809],
  zoom: 17.8,
  provider: 'streets',
  metaWheelZoom: false,
  twoFingerDrag: false,
  animate: true,
  animating: false,
  zoomSnap: true,
  mouseEvents: true,
  touchEvents: true,
  minZoom: 1,
  maxZoom: 18,
  dragAnchor: [48.8565, 2.3475],
};

function Mapa() {
  const {
    center,
    zoom, provider,
    metaWheelZoom,
    twoFingerDrag,
    zoomSnap,
    mouseEvents,
    touchEvents,
    minZoom,
    maxZoom,
  } = initialMapState;
  return (
    <Map
      limitBounds="edge"
      center={center}
      zoom={zoom}
      provider={providers[provider]}
      dprs={[1, 2]}
      metaWheelZoom={metaWheelZoom}
      twoFingerDrag={twoFingerDrag}
      zoomSnap={zoomSnap}
      mouseEvents={mouseEvents}
      touchEvents={touchEvents}
      minZoom={minZoom}
      maxZoom={maxZoom}
      attribution={null}
      defaultWidth={600}
      height={400}
      boxClassname="pigeon-filters"
    >
      <Overlay
        anchor={[44.819406, 20.452809]}
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
