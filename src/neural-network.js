class NeuralNetwork {
    constructor(layers) {
        this.layers = NeuralNetwork._createLayers(layers);
    }

    /**
     * Run the neural network with provided inputs
     */
    run(inputs) {
        let output = inputs;
        for (const layer of this.layers) {
            output = layer.func(!Array.isArray(output) ? Array.from({length: layer.inputs}, () => output): output);
        }
        return output;
    }

    /**
     * Create layers from config
     *
     * @param layers
     * @return {Array} Layers
     * @private
     */
    static _createLayers(layers) {
        const tmpLayers = [];
        for (const layer of layers) {
            tmpLayers.push({
                func: (inputs) => {
                    const output = NeuralNetwork._sigmoid(NeuralNetwork._dotProduct(inputs, layer.weights) + layer.bias)
                    if (layer.name != null)
                        console.log(`${layer.name} - Output: ${output}`);

                    return output;
                },
                inputs: layer.weights.length
            });
        }
        return tmpLayers;
    }

    /**
     * Calculate dot product of 2 arrays
     *
     * @param arr1
     * @param arr2
     * @return {number}
     * @private
     */
    static _dotProduct(arr1, arr2) {
        let result = 0;
        for (let i = 0; i < Math.min(arr1.length, arr2.length); i++) {
            result += arr1[i] * arr2[i];
        }
        return result;
    }

    /**
     * Sigmoid activation function (logistic function)
     * https://en.wikipedia.org/wiki/Sigmoid_function
     *
     * @private
     */
    static _sigmoid(x) {
        return 1 / ( 1 + Math.E ** (-x))
    }
}

module.exports = NeuralNetwork;
