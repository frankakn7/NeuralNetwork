var input = [[1,0],[1,1],[0,1],[0,0]];
var EOutput = [1,1,0,0];

var S = [[],[]];
var N = [[],[]];

function synapse(from, to, weight){
	this.from = from;
	this.to = to;
	this.weight = weight;
	
	this.influence = function(){
		console.log(this);
		this.to.valuesToEvaluate.push(from.endValue * this.weight);
	}
}

function Ineuron(input){
	this.endValue = input;
}

function neuron(){
	this.valuesToEvaluate = [];
	this.beforeSigmoid = 0;
	this.endValue = 0;
	
	this.getValue = function(){
		this.endValue = 0;
		for(var i = 0; i < this.valuesToEvaluate.length; i++){
			this.endValue += this.valuesToEvaluate[i];
		}
		this.beforeSigmoid = this.endValue;
		this.endValue = Sigmoid(this.endValue);
	}
}

function Sigmoid(x){
	return 1/(1+Math.pow(Math.E, -x));
}

function SigmoidDerivative(x){
	return Sigmoid(x) * (1-Sigmoid(x));
}

function forwardPropagation(){
	for(var i = 0; i < S.length; i ++){
		for(var j = 0; j < S[i].length; j ++){
			S[i][j].influence();
		}
		for(var j = 0; j < N[i].length; j ++){
			N[i][j].getValue();
		}
	}
}

function backPopagation(expected){
	var marginOfError = expected - N[1][0].endValue;
	var deltaOutputSum = SigmoidDerivative(N[1][0].beforeSigmoid) * marginOfError;
	var resultsHidden = [];
	var deltaWeights = [];

	for(var i = 0; i < N[0].length; i++){
		resultsHidden.push(N[0][i].endValue);
	}
	for(var i = 0; i < resultsHidden.length; i++){
		deltaWeights.push(deltaOutputSum * resultsHidden[i]);
	}
	for(var i = 0; i < S[1].length; i++){
		console.log("Old: "+S[1][i].weight);
		S[1][i].weight += deltaWeights[i];
		console.log("New: "+S[1][i].weight);
	}
}

/*
console.log(Sigmoid(1));
console.log(SigmoidDerivative(1.235));
*/
var IOne = new Ineuron(1);
var ITwo = new Ineuron(1);

N[0][0] = new neuron();
N[0][1] = new neuron();
N[0][2] = new neuron();

N[1][0] = new neuron();

S[0][0] = new synapse(IOne, N[0][0], 0.8);
S[0][1] = new synapse(IOne, N[0][1], 0.4);
S[0][2] = new synapse(IOne, N[0][2], 0.3);
S[0][3] = new synapse(ITwo, N[0][0], 0.2);
S[0][4] = new synapse(ITwo, N[0][1], 0.9);
S[0][5] = new synapse(ITwo, N[0][2], 0.5);

S[1][0] = new synapse(N[0][0], N[1][0], 0.3);
S[1][1] = new synapse(N[0][1], N[1][0], 0.5);
S[1][2] = new synapse(N[0][2], N[1][0], 0.9);