import express from 'express';
import { estimacion } from './routes/apiEstimacion.js';
import { aseguradora } from './routes/apiAseguradora.js';
import { reparacion } from './routes/apiReparacion.js';
import { reparacionAdicional } from './routes/apiReparacionAdicional.js';
import { repuesto } from './routes/apiRepuesto.js';

const app = express();

const port = 9090;


//middlewares
app.use(express.json());

app.use("/api/estimacion",estimacion);
app.use("/api/aseguradora",aseguradora);
app.use("/api/reparacion",reparacion);
app.use("/api/reparacion-adicional",reparacionAdicional);
app.use("/api/repuesto",repuesto);

app.listen(port,()=>{
    console.log(`Se escucha en ${port}`);
});