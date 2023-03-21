import React, { useContext } from 'react';

import { AccesProvider, AccesContext } from './context/AccesContext';

import Structure from './components/Structure/Structure';

function App() {
  return (
    <AccesProvider>
      <Structure />
    </AccesProvider>
  );
}

export default App;
