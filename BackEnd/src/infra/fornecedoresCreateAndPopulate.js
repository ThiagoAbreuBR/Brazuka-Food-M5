import database from "./bd.js";

const populateFornecedor = () => {

  database.connection.query(
    "CREATE TABLE `restaurante`.`fornecedores` (fornecedorID INT PRIMARY KEY AUTO_INCREMENT, cnpj VARCHAR(18) NOT NULL, razaoSocial VARCHAR(100) NOT NULL,email VARCHAR(60) NOT NULL, telefone VARCHAR(50) NOT NULL, cep VARCHAR(9) NOT NULL, endereco VARCHAR(50) NOT NULL, mercadoria VARCHAR(70) NOT NULL);",
    function (error, results, fields) {
      if (error) {
        console.log(error);
      } else {
        console.log("Tabela dos fornecedores criada com sucesso");
      }
    }
  );
  database.connection.query(
    "INSERT INTO fornecedores (fornecedorID, cnpj, razaoSocial, email, telefone, cep, endereco, mercadoria)VALUES (NULL, '03.672.347/0001-79', 'Roma Atacadista' , 'romaatacadista@email.com', '(21) 98524-7453', '15355-852', 'Campo Grande', 'Carnes'),(NULL, '00.752.2551258-36', 'Bebidas Lost' , 'bebidaslost@email.com', '(21) 95632-9571', '24896-586', 'Campo Grande', 'Bebidas'),(NULL, '00.394.4600058-87', 'Canaã Alimentos' , 'canaãalimentos@email.com', '(21) 98563-2451', '58796-523', 'Campo Grande', 'Alimentos e Temperos')",
    function (error, results, fields) {
      if (error) {
        console.log(error);
      } else {
        console.log("Tabela do fornecedores populada com sucesso");
      }
    }
  );
}

export default populateFornecedor