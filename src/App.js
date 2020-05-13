import React, {Fragment, useState, useEffect} from 'react';
import Header from './components/Header'
import Formulario from './components/Formulario'

function App() {

  //definir categoria y noticias
  const [categoria, guardarCategoria] = useState('')
  const [noticias, guardarNoticias] = useState([])

  //consultar la API
  useEffect( () => {
      const consultarAPI = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=499a5c1557ce4d2ea761e7ebe8f8a4c1`
    
        const respuesta = await fetch(url)
        const noticias = await respuesta.json()
        guardarNoticias(noticias.articles)
      }
    consultarAPI()

  }, [categoria])

  return (
    <Fragment>
      <Header titulo="Buscador de Noticias"/>

      <Formulario
        guardarCategoria={guardarCategoria}
      />
      
    </Fragment>
  );
}

export default App;
