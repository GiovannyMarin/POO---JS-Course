/*let quadrado = (x) => x * x; //return implicito
console.log(quadrado(2));*/

/*let parOuImpar = (numero) => {
	if (numero % 2 === 0) {
		return "par";
	} else {
		return "impar";
	}
};*/

let parOuImpar = (numero) => (numero % 2 === 0 ? "par" : "impar"); // ternario

console.log(parOuImpar("2"));
