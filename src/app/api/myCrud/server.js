import http from 'http';
import sqlite3 from 'sqlite3';
const db = new sqlite3.Database('./db/users.sqlite3',(err) =>{
    if(err){ return console.log(err)}else {
        console.log("Connected to the database");
    }
});
db.run(`CREATE TABLE IF NOT EXISTS users(id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT not null, email TEXT not null, age integer not null)`,(error)=>{
    if(error){
        console.log(error);
    }else{
        console.log("Table created");
    }
});