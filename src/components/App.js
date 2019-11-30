import React, { Suspense } from 'react';
import { StateProvider } from './state';
import Gallery from './Gallery/Gallery';
import AppLoader from './Loader';
import '../styles/main.scss';


function App() {
  const initialState = {
    modal: {
      showModal: false,
    },
    imageIndex: 0,
    images: [],
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'updateModal':
        return {
          ...state,
          modal: action.newModal,
          imageIndex: action.newImageIndex,
        };
      case 'updateActiveImage':
        return {
          ...state,
          imageIndex: action.newImageIndex,
        };
      case 'loadImages':
        return {
          ...state,
          images: action.newImages,
        };
      default:
        return state;
    }
  };
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <Suspense fallback={<AppLoader />}>
        <div className="wrapper">
          <h1>App root</h1>
          <Gallery />
        </div>
      </Suspense>
    </StateProvider>
  );
}

export default App;
