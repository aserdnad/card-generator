import "./style.css";
import "./assets/img/4geeks.ico";

// let pintaDeCarta = [
//   '<i class="fas fa-heart"></i><i class="fas fa-heart"></i>',
//   '<i class="fab fa-first-order"></i><i class="fab fa-first-order"></i>',
//   ' <i class="fas fa-spa"></i> <i class="fas fa-spa"></i>',
//   '<i class="fas fa-tree"></i><i class="fas fa-tree"></i>'
// ];

window.onload = function() {
  let pintaDeCarta = [
    '<i class="fas fa-heart fa-7x fa-color"></i>',
    '<i class="fab fa-first-order fa-7x fa-color"></i>',
    ' <i class="fas fa-spa fa-7x"></i>',
    '<i class="fas fa-tree fa-7x"></i>'
  ];
  let numeroDeCarta = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  let cartaNumero = {
    0: "A",
    1: "2",
    2: "3",
    3: "4",
    4: "5",
    5: "6",
    6: "7",
    7: "8",
    8: "9",
    9: "10",
    10: "J",
    11: "Q",
    12: "K"
  };

  const numerosRandom = (numero, pinta) => {
    let arregloRandom = [];
    arregloRandom.push(Math.floor(Math.random() * numero.length));
    arregloRandom.push(Math.floor(Math.random() * pinta.length));
    return arregloRandom;
  };

  const crearCarta = (objCarta, pintaCarta, arrRandom) => {
    let carta = [];
    carta.push(objCarta[arrRandom[0]]);
    carta.push(pintaCarta[arrRandom[1]]);
    return carta;
  };

  const insertarCarta = arregloFinal => {
    let insertar = document.querySelector(".contenido");

    if (insertar.childElementCount !== 0) {
      insertar.removeChild(insertar.childNodes[0]);
    }

    let divCarta = document.createElement("div");
    divCarta.className = "carta";

    let pintaArriba = document.createElement("div");
    pintaArriba.className = "arriba";
    pintaArriba.innerHTML = arregloFinal[1];
    divCarta.appendChild(pintaArriba);

    let contenido1 = document.createElement("h1");
    contenido1.innerHTML = arregloFinal[0];
    divCarta.appendChild(contenido1);

    let pintaAbajo = document.createElement("div");
    pintaAbajo.className = "abajo";
    pintaAbajo.innerHTML = arregloFinal[1];
    divCarta.appendChild(pintaAbajo);

    insertar.appendChild(divCarta);
  };

  let numeros = numerosRandom(numeroDeCarta, pintaDeCarta);
  let carta = crearCarta(cartaNumero, pintaDeCarta, numeros);
  insertarCarta(carta);

  document.querySelector("#cambiar").addEventListener("click", () => {
    let numeros = numerosRandom(numeroDeCarta, pintaDeCarta);
    let carta = crearCarta(cartaNumero, pintaDeCarta, numeros);
    insertarCarta(carta);
  });

  setInterval(() => {
    let numeros = numerosRandom(numeroDeCarta, pintaDeCarta);
    let carta = crearCarta(cartaNumero, pintaDeCarta, numeros);
    insertarCarta(carta);
  }, 10000);
};
