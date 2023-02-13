let a1 = {
	cor: "Branco",
	modelo: "Aribus",
	levantarVoo: function () {
		console.log("levantar voo");
	},
};

let AviaoF = function () {
	(this.cor = "azul"),
		(this.modelo = "Dinus"),
		(this.levantarVoo = function () {
			console.log("levantar voo");
		});
};

let a2 = new AviaoF();

class AviaoC {
	constructor() {
		this.cor = "vermelho";
		this.modelo = "Embrae E-jets";
	}

	levantarVoo() {
		console.log("levanta voo");
	}
}

let a3 = new AviaoC();

console.log(a1);
console.log(a2);
console.log(a3);
