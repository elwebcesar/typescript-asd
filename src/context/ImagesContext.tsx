import React, { createContext } from 'react';
import logo from '../assests/logo.svg';

interface ImagesProviderProps {
  children: React.ReactNode;
}

export const ImagesContext = createContext<{ logo: string }>({ logo });

export const ImagesProvider = ({ children }: ImagesProviderProps) => {
  return (
    <ImagesContext.Provider value={{ logo }}>
      {children}
    </ImagesContext.Provider>
  );
};
