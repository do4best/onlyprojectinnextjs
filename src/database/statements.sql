create table  users(
    id integer primary key autoincrement,
    name text not null unique,
    email text not null unique,
    age integer not null
)
insert into users(name,email,age) values('Ravi','scientific@gmail.com',20)
update users set age=21 where id=1
