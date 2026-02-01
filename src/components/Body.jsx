import { useEffect, useState } from 'react'; // 1. Importamos useState
import '../css/Body.css';

function Body() {

  const [personajes, setPersonajes] = useState([]);
  const [detallePersonaje, setDetallePersonaje] = useState(null);
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

  const getCardSelect = (e) => {
    e.preventDefault();
    const id = e.currentTarget.dataset.id;


    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then(res => res.json())
      .then(data => {
        setDetallePersonaje(data);
      })
      .catch(err => console.error("Error al obtener detalle:", err));
  };

  return (
    <section className="content">

      <div className="show">

        <div className='CardInfo'>
          {detallePersonaje ? (
            <div className="card-detail">
              <div className="detail-image" style={{ backgroundImage: `url(${detallePersonaje.image})` }}></div>

              <div className="detail-data">
                <h2>{detallePersonaje.name}</h2>
                <div className="info-grid">
                  <p><strong>Status:</strong> <span className={detallePersonaje.status.toLowerCase()}>{detallePersonaje.status}</span></p>
                  <p><strong>Species:</strong> {detallePersonaje.species}</p>
                  <p><strong>Gender:</strong> {detallePersonaje.gender}</p>
                  <p><strong>Origin:</strong> {detallePersonaje.origin.name}</p>
                  <p><strong>Location:</strong> {detallePersonaje.location.name}</p>
                  <p><strong>Episodes:</strong> {detallePersonaje.episode.length}</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="empty-state">Selecciona un personaje para ver el detalle</div>
          )}
        </div>

      </div>
      <div className="contentCards">

        {personajes.map((item, index) => (
          <a className="card-link" key={index} data-id={item[0]} onClick={getCardSelect} >
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