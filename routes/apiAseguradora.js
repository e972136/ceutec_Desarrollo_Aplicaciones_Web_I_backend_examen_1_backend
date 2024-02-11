import express from 'express';
import {
    postAseguradora,
    getAseguradora,
    putAseguradora,
    delAseguradora
} from "../controllers/aseguradoraController.js";


const aseguradora = express();

aseguradora.post('',postAseguradora);
aseguradora.get('',getAseguradora);
aseguradora.put('/:id',putAseguradora);
aseguradora.delete('/:id',delAseguradora);


export { aseguradora};