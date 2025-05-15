create database testemed;

use testemed;

create table empresa (
   idEmpresa INT primary key auto_increment,
        nome varchar(45),
        cnpj char(14),
        tokenAtivacao varchar(45)
    );


CREATE TABLE usuario (
 idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45),
    email VARCHAR(45),
    senha VARCHAR(45),
    fkEmpresaUsuario INT,
    CONSTRAINT fk_EmpresaUsuario FOREIGN KEY (fkEmpresaUsuario) REFERENCES empresa(idEmpresa)
);

CREATE TABLE setor (
    idSetor INT PRIMARY KEY AUTO_INCREMENT,
    andar VARCHAR(45),
    setor VARCHAR(45),
    fkEmpresaSetor INT,
    CONSTRAINT fk_EmpresaSetor FOREIGN KEY (fkEmpresaSetor) REFERENCES empresa(idEmpresa)
);

create table geladeira (
        idGeladeira INT primary key auto_increment,
        capacidade varchar(45),
        marca varchar(45),
        fkSetor INT,
        constraint fk_Setor foreign key (fkSetor) references setor (idSetor)
    );

CREATE TABLE sensor (
    idSensor INT PRIMARY KEY AUTO_INCREMENT,
    situacao VARCHAR(45),
    fkGeladeira INT,
    FOREIGN KEY (fkGeladeira) REFERENCES geladeira(idGeladeira)
);

create table registro (
        idRegistro INT auto_increment,
        fkSensor INT,
        temperatura float (10.2),
        umidade float (10.2),
        dtRegistro datetime default current_timestamp,
        primary key (idRegistro, fkSensor),
        constraint fk_Sensor foreign key (fkSensor) references sensor(idSensor)
    );




insert into empresa (nome, tokenAtivacao) values ('Empresa 1', 'ED145B');
insert into empresa (nome, tokenAtivacao) values ('Empresa 2', 'A1B2C3');