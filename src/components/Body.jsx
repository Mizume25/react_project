import { useEffect, useState } from 'react'; // 1. Importamos useState
import '../css/Body.css';

function Body() {

  const [personajes, setPersonajes] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(answer => {
        if (!answer.ok) throw new Error(`HTTP error! status: ${answer.status}`);
        return answer.json();
      })
      .then(data => {
    
        const misDatos = data.results.map(p => [p.id, p.name, p.image]);


        setPersonajes(misDatos);
      })
      .catch(error => {
        console.error('Error cargando JSON:', error);
      });
  }, []); 



  return (
    <section className="content">
      
      <div className="show">

        <div className='CardInfo'>

        </div>

      </div>
      <div className="contentCards">

        {personajes.map((item, index) => (
          <a className="card-link" key={index} data-id={item[0]} >
            <div id="card">
              <div 
                className="image-container" 
                style={{ backgroundImage: `url(${item[2]})` }} 
              ></div>
              <div className="name-container">
                <p>{item[1]}</p> 
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Body;