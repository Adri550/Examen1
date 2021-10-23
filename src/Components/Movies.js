import "../App.css";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Movies(props) {
 
    return (
    <div className="Movies">
      <h1>Cartelera</h1>
      {
          props.peliculas.map((a) =>
      <div className="Peliculas">
        <div className="Imagen">
        <img src={a.url}></img>
         </div>
        <div className="Informacion">
            <p>{a.nombre}</p>
            <p>{a.idioma}</p>
            <p>a.clasificacion</p>
            <p>{a.duracion}</p>
            <div className="btn">
                {a.horarios.map((i,index)=>
                <Button  variant="secondary" key={index} onClick={()=>{props.agregar(a.codigo,i)}}>{i}</Button>
                )}
                </div>
        </div>.
      </div>
  )
      }
      </div>
    );
}


export default Movies;
