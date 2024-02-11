import { db } from '../db/conn.js';

const postEstimacion = async (req, res)=>{
    const {numero_cheque,id_banco,a_nombre_de,monto_cheque} = req.body;

    const params = [numero_cheque,id_banco,a_nombre_de,monto_cheque];

    const sql = `insert into estimacion(numero_cheque,id_banco,a_nombre_de,monto_cheque)
                values ($1, $2, $3, $4) returning *
                `;
    const result = await db.query(sql,params);

    res.json(result);

};

const getEstimacion = async (req, res)=>{
    

    const sql = `select  * from estimacion`;
    const result = await db.query(sql);

    res.json(result);

};

const putEstimacion = async (req, res)=>{
    const {numero_cheque,a_nombre_de,monto_cheque}=req.body;
    const {id} = req.params;

    const params =[
        numero_cheque,a_nombre_de,monto_cheque,
        id
    ];

    const sql = `update estimacion 
                    set numero_cheque = $1, a_nombre_de = $2 , monto_cheque = $3
                    where id = $4 returning *`;

    const result = await db.query(sql,params);

    res.json(result);

};

const delEstimacion = async (req, res)=>{
    
    const {id} = req.params;

    const params =[        
        id
    ];

    const sql = `delete from estimacion
                    where id = $1 returning *`;

    const result = await db.query(sql,params);

    res.json(result);

};

export {
    postEstimacion,
    getEstimacion,
    putEstimacion,
    delEstimacion
};