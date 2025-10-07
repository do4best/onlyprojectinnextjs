import sqlite3 from 'sqlite3';
import * as querystring from "node:querystring";

const db = new sqlite3.Database('./db/users.sqlite3',(err) =>{
    if(err){ return console.log(err)}});
db.run(`CREATE TABLE IF NOT EXISTS users(id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT not null, email TEXT not null, age integer not null)`,
    (error)=>{
    db.all(`SELECT * FROM users`, (err, rows) => {
        if (err) {
            console.log(err);
        } else {
            console.log(rows);
        }
    })
    });
// querystring  = `INSERT INTO users (name, email, age) VALUES (?,?,?)`;

db.close((err) => {if (err) console.log(err)});

