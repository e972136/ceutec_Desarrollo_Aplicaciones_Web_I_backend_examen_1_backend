import pg from 'pg-promise';

const pgp = pg();
//usuario, clave
const cnstr = 'postgresql://gaspar:gaspar@localhost:5432/estimaciones';

const db = pgp(cnstr);

db.connect()
    .then(()=>{
        console.log("Exito!");
    })
    .catch((err)=>{
        console.log(`nel pastel ${err}`);
    });

export { db };