var input = [[1,0],[1,1],[0,1],[0,0]];
var EOutput = [1,1,0,0];

var synapsis = [];
var neurons = [];

function synapse(from, to, weight){
	this.from = from;
	this.to = to;
	this.weight = weight;
	
	this.influence = function(input){
		this.to.valuesToEvaluate.push(input * this.weight);
	}
}

function neuron(){
	this.valuesToEvaluate = [];
	this.endValue = 0;
	
	this.getValue = function(){
		this.endValue = 0;
		for(var i = 0; i < this.valuesToEvaluate.length; i++){
			this.endValue += this.valuesToEvaluate[i];
		}
		this.endValue = Sigmoid(this.endValue);
	}
}

function randomWeights(){
	
}

function Sigmoid(x){
	return 1/(1+Math.pow(Math.E, -x));
}

function SigmoidDerivative(x){
	return Sigmoid(x) * (1-Sigmoid(x));
}

console.log(Sigmoid(1));
console.log(SigmoidDerivative(1.235));

var One = new neuron();
var SOne = new synapse(false, One, 0.4);
var STwo = new synapse(false, One, 0.9);
