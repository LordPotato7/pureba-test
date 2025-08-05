const Calculadora = require('./calculadora');

describe('Calculadora', () => {
    // Pruebas para la función sum
    describe('sum', () => {
        test('suma correctamente dos números positivos', () => {
            expect(Calculadora.sum(2, 3)).toBe(5);
        });

        test('suma correctamente números negativos', () => {
            expect(Calculadora.sum(-1, -2)).toBe(-3);
        });

        test('lanza error cuando algún parámetro no es número', () => {
            expect(() => Calculadora.sum('2', 3)).toThrow('Ambos parámetros deben ser números');
        });
    });

    // Pruebas para la función subtract
    describe('subtract', () => {
        test('resta correctamente dos números', () => {
            expect(Calculadora.subtract(5, 3)).toBe(2);
        });

        test('lanza error cuando algún parámetro no es número', () => {
            expect(() => Calculadora.subtract('5', 3)).toThrow('Ambos parámetros deben ser números');
        });
    });

    // Pruebas para la función multiply
    describe('multiply', () => {
        test('multiplica correctamente dos números', () => {
            expect(Calculadora.multiply(4, 3)).toBe(12);
        });

        test('lanza error cuando algún parámetro no es número', () => {
            expect(() => Calculadora.multiply('4', 3)).toThrow('Ambos parámetros deben ser números');
        });
    });

    // Pruebas para la función divide
    describe('divide', () => {
        test('divide correctamente dos números', () => {
            expect(Calculadora.divide(10, 2)).toBe(5);
        });

        test('lanza error cuando se divide por cero', () => {
            expect(() => Calculadora.divide(10, 0)).toThrow('No se puede dividir por cero');
        });

        test('lanza error cuando algún parámetro no es número', () => {
            expect(() => Calculadora.divide('10', 2)).toThrow('Ambos parámetros deben ser números');
        });
    });
});