// um software de marcenaria
//cadeira e sofa

//paradigma procedural

//cadeira

class Cadeira {
	constructor(qtd_pernas, giratoria, cor) {
		this.qtd_pernas = qtd_pernas;
		this.giratoria = giratoria;
		this.cor = cor;
	}

	girarCadeira() {
		if (this.giratoria === true) {
			console.log("girou");
		} else {
			console.log("n girou");
		}
	}
}

class Sofa {
	constructor(acentos, reclinavel, cor) {
		this.acentos = acentos;
		this.reclinavel = reclinavel;
		this.cor = cor;
	}

	reclinarSofa() {
		if (this.reclinavel === true) {
			console.log("reclinar");
		} else {
			console.log("nao nao mona");
		}
	}
}

let cadeira = new Cadeira(4, false, "azul");
let cadeira2 = new Cadeira(2, true, "verde");
let sofa = new Sofa(3, true, "cinza");

sofa.reclinarSofa();
cadeira.girarCadeira();
