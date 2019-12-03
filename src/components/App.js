import React, { Suspense } from 'react';
import { StateProvider } from './state';
import Header from './Header/Header';
import Gallery from './Gallery/Gallery';
import Contact from './Contact/Contact';
import AppLoader from './Loader';
import '../styles/main.scss';

function App() {
  const initialState = {
    modal: {
      showModal: false,
    },
    imageIndex: 0,
    images: [],
    lang: 'en',
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
      case 'updateLang':
        return {
          ...state,
          lang: action.newLang,
        };
      default:
        return state;
    }
  };
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <Suspense fallback={<AppLoader />}>
        <div className="wrapper">
          <Header />
          <Gallery />
          <Contact />
        </div>
      </Suspense>
    </StateProvider>
  );
}

export default App;
