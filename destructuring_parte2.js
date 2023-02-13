// composicao tem um
let produto = {
	descricao: "notebook",
	preco: 1800,
	detalhes: {
		fabricante: "abc",
		modelo: "xyz",
	},
};
// composicao
//eh um
// tem um

// token do destructuring eh diferente em casos
//array => []
//objeto => {}
//let { descricao, preco } = produto;

//let { descricao: d, preco: p, desconto} = produto;
//let { descricao: d, preco: p, desconto = 5 } = produto;

let {
	detalhes: { fabricante, modelo },
} = produto;
console.log(fabricante, modelo);
