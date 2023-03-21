import React, { createContext, useState } from 'react';

export const AccesContext = createContext();

export const AccesProvider = ({ children }) => {
  const [access, setAccess] = useState(false);

  return (
    <AccesContext.Provider value={{ access, setAccess }}>
      {children}
    </AccesContext.Provider>
  );
};
