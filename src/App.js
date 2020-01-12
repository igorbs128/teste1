import React from 'react';
import { Provider } from 'react-redux'
import {Store} from './store'
import Register from './components/Register/Register'
import Point from './components/PointRegistration/PointRegistration'
import Consult from './components/PointConsult/Consult'

function App() {
  return (
    <Provider store={Store}>
    <div className="App">
      <Register />
      <Point />
      <Consult />
    </div>
    </Provider>
  );
}

export default App;
