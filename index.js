import express from 'express';
import { estimacion } from './routes/apiEstimacion.js';
//import { chequera } from './routes/apiChequera.js';

const app = express();

const port = 9090;


//middlewares
app.use(express.json());

app.use("/api/estimacion",estimacion);
//app.use("/api/chequera",chequera);

app.listen(port,()=>{
    console.log(`Se escucha en ${port}`);
});