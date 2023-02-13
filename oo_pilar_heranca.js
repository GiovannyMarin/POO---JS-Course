class Animal {
	constructor() {
		this.cor = "";
		this.tamanho = null;
		this.animal = null;
	}

	dormir() {
		console.log("dormi");
	}
}

class Passaro extends Animal {
	constructor() {
		super();
		this.bico = "curto";
	}

	voar() {
		console.log("voei");
	}
}

class Papagaio extends Passaro {
	constructor() {
		super();
		this.sabeFalar = true;
	}
}

class Cachorro extends Animal {
	constructor() {
		super();
		this.orelhas = "Grandes e caidas";
	}

	correr() {
		console.log("corri");
	}

	rosnar() {
		console.log("rosnar");
	}
}

let cachorro = new Cachorro();
let passaro = new Passaro();
let papagaio = new Papagaio();

console.log(cachorro, passaro, papagaio);

papagaio.dormir();
