create database solomons;
drop database solomons;

use solomons;

create table usuario(
idUsuario int primary key auto_increment,
nome varchar(70),
email varchar(225),
senha varchar(45)
);

create table produtividade(
idRegistro int primary key auto_increment,
qtdAulas int,
fkUsuario int,
foreign key (fkUsuario)
references usuario (idUsuario)
);

select * from usuario;

select * from produtividade;