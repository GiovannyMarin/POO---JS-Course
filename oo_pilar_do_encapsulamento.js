class Tv {
	constructor() {
		this._relacaoCanais = Array(2, 4, 5, 7, 10);
		this._canalAtivo = 5;
		this._volume = 5;
	}

	// getters e setters

	get canalAtivo() {
		return this._canalAtivo;
	}

	set canalAtivo(canal) {
		let x = this._relacaoCanais.indexOf(canal);
		if (x !== -1) {
			this._canalAtivo = canal;
			console.log("canal localizado");
			console.log(tv.canalAtivo);
		} else {
			console.log("canal n localizado, atualize seu plano");
			console.log(tv.canalAtivo);
		}
	}
}

let tv = new Tv();

tv.canalAtivo = 2;
