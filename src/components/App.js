import React, { Suspense } from 'react';
import { StateProvider } from './state';
import AppLoader from './Loader';

function App() {
  const initialState = {

  };
  const reducer = {

  };
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <Suspense fallback={<AppLoader />}>
        <div className="wrapper">
          <h1>App</h1>
        </div>
      </Suspense>
    </StateProvider>
  );
}

export default App;
