import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import { render } from "@testing-library/react";
import { Component } from "react";
import Movies from "./Components/Movies";
import Ticket from "./Components/Ticket";
import Swal from "sweetalert2";

class App extends Component {
  constructor() {
    super();
    this.state = {
      compra: {},
      cartelera: [
        {
          codigo: 1,
          nombre: "Halloween Kills",
          idioma: "SUB",
          clasificacion: "C",
          horarios: ["13:00", "17:50", "20:30"],
          duracion: "106 min",
          url: "https://static.cinepolis.com/img/peliculas/37049/1/1/37049.jpg",
        },
        {
          codigo: 2,
          nombre: "Los Locos Addams 2",
          idioma: "ESP",
          clasificacion: "A",
          horarios: ["9:00", "11:30", "13:30"],
          duracion: "93 min",
          url: "https://static.cinepolis.com/img/peliculas/37048/1/1/37048.jpg",
        },
        {
          codigo: 3,
          nombre: "Sin Tiempo Para Morir",
          idioma: "ESP",
          clasificacion: "B",
          horarios: ["11:00", "13:50", "19:40"],
          duracion: "164 min",
          url: "https://static.cinepolis.com/img/peliculas/36792/1/1/36792.jpg",
        },
        {
          codigo: 4,
          nombre: "Venom: Carnage Liberado",
          idioma: "ESP",
          clasificacion: "B",
          horarios: ["10:30", "14:20", "18:30"],
          duracion: "98 min",
          url: "https://static.cinepolis.com/img/peliculas/36934/1/1/36934.jpg",
        },
      ],
    };
  }

  compra = (c, horario) => {
    const t = this.state.cartelera.find((x) => x.codigo === c);
    const arreglo = {
      codigo: t.codigo,
      nombre: t.nombre,
      idioma: t.clasificacion,
      horario: horario,
      duracion: t.duracion,
      cantidad: 0,
      total: 0,
    };
    this.setState({
      ...this.state,
      compra: arreglo,
    });
    var el=document.getElementById("Contenedor");
    el.scrollIntoView();
  };
  calcular = (e, gasto) => {
    let precio = 60;

    const arrayTemp = {
      codigo: gasto.codigo,
      nombre: gasto.nombre,
      idioma: gasto.idioma,
      horario: gasto.horario,
      duracion: gasto.duracion,
      cantidad: e,
      total: e * precio,
    };
    this.setState({
      ...this.state,
      compra: arrayTemp,
    });
  };
  eliminar = (compra) => {
    this.setState({
      ...this.state,
      compra: {},
    });
  };

  comprar = (compraP) => {
    if (compraP.cantidad <= 0) {
      Swal.fire({
        position: "center",
        icon: "warning",
        title: "Ingresa la cantidad de boletos",
        showConfirmButton: false,
        timer: 900,
      });
    } else if (compraP.cantidad > 0) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Disfruta la película ",
        showConfirmButton: false,
        timer: 900,
      });

      this.setState({
        ...this.state,
        compra: {},
      });
    }
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Movies peliculas={this.state.cartelera} agregar={this.compra} />
        <div id="Contenedor">
        <Ticket
          compra={this.state.compra}
          calcular={this.calcular}
          eliminar={this.eliminar}
          comprar={this.comprar}
        />
        </div>
        
      </div>
    );
  }
}

export default App;
