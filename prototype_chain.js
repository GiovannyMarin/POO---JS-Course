Object.prototype.geral = "z";

let animal = { attr1: "a" };
let vertebrado = { __proto__: animal, attr2: "b" };
let ave = { __proto__: vertebrado, attr3: "c" };

console.log(ave.attr1, ave.geral);
