let funcionarios = [
	{ nome: "fernanda", cargo: "assistente", salario: 2344, status: "ativo" },
	{ nome: "denis", cargo: "gerente", salario: 12323, status: "ativo" },
	{ nome: "lian", cargo: "marketing", salario: 1112, status: "inativo" },
	{ nome: "denilson", cargo: "financas", salario: 9000, status: "ativo" },
	{ nome: "rian", cargo: "php", salario: 45000, status: "inativo" },
];

funcionarios
	.filter((valorIndice) => {
		return valorIndice.salario > 10000;
	})
	.filter((f) => {
		return f.status == "ativo";
	});

console.log(funcionarios);
