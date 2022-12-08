import express from 'express';
import mysql from "mysql";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createPool({
    host: "winhost",
    user: "propato",
    password: '#Divadpropato123',
    database: "teste",
    port: 3306
});

app.get("/getTable", (req, res) => {

    let SQL = 'SELECT * FROM t1';

    db.query(SQL, (err, result) => {
        if(err)
            { console.log(err); }
            else{
                res.send(result);
                console.log(result);
            }
    });
});

app.post("/register", (req, res) => {

    const { name } = req.body;
    const { salario } = req.body;
    const { profissao } = req.body;

    console.log(name, salario, profissao);

    let SQL = "INSERT INTO t1 ( nome, salario, profissao ) VALUES ( ?, ?, ? )";

    db.query(SQL, [name, salario, profissao], (err, result) => {
        if(err){
            console.log(err)}
            else console.log("ebaaaa");
    })
});

app.listen(3000, () => {
    console.log('Server online.\nlocalhost:3000');
});