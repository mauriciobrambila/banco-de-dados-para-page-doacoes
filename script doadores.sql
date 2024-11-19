CREATE DATABASE doadores;
USE doadores;

-- Criação da tabela de eventos
CREATE TABLE doador (
   nome varchar(100) not null,
   cpf varchar(15) not null,
   endereco varchar(150) not null, 
   bairro varchar (150) not null,
   cidade varchar(100)not null,
   uf char(2) not null,
   fone varchar(15) not null,
   email varchar (150) not null,
   constraint pk_cpf
   primary key (cpf)
);

insert into doador (nome, cpf, endereco, bairro, cidade, uf, fone, email) 
values('Mauricio','111.222.333-44','R tal sugestao', 'Centro', 'Pres Prudente', 'SP', '(18) 99999-9999', 'user@gmail.com');

select * from doador;