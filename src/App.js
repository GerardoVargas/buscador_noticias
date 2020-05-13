import React, {Fragment, useState} from 'react';
import Header from './components/Header'
import Formulario from './components/Formulario'

function App() {

  //definir categoria y noticias
  const [categoria, guardarCategoria] = useState('')


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
