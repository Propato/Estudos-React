import express from 'express';
import mysql from "mysql";

const app = express();
const db = mysql.createPool({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "password",
    database: "teste",
});

app.get('/', (req, rest) => {
    rest.send("eitaaa");

    let SQL = "INSERT INTO reviews ( nome, salario, profissao ) VALUES ( 'asdasd', '5678', 'iiiiaaaff')";

    db.query(SQL, (err, result) => {
        console.log(err);
    });
});

app.listen(3000, () => {
    console.log('Server online.\nlocalhost:3000');
});