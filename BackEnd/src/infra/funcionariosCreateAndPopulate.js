import database from "./bd.js";

const populateFuncionario = () => {

    database.connection.query(
        "CREATE TABLE `restaurante`.`funcionarios` (funcionarioID INT PRIMARY KEY AUTO_INCREMENT, cpf VARCHAR(14) NOT NULL, nome VARCHAR(100) NOT NULL, cargo VARCHAR(50) NOT NULL, salario VARCHAR(30) NOT NULL, beneficios VARCHAR(100) NOT NULL, email VARCHAR(60) NOT NULL, telefone VARCHAR(30) NOT NULL, cep VARCHAR(9) NOT NULL, endereco VARCHAR(50));",
        function (error, results, fields) {
            if (error) {
                console.log(error);
            } else {
                console.log("Tabela de funcionarios criada com sucesso");
            }
        }
    );
    database.connection.query(
        "INSERT INTO funcionarios (funcionarioID, cpf, nome, cargo, salario, beneficios, email, telefone, cep, endereco) VALUES (NULL, '111.111.111-11', 'Jonas' , 'Chef de cozinha', 'R$ 3,000.00', 'Nenhum', 'jonas@gmail.com', '21 99999-9999', '12345-678', 'Rua ABC 123');",
        function (error, results, fields) {
            if (error) {
                console.log(error);
            } else {
                console.log("Tabela de funcionarios populada com sucesso");
            }
        }
    );
}

export default populateFuncionario