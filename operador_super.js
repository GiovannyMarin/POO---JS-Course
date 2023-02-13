class Animal {
	constructor(cor, tamanho, peso) {
		this.cor = cor;
		this.tamanho = tamanho;
		this.peso = peso;
	}

	dormir() {
		console.log("dormi");
	}
}

class Passaro extends Animal {
	constructor(bico, cor, tamanho, peso) {
		super(cor, tamanho, peso);
		this.bico = bico;
	}

	voar() {
		console.log("voei");
	}
}

class Papagaio extends Passaro {
	constructor(sabeFalar, bico, cor, tamanho, peso) {
		super(bico, cor, tamanho, peso);
		this.sabeFalar = sabeFalar;
	}
}

let papagaio = new Papagaio(true, "Medio", "verde", 20, 30);
let papagaio2 = new Papagaio(false, "grande", "azul", 1, 20);

console.log(papagaio, papagaio2);
