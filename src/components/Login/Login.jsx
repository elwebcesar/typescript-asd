import React, { useState, useContext } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { mock } from './mockData';

import { AccesContext } from '../../context/AccesContext';

import Modal from '../Modal/Modal';


const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .required('Email es requerido')
    .max(25, 'Email no debe exceder los 25 caracteres')
    .min(3, 'Email debe tener al menos 3 caracteres')
    .email('Email debe ser un correo con formato válido'),
  password: Yup.string()
    .required('Password es requerida')
    .max(10, 'Password no debe exceder los 10 caracteres')
    .min(8, 'Password debe tener al menos 8 caracteres')
    .matches(/^(?=.*[A-Z]).+$/, 'Password debe tener al menos una mayúscula')
})

export default function Login(props) {
  const initialValues = { email: '', password: '' };
  const { setAccess } = useContext(AccesContext);

  console.log(mock)

  const handleSubmit = (values) => {
    // verify access
    const isValidMock = JSON.stringify(values) === JSON.stringify(mock);
  
    // isValidMock ? console.log('El formulario cumple con el mock') : setModalNoAccess(true);

    // if (isValidMock) {
    //   console.log('El formulario cumple con el mock');
    //   setAccess(true); // update value access
    // } else {
    //   setModalNoAccess(true); // active modal
    // }

    isValidMock ? setAccess(true) : setModalNoAccess(true);
  }

  // Modal
  const [modalNoAccess, setModalNoAccess] = useState(false);

  const handleCloseModalNoAccess = () => {
    setModalNoAccess(false);
  }


  return (
    <>
      <div className="full-center-content background-gradient">
        <div className="login">
          <header className="login__header">
            <img src={props.logo} alt="Grupo ASD" title="Grupo ASD" />
          </header>
          <Formik
            initialValues={initialValues}
            validationSchema={LoginSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched, handleChange }) => (
              <Form>
                <h1>Bienvenido</h1>
                
                <label>Email</label>
                <Field type="text" name="email" className={errors.email && touched.email ? "errorValidate" : ""} onChange={handleChange} />
                <ErrorMessage name="email" component={({ children }) => <div className="errorValidate">{children}</div>} />

                <label>Password</label>
                <Field type="password" name="password" className={errors.password && touched.password ? "errorValidate" : ""} onChange={handleChange} />
                <ErrorMessage name="password" component={({ children }) => <div className="errorValidate">{children}</div>} />

                <button type="submit">Log in</button>

                <p>elwebcesar@gmail.com<br />Cesar2023*</p>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      {
      modalNoAccess
      && 
      <Modal
        message={'<h3>Lo sentimos :(</h3><p>El Email o Password no son correctos</p>'}
        onClose={handleCloseModalNoAccess}
      />
      }
    </>
  );
}
