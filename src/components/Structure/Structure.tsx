import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom';

import { AccesProvider, AccesContext } from '../../context/AccesContext';
import { ImagesProvider, ImagesContext } from '../../context/ImagesContext';

import Login from '../Login/Login';
import Home from '../Home/Home';

// import Seccion1 from '../others/Seccion1';
// import Seccion2 from '../others/Seccion2';


function PublicRoutes() {
  const { access } = useContext(AccesContext);
  const { logo } = useContext(ImagesContext);
  const navigate = useNavigate();

  return access ? <Navigate replace to="/home" /> : <Login logo={logo} />;
}

interface PrivateRouteProps {
  element: React.ReactNode;
}

function PrivateRoute({ element }: PrivateRouteProps) {
  const { access } = useContext(AccesContext);
  const navigate = useNavigate();

  return access ? <>{element}</> : <Navigate replace to="/" />;
}

function Structure() {
  return (
    <AccesProvider>
      <ImagesProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<PublicRoutes />} />
            <Route path="/home" element={<PrivateRoute element={<Home />} />} />
            {/*
            others components
            <Route path="/seccion1" element={<PrivateRoute element={<Seccion1 />} />} />
            <Route path="/seccion2" element={<PrivateRoute element={<Seccion2 />} />} />
            */}
            <Route path="*" element={<Navigate replace to="/" />} />
          </Routes>
        </BrowserRouter>
      </ImagesProvider>
    </AccesProvider>
  );
}

export default Structure;
