import database from "./bd.js";

const populateCliente = () => {

  database.connection.query(
    "CREATE TABLE `restaurante`.`clientes` (clienteID INT PRIMARY KEY AUTO_INCREMENT, cpf VARCHAR(14) NOT NULL,nome VARCHAR(100) NOT NULL, email VARCHAR(60) NOT NULL, telefone VARCHAR(20), cep VARCHAR(9) NOT NULL, endereco VARCHAR(50) NOT NULL);",
    function (error, results, fields) {
      if (error) {
        console.log(error);
      } else {
        console.log("Tabela de clientes criada com sucesso");
      }
    }
  );
  database.connection.query(
    "INSERT INTO clientes (clienteID, cpf, nome, email, telefone, cep, endereco) VALUES (NULL, '111.111.111-11', 'Davi' , 'davi@gmail.com', '(21) 99999-9999', '11111-111', 'Rua ABC 123'),(NULL, '222.222.222-22','Fernanda' , 'fernanda@gmail.com', '(21) 99999-9999', '22222-222', 'Rua ABC 321');",
    function (error, results, fields) {
      if (error) {
        console.log(error);
      } else {
        console.log("Tabela de clientes populada com sucesso");
      }
    }
  );
}

export default populateCliente
