import "../App.css";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Ticket(props) {
  return (
    <div className="Peliculas" id="Ticket">
      <h1>Compra</h1>
      {
        <div className="movie">
          <div className="InformacionCartelera">
            <p>{props.compra.nombre}</p>
            <p>Horario: {props.compra.horario}</p>
           <input type="number" value={props.compra.cantidad} onChange={e=>props.calcular(e.target.value,props.compra)}></input>
            <p>Total:{props.compra.total}</p>
            <Button  variant="danger" onClick={()=>{props.eliminar(props.compra)}}> Cancelar </Button> 
            <Button  variant="success" onClick={()=>{props.comprar(props.compra)}}> Aceptar </Button> 
          </div>
        </div>
      }
    </div>
  );
}

export default Ticket;
