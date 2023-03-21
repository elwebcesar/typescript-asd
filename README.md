# Prueba técnica para Desarrollador web 
### César Fernández
- [Linkedin](https://www.linkedin.com/in/cesar-fernandez-797436207/")
- Móvil: +57 321 474 1765 (whatsapp)
- Emaill: elwebcesar@gmail.com lists;

## Requerimientos

- Login de acceso por medo de Email y Password (validados).
- Verificación de los datos cumpliendo un mock.
- Presentación de mensaje si la verficación es errónea (En un modal).
- Petición de carga de datos desde la api: [tickers](https://api.wazirx.com/sapi/v1/tickers/24hr")
- Presentación de mensaje si se presenta alguna  falla de la petición (En un modal).
- Posibilidad de volver a solicitar la carga de datos de la api si se presenta alguna falla en la petición.
- Visualización de precarga en modo skeleton.
- Prueba Unitaria
- Diseño libre realizado sin ningún tipo de framework de css.

## Propuesta realizada
La prueba se ha creado en React JS versión 18, utilizando las librerías:
- Formik
- React Router
- Testing Library 

Hook utilizados:
- useContext
- useEffect
- useState

Diseño realizado con scss, usando normalize.css, para formatear los estilos.

## Test (Prueba unitaria)
El proceso priincipal de la presente prueba es el consumo de la api: [tickers](https://api.wazirx.com/sapi/v1/tickers/24hr"), por tal razón es el test elegido, se encuntra estipulado en: **getTickers.test.js**, que se ejecuta con:

`$ npm run test`
