function soma(...param) {
	let resultado = 0;
	console.log(param);

	param.forEach((v) => (resultado += v));

	return resultado;
}

console.log(soma(2, 3, 4, 5));

function multiplicacao(m, ...p) {
	p.forEach((v) => (resultado = m *= v));

	return resultado;
}

console.log(multiplicacao(12, 3, 2, 1, 3, 4));
