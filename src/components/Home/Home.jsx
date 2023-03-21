import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { AccesContext } from '../../context/AccesContext';
import { ImagesContext } from '../../context/ImagesContext';

import Itiker from '../Api/Itiker';


export default function Home() {
  const { setAccess } = useContext(AccesContext);
  const navigate = useNavigate();
  const { logo } = useContext(ImagesContext); 

  const handleLogout = () => {
    setAccess(false);
    navigate('/');
  };

  return (
    <section className='dashboard'>
      <header className='dashboard__header'>
        <div className='dashboard__header--title'>
          <img src={logo} alt="Grupo ASD" title="Grupo ASD" />
          <h1>Hola!</h1>
        </div>
        <div className='dashboard__header--aside'>
          <button onClick={handleLogout}>Log out</button>
        </div>
      </header>
      <article className='dashboard__article'>
        <Itiker />
      </article>
    </section>
  );
}
