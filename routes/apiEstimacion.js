import express from 'express';
import {
    postEstimacion,
    getEstimacion,
    putEstimacion,
    delEstimacion
} from "../controllers/estimacionController.js";


const estimacion = express();

estimacion.post('',postEstimacion);
estimacion.get('',getEstimacion);
estimacion.put('/:id',putEstimacion);
estimacion.delete('/:id',delEstimacion);


export {estimacion};