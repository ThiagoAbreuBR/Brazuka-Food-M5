import database from "../infra/bd.js";

database.connection.end();

console.log("ACESSO AO BANCO DE DADOS FINALIZADO");