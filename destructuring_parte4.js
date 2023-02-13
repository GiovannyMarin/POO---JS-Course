//array

//let arr = [10, 20, 30, 40];

//let [a, ...resto] = arr;

//console.log(resto);

let obj = {
	a: 10,
	b: 20,
	c: 30,
	d: 40,
};

let { a, ...resto } = obj;

console.log(resto);
