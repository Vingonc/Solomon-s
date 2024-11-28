create database solomons;

use solomons;

create table usuario(
idUsuario int primary key auto_increment,
nome varchar(70),
email varchar(225),
senha varchar(45)
);

create table materias(
idMateria int primary key auto_increment,
nomeMateria varchar(45),
fkUsuario int,
foreign key (fkUsuario)
references usuario (idUsuario)
);

create table aula(
idAula int auto_increment,
nomeAula varchar(100),
fkMateria int,
primary key (idAula, fkMateria),
foreign key (fkMateria)
references materias (idMateria)
);



