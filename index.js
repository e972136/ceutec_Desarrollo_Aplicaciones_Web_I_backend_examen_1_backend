import express from 'express';
import { estimacion } from './routes/apiEstimacion.js';
import { aseguradora } from './routes/apiAseguradora.js';

const app = express();

const port = 9090;


//middlewares
app.use(express.json());

app.use("/api/estimacion",estimacion);
app.use("/api/aseguradora",aseguradora);

app.listen(port,()=>{
    console.log(`Se escucha en ${port}`);
});