let nome = "Jorge";
let idade = 29;
let sexo = "Masculino";
let profissao = "Programador";

let objeto = {
	nome: nome,
	idade: idade,
	sexo: sexo,
	profissao: profissao,

	exibirResumo() {
		console.log(
			`${this.nome}, ${this.idade} anos, ${this.sexo} eh ${this.profissao} `
		);
	},
};

let objeto2 = {
	nome,
	idade,
	sexo,
	profissao,

	exibirResumo() {
		console.log(
			`${this.nome}, ${this.idade} anos, ${this.sexo} eh ${this.profissao} `
		);
	},
};

objeto2.exibirResumo();
