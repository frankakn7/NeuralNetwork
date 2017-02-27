var input = [[1,0],[1,1],[0,1],[0,0]];
var EOutput = [];

function Sigmoid(x){
	return 1/(1+Math.pow(Math.E, -x));
}

function SigmoidDerivative(x){
	return Sigmoid(x) * (1-Sigmoid(x));
}

console.log(Sigmoid(1));
console.log(SigmoidDerivative(1.235));