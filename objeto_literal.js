//notacao de classe

class Produto {
	constructor(descricao, preco) {
		this.descricao = descricao;
		this.preco = preco;
	}

	verDescricao() {
		console.log(`${this.descricao} por apenas ${this.preco}`);
	}
}

let produto = new Produto("Notebook", 2200);

produto.verDescricao();

//objeto literal

let produtoLiteral = {
	descricao: "Geladeira",
	preco: 1880,

	verDescricao() {
		console.log(`${this.descricao} por apenas ${this.preco}`);
	},
};

produtoLiteral.verDescricao();
