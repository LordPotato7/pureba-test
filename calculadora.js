// Módulo de calculadora básica
const calculator = {
    // Suma dos números
    sum: (a, b) => {
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new Error('Ambos parámetros deben ser números');
        }
        return a + b;
    },

    // Resta dos números
    subtract: (a, b) => {
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new Error('Ambos parámetros deben ser números');
        }
        return a - b;
    },

    // Multiplica dos números
    multiply: (a, b) => {
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new Error('Ambos parámetros deben ser números');
        }
        return a * b;
    },

    // Divide dos números
    divide: (a, b) => {
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new Error('Ambos parámetros deben ser números');
        }
        if (b === 0) {
            throw new Error('No se puede dividir por cero');
        }
        return a / b;
    }
};

module.exports = calculator;