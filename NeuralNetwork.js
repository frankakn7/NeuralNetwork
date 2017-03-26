var input = [[0,0,0],[0,0,1],[0,1,1],[1,1,1],[1,0,0]];
var EOutput = [0,0,1,1,0];

var S = [[],[]];
var N = [];
var I = [];

function synapse(from, to, weight){
	this.from = from;
	this.to = to;
	this.old = 0;
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
		this.valuesToEvaluate = [];
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
	console.log("Output: "+Math.round(N[N.length-1][0].endValue));
}

function backpropagation(expected){
	var marginOfError = expected - N[N.length-1][0].endValue;
	var deltaOutputSum = SigmoidDerivative(N[N.length-1][0].beforeSigmoid) * marginOfError;

	var deltaHiddenSum = [];
	var deltaWeights = [[]];

	for(var i = 0; i < S[S.length-1].length; i++){
		deltaHiddenSum.push(deltaOutputSum * S[S.length-1][i].weight * SigmoidDerivative(N[N.length-2][i].beforeSigmoid))
	}
	for(var i = 0; i < I.length; i++){
		for(var j = 0; j < deltaHiddenSum.length; j++){
			deltaWeights[0].push(deltaHiddenSum[j]*I[i].endValue);
		}
	}
	for(var i = 0; i < N.length; i++){
		deltaWeights.push([]);
		for(var j = 0; j < N[i].length; j++){
			deltaWeights[deltaWeights.length-1].push(N[i][j].endValue * deltaOutputSum);
		}
	}
	for(var i = 0; i < S.length; i++){
		for(var j = 0; j < S[i].length; j++){
			S[i][j].weight += deltaWeights[i][j];
		}
	}
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

function generateNetwork(numInput,numHiddenLayer, neuronsPerLayer){
	for(var i = 0; i < numInput; i++){
		I[i] = new Ineuron(1);
	}
	for(var i = 0; i < numHiddenLayer; i++){
		N.push([]);
		for(var j = 0; j < neuronsPerLayer; j++){
			N[i][j] = new neuron();
		}
	}
	N.push([])
	N[N.length-1][0] = new neuron();

	for(var i = 0; i < I.length; i++){
		for(var j = 0; j < N[0].length; j++){
			S[0].push(new synapse(I[i], N[0][j], Math.random()))
		}
	}

	for(var i = 0; i < N.length; i ++){
		for(var j = 0; j < N[i].length; j++){
			if(i < N.length-1){
				for(var k = 0; k < N[i+1].length; k++){
					S[i+1].push(new synapse(N[i][j], N[i+1][k],Math.random()));
				}
			}
		}
	}
}

generateNetwork(3,1,4);