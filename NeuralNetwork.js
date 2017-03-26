// var input = [[0,0,0],[0,0,1],[0,1,1],[1,1,1],[1,0,0]];
// var EOutput = [0,0,1,1,0];

var input = [[3,2,4,5,6],[1,1,5,2,5],[0,2,4,5,9],[0,0,3,6,2],[3,0,9,9,2],[0,1,9,2,7],[3,2,4,5,6],[1,1,5,2,5],[5,3,9,2,5],[1,0,5,3,5],[4,0,8,4,2],[0,0,2,5,7],
			 [5,3,9,1,4],[5,0,9,2,5],[0,5,8,3,0],[2,3,9,5,1],[0,3,9,4,1],[0,0,9,7,8],[2,0,7,7,5],[0,9,0,4,2],[1,0,0,9,2],[0,9,4,1,9],[0,9,0,4,1],[0,3,8,5,3]]
var EOutput = [0,1,0,0,0,1,0,1,0,1,0,0,1,0,0,1,1,0,0,0,1,1,1,0]
			 //Gültig
// var input = [[0,7,1,3,1,8,6,4,9,0,5,4,4,0,2,8],[0,8,5,9,2,6,5,4,0,0,9,2,0,0,0,1],[0,8,7,5,1,1,6,3,1,3,7,2,9,3,6,7],[0,5,7,6,2,1,3,4,9,9,3,6,6,9,7,5],
// 			 [0,3,6,4,3,2,7,2,1,3,4,2,4,0,5,8],[0,1,5,3,7,8,0,7,3,7,3,7,1,6,9,3],[0,7,9,6,3,9,2,5,7,9,9,8,7,4,0,1],[0,3,5,8,8,3,7,7,8,9,9,0,6,9,1,7],
// 			 [0,5,9,8,3,1,4,8,8,1,4,7,4,4,4,3],[0,3,9,4,6,2,9,4,1,6,0,6,1,0,2,9],[0,7,2,8,6,1,7,2,2,4,1,2,3,1,9,4],[0,4,3,6,8,2,1,3,9,2,5,9,5,8,7,0],
// 			 [0,3,3,1,6,5,5,1,8,0,7,6,5,2,4,2],[0,5,7,6,3,3,0,1,4,1,9,5,8,2,3,7],[0,5,3,9,3,4,7,9,9,2,1,6,4,4,0,1],[0,2,6,7,1,6,4,5,6,2,5,4,3,5,4,5],
// 			 [0,6,0,3,3,1,8,8,3,3,5,9,3,6,2,5],[0,6,1,8,6,9,2,3,3,0,6,5,9,7,0,1],[0,1,3,4,5,2,7,3,7,1,4,2,2,8,9,4],[0,0,5,5,4,6,6,2,7,9,7,0,9,6,5,8],
// 			 [0,4,2,3,1,1,6,6,4,4,4,7,3,5,9,1],[0,2,5,4,8,5,5,9,3,6,4,7,9,8,7,0],[0,4,0,1,2,3,6,9,6,7,8,7,7,9,8,1],[0,9,9,8,0,1,3,1,4,7,6,0,6,7,4,8],
// 			 [0,7,3,5,7,3,8,3,4,9,4,5,6,5,9,6],[0,7,1,3,8,0,9,5,4,0,9,5,2,4,7,8],[0,5,6,9,8,7,6,2,2,7,6,1,8,9,3,7],[0,0,1,4,0,3,3,8,8,3,6,6,6,3,2,1],
// 			 [0,2,7,8,4,1,4,8,7,4,5,3,9,2,3,3],[0,5,9,7,3,1,2,1,3,4,4,1,0,7,9,5],[0,6,3,5,4,0,3,2,4,8,1,2,7,5,2,0],[0,4,8,3,8,8,5,5,4,5,7,4,9,1,2,1],
// 			 //Ungültig 
// 			 [4,1,0,2,0,9,8,4,2,1,4,0,4,8,1,0],[1,2,3,4,8,1,2,7,9,7,1,2,4,9,4,7],[4,1,2,8,4,7,8,9,2,1,7,2,1,9,4,7],[0,1,2,3,9,0,1,2,4,1,2,9,4,1,2,4],
// 			 [8,4,2,6,1,4,6,1,2,4,1,8,9,2,4,6],[0,1,2,4,1,9,1,2,6,4,8,9,1,2,4,8],[0,1,2,4,8,1,7,2,4,1,2,6,4,7,8,1],[0,0,1,2,3,3,3,5,4,7,2,8,1,7,2,2],
// 			 [4,1,2,7,6,1,2,7,4,1,7,2,9,8,7,1],[0,0,1,2,0,1,3,1,3,7,4,1,7,8,4,6],[0,1,4,4,4,3,1,1,9,8,7,6,6,3,3,1],[0,4,2,1,8,7,4,1,9,4,1,2,9,4,1,2],
// 			 [0,1,9,9,4,4,3,3,3,5,5,5,2,2,2,2],[0,1,9,9,5,5,3,3,3,2,2,2,4,4,5,5],[0,1,2,2,4,4,7,8,4,2,7,1,7,2,2,8],[0,2,4,1,2,4,7,8,9,1,2,7,8,9,1,2],
// 			 [0,2,1,7,3,1,2,3,1,2,1,2,3,1,2,3],[0,9,1,2,8,9,4,8,1,2,2,1,3,8,1,2],[4,2,1,4,8,2,1,4,1,2,4,9,1,7,8,4],[8,7,1,9,7,4,8,9,1,2,7,4,1,7,2,9],
// 			 [3,7,1,2,6,3,7,1,2,6,3,7,8,2,6,1],[4,7,1,8,6,7,8,1,2,6,3,1,2,7,8,3],[9,4,8,2,9,1,0,7,4,9,1,2,6,3,7,1],[0,1,9,4,4,3,3,6,9,8,5,6,5,4,1,9],]

// var EOutput = [1,1,1,1,1,1,1,1,
// 			   1,1,1,1,1,1,1,1,
// 			   1,1,1,1,1,1,1,1,
// 			   1,1,1,1,1,1,1,1,
// 			   0,0,0,0,0,0,0,0,
// 			   0,0,0,0,0,0,0,0,
// 			   0,0,0,0,0,0,0,0,]

// var input = [[0,5],[2,7],[3,9],[6,1],[6,2],[1,7],[4,2],[9,7],[0,6],[5,9],[1,0],[5,1]]
// var EOutput = [0,0,0,1,0,1,0,0,0,0,1,1]

var S = [[]];
var N = [];
var I = [];

var neuronID = 1;

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
	this.id = neuronID;
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
	neuronID ++;
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
	console.log("Output: "+N[N.length-1][0].endValue);
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
		for(var j = 0; j < N[i].length; j++){												//Multiple hidden layer issue 
			deltaWeights[deltaWeights.length-1].push(N[i][j].endValue * deltaOutputSum);
		}
	}
	for(var i = 0; i < S.length; i++){
		for(var j = 0; j < S[i].length; j++){
			S[i][j].weight += deltaWeights[i][j];
		}
	}
}

function think(localInput){
	
	for(var i = 0; i < localInput.length; i++){
		I[i].endValue = localInput[i];
	}

	forwardPropagation();
}

function train(times){
	for(var i = 0; i < times; i++){
		for(var j = 0; j < EOutput.length; j++){
			think(input[j]);
			backpropagation(EOutput[j]);
		}
	}
	console.log("Trained")
}

function generateNetwork(numInput, neuronsPerLayer){
	for(var i = 0; i < numInput; i++){
		I[i] = new Ineuron(1);
	}
	for(var i = 0; i < 1; i++){
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
		if(i < N.length-1){
			S.push([]);
		}
		for(var j = 0; j < N[i].length; j++){
			if(i < N.length-1){
				for(var k = 0; k < N[i+1].length; k++){
					S[S.length-1].push(new synapse(N[i][j], N[i+1][k],Math.random()));
				}
			}
		}
	}
}

function randomTraining(){

}

generateNetwork(5,20);