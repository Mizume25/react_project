import { useEffect } from 'react';
import '../css/NavMenu.css';
function NavMenu(props) {

const {typeBanner} = props;

  //Variable que envia id a elemento padre
  const sendIDBanner = (id) => {
    
  //Foreach de elementos para cambiar todos a blanco
  const botones = document.querySelectorAll('.navMain div');

  botones.forEach(boton => {
    boton.style.backgroundColor = '#e0e0e0'; 
    const texto = boton.querySelector('h3');

    if (texto) texto.style.color = 'black'; 

  });

  //Declaramos Boton activo
  const botonActivo = document.querySelector(`#${id}`);
  
  //Aplicamos estilo de seleccion
  if (botonActivo) {
    botonActivo.style.backgroundColor = 'rgb(11, 167, 0)';
    botonActivo.querySelector('h3').style.color = 'rgb(0, 255, 255)';
  }
    typeBanner(id); 

  };


  

 //Use efect para cargar estilos de botones default
  useEffect(() => {
  (() => {
    //Cargamos el default de los botones
    document.querySelector("#B1")?.style.setProperty('background-color', 'rgb(11, 167, 0)');
    document.querySelector('#B1 > h3')?.style.setProperty('color','rgb(0, 255, 255)');
  })();
  }, []);
 
  

  return (
    <>
    <select name="bannerSelect" id="BS" onChange={(e) => sendIDBanner(e.target.value)}>
        <option value="B1">Banner 1</option>
        <option value="B2">Banner 2</option>
        <option value="B3">Banner 3</option>
        <option value="B4">Banner 4</option>
      </select>
    <nav className='navMain'>

      <div id="B1" onClick={() => sendIDBanner("B1")}>
        <h3>Banner 1</h3>
      </div>

      <div id="B2"onClick={() => sendIDBanner("B2")}>
        <h3>Banner 2</h3>
      </div>

      <div id="B3"onClick={() => sendIDBanner("B3")}>
        <h3>Banner 3</h3>
      </div>

      <div id="B4"onClick={() => sendIDBanner("B4")}>
        <h3>Banner 4</h3>
      </div>

    </nav>
    </>
  )
}

export default NavMenu;