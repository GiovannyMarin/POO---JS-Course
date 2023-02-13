let Carro = function () {
	this.cor = "Amarelo";
	this.modelo = "Chevete";
	this.velocidadeAtual = 0;
	this.velocidadeMaxima = 1000;

	this.acelerar = function () {
		//this.velocidadeAtual += 10;

		let velocidade = this.getVelocidadeAtual() + 10;
		this.setVelocidadeAtual(velocidade);
	};

	this.getVelocidadeAtual = function () {
		return this.velocidadeAtual;
	};
	this.setVelocidadeAtual = function (velocidadeAtual) {
		this.velocidadeAtual = velocidadeAtual;
	};
};

let carro = new Carro();

console.log(`a velocidade atual e ${carro.getVelocidadeAtual()}`);
carro.acelerar();
console.log(`a velocidade atual e ${carro.getVelocidadeAtual()}`);
carro.acelerar();
console.log(`a velocidade atual e ${carro.getVelocidadeAtual()}`);
