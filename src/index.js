const NeuralNetwork = require("./neural-network");

const neuralNetwork = new NeuralNetwork([
    {
        name: "Input Layer",
        weights: [1, 0],
        bias: 0,
    },
    {
        name: "Hidden Layer1",
        weights: [1, 0],
        bias: 0,
    }
]);

console.log(neuralNetwork.run([1,2]));
console.log(neuralNetwork.run([4,2]));
