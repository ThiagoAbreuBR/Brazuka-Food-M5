import database from "./bd.js";

const populateFranquias = () => {

    database.connection.query(
        "CREATE TABLE `restaurante`.`filiais` (filialID INT PRIMARY KEY AUTO_INCREMENT, nomeFantasia VARCHAR(50) NOT NULL), cnpj VARCHAR(20) NOT NULL, cep VARCHAR(9) NOT NULL, endereco VARCHAR(70) NOT NULL, referencia VARCHAR(100) NOT NULL, horarioFuncionamento VARCHAR(30) NOT NULL);",
        function (error, results, fields) {
            if (error) {
                console.log(error);
            } else {
                console.log("Tabela de Filiais criada com sucesso");
            }
        }
    );
    database.connection.query(
        "INSERT INTO filiais (filialID, nomeFantasia, cnpj, cep, endereco, referencia, horarioFuncionamento) VALUES (NULL, 'Brazuka s Food', '32.420.5110001-59' , '20091-005', 'Rua A 197', 'Proximmo a Lagoa Rodrigo de Freitas', '12:00h-00:00h');",
        function (error, results, fields) {
            if (error) {
                console.log(error);
            } else {
                console.log("Tabela de Filiais populada com sucesso");
            }
        }
    );
}

export default populateFranquias