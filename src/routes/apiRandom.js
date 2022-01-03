const { Router } = require('express');

const apiRandom = Router();
const numeros = new Map()

function getRandomInt() {
    return Math.floor(Math.random() * 10000);
}

function generateRandom(req, res, next) {
    const { cant } = req.params

    let i = 0
    let number
    let valor

    while (i < cant) {
        number = getRandomInt();
        valor = numeros.get(number)

        if (valor === undefined) { numeros.set(number, 0) }
        else {

            valor = valor + 1
            numeros.set(number, valor++)
        }
        i++;
    }


    next()
}

apiRandom.get('/:cant', generateRandom, (req, res) => {

    let resultado = []
    for (const [numero, cantOcu] of numeros) {
        resultado.push({ 'numero': numero, 'ocurrencias': cantOcu })
    }
    res.json(resultado);
});

exports.apiRandom = apiRandom;