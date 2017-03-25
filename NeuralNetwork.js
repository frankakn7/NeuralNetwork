var input = [[0,0,0],[0,0,1],[0,1,1],[1,1,1]];
var EOutput = [0,0,1,1];

var S = [[],[]];
var N = [[],[]];
var I = [];

function synapse(from, to, weight){
	this.from = from;
	this.to = to;
	this.weight = weight;
	
	this.influence = function(){
		//console.log(this);
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

	for(var i = 0; i < N.length; i++){
		for(var j = 0; j < N[i].length; j++){
			N[i][j].valuesToEvaluate = [];
		}
	}

	for(var i = 0; i < S.length; i ++){
		for(var j = 0; j < S[i].length; j ++){
			S[i][j].influence();
		}
		for(var j = 0; j < N[i].length; j ++){
			N[i][j].getValue();
		}
	}
	console.log("Output: "+N[1][0].endValue);
}

function backpropagation(expected){
	var marginOfError = expected - N[1][0].endValue;
	var deltaOutputSum = SigmoidDerivative(N[1][0].beforeSigmoid) * marginOfError;
	var deltaHiddenSum = [];
	var resultsHidden = [];
	var deltaWeights = [];
	var oldWeightsHiddenOut = [];
	for(var i = 0; i < N[0].length; i++){
		resultsHidden.push(N[0][i].endValue);
	}
	for(var i = 0; i < resultsHidden.length; i++){
		deltaWeights.push(deltaOutputSum * resultsHidden[i]);
	}
	for(var i = 0; i < S[1].length; i++){
		oldWeightsHiddenOut.push(S[1][i].weight);
		//console.log("Old: "+S[1][i].weight);
		S[1][i].weight += deltaWeights[i];
		//console.log("New: "+S[1][i].weight);
	}
	deltaWeights = [];
	for(var i = 0; i < oldWeightsHiddenOut.length; i++){
		deltaHiddenSum.push(deltaOutputSum * oldWeightsHiddenOut[i] * SigmoidDerivative(N[0][i].beforeSigmoid))
	}
	for(var i = 0; i < I.length; i++){
		for(var j = 0; j < deltaHiddenSum.length; j++){
			deltaWeights.push(deltaHiddenSum[j]*I[i].endValue);
		}
	}
	//console.log(deltaWeights);
	for(var i = 0; i < S[0].length; i++){
		//console.log("Old: "+S[0][i].weight);
		S[0][i].weight += deltaWeights[i];
		//console.log("New: "+S[0][i].weight);
	}
	//console.log("learned")
}

function think(input1,input2,input3){
	I[0].endValue = input1;
	I[1].endValue = input2;
	I[2].endValue = input3;

	forwardPropagation();
}

function train(times){
	for(var i = 0; i < times; i++){
		for(var j = 0; j < EOutput.length; j++){
			think(input[j][0],input[j][1],input[j][2]);
			backpropagation(EOutput[j]);
		}
	}
	console.log("Trained")
}

/*
console.log(Sigmoid(1));
console.log(SigmoidDerivative(1.235));
*/
I[0] = new Ineuron(1);
I[1] = new Ineuron(1);
I[2] = new Ineuron(1);

N[0][0] = new neuron();
N[0][1] = new neuron();
N[0][2] = new neuron();
N[0][3] = new neuron();

N[1][0] = new neuron();

S[0][0] = new synapse(I[0], N[0][0], 0.8);
S[0][1] = new synapse(I[0], N[0][1], 0.4);
S[0][2] = new synapse(I[0], N[0][2], 0.3);
S[0][3] = new synapse(I[0], N[0][3], 0.2);
S[0][4] = new synapse(I[1], N[0][0], 0.9);
S[0][5] = new synapse(I[1], N[0][1], 0.5);
S[0][6] = new synapse(I[1], N[0][2], 0.8);
S[0][7] = new synapse(I[1], N[0][3], 0.4);
S[0][8] = new synapse(I[2], N[0][0], 0.3);
S[0][9] = new synapse(I[2], N[0][1], 0.2);
S[0][10] = new synapse(I[2], N[0][2], 0.9);
S[0][11] = new synapse(I[2], N[0][3], 0.5);

S[1][0] = new synapse(N[0][0], N[1][0], 0.3);
S[1][1] = new synapse(N[0][1], N[1][0], 0.5);
S[1][2] = new synapse(N[0][2], N[1][0], 0.9);
S[1][3] = new synapse(N[0][3], N[1][0], 0.9);