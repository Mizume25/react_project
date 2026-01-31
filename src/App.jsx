//Import de Componentes
import Header from './components/Header'
import NavMenu from './components/NavMenu';
import Body from './components/Body'
import Container from './components/Container'
//Import de Estilos
import './App.css';
import { useState } from 'react';

function App() {

  //Variable Reactiva
  const [banner, getIDBanner] = useState("B1");

  //Funcion que recibe informacion del hijo
  const typeBanner = (bannerID) => {
    getIDBanner(bannerID);
    console.log("ID recibido, banner usado: ", bannerID)
  };




  return (
    <>
      {/*Componente Container con diseñado con Grid*/}
      <Container>

        <Header bannerID={banner}>{/*Header que recibe props de su elemento hijo y muestra contenido*/}

          <NavMenu typeBanner={typeBanner}></NavMenu>{/*Nav Menu que envia informacion a su elemento padre*/}

        </Header>

        <Body>  </Body>

      </Container>
    </>
  )
}

export default App;
