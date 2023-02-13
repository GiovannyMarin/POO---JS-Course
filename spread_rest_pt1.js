let tituloArtigo = "como utilizar o operador rest/spread";

console.log(tituloArtigo);
console.log([...tituloArtigo]);

//arrays

let listaSeries1 = ["Wandinha", "Devil May Cry"];
let listaSeries2 = ["Olter Wilds", "Silento"];
let lista = [...listaSeries1, ...listaSeries2];

console.log(listaSeries1, listaSeries2, lista);

//objetos

let pessoa = { nome: "joao", idade: 23 };
let clone = { endereco: "eend, 23", ...pessoa };

console.log(clone);
