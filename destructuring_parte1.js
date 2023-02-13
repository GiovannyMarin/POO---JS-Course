//destructuring

let frutas = ["Abacaxi", "Uva", "Pera", "Mamao"];

//let [a, b, , c] = frutas; // pular indice

let [a, b, c, d, e = "Marcos"] = frutas;

console.log(a, b, c, e);

let coisas = [
	["Abacaxi", "Uva", "Pera", "Mamao"],
	["Jose", "Maria"],
];

let [, [, nome]] = coisas; // pegando maria dentro do array bidimensional
let [[, , pera]] = coisas;

console.log(nome, pera);
