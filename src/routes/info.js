const { Router } = require('express');
require('dotenv').config()
const yargs = require('yargs/yargs')(process.argv.slice(2))

const info = Router();

info.get('/', (req, res) => {


    const info = {
        'Argumentos_Entrada': yargs,
        'Path': process.execPath,
        'SO:': process.platform,
        'id_proceso ': process.pid,
        'Node_version': process.version,
        'Carpeta_Proyecto': process.cwd(),
        'Memoria': process.memoryUsage().rss
    }
    console.log(info)
    res.json(info)
});


exports.info = info;