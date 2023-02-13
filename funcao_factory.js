let bicicleta1 = {
	cor: "branca",
	marcha: "unica",
	aro: 12,

	pedalar() {
		console.log("pedalo");
	},
};

let BikeFactory = (cor, marcha, aro) => {
	return {
		cor,
		marcha,
		aro,

		pedalar() {
			console.log("pedalo");
		},
	};
};

let bicicleta3 = BikeFactory("azul", 23, 1);

console.log(bicicleta3);
