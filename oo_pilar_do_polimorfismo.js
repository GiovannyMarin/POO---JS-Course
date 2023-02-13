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

class Avestruz extends Passaro {
	constructor() {
		super("Grande", "branco e preto", 250, 15000);
	}

	enterrarCabeca() {
		console.log("enterrar cabeca");
	}

	voar() {
		console.log("nao sabe voar");
	}
}

let papagaio = new Papagaio(true, "Medio", "verde", 20, 30);
let avestruz = new Avestruz();

console.log(papagaio);

papagaio.voar();
