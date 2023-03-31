import database from "../infra/bd.js";

class FuncionariosDAO {

  static async funcionarios() {

    const funcionariosCadastrados = await database.query("SELECT * FROM funcionarios");
    if (funcionariosCadastrados.length === 0) {
      throw {
        dados: { Mensagem: "Desculpe, não existe nenhum funcionário cadastrado" },
        status: 404,
      };
    } else {
      return {
        dados: { funcionariosCadastrados},
        status: 200,
      };
    }
  }
  static async funcionarioID(param) {

    const funcionarioCadastrado = await database.query(`SELECT * FROM funcionarios WHERE funcionarioID = ?`, param);
    if (funcionarioCadastrado.length === 0) {
      throw {
        dados: { Mensagem: "Desculpe não foi possível encontrar nenhum funcionário cadastrado"},
        status: 404
      }
    } else {
      return {
        dados: { funcionarioCadastrado },
        status: 200,
      };
    }
  }
  static async cadastrarVerificarFuncionario(obj) {
    console.log(obj)

    const cpfCadastrado = await database.query("SELECT * FROM funcionarios WHERE cpf = ?", [obj.cpf]);
    if (cpfCadastrado.length > 0) {
      throw {
        dados: { Mensagem: "Funcionário já cadastrado" },
        status: 400,
      };
    }
    try {
      await database.query("INSERT INTO funcionarios (funcionarioID, cpf, nome, cargo, salario, beneficios, email, telefone, cep, endereco) VALUES (?,?,?,?,?,?,?,?,?,?)", Object.values(obj));
    } catch (error) {
      return {
        dados: { Error: "MYSQL ERROR", error: error.code },
        status: 500,
      };
    }
    return {
      dados: { Mensagem: "Funcionário cadastrado com sucesso" },
      status: 201,
    };
  }

  static async atualizarFuncionarioCadastradoID(funcionarioID, obj) {
    const emailCadastrado = await database.query("SELECT * FROM funcionarios WHERE email = ?", [obj.email]);
    const cpfCadastrado = await database.query("SELECT * FROM funcionarios WHERE cpf = ?", [obj.cpf]);
    if (emailCadastrado.length > 0 && cpfCadastrado.length > 0) {
      throw {
        dados: { Mensagem: "Não foi possível alterar seus dados" },
        status: 400,
      };
    }
    try {
      await database.query("UPDATE funcionarios SET cpf = ?, nome = ?, cargo = ?, salario = ?, beneficios = ?, email = ?,telefone = ?, cep = ?, endereco = ? WHERE funcionarioID = ?", [obj.cpf, obj.nome, obj.cargo, obj.salario, obj.beneficios, obj.email, obj.telefone, obj.cep, obj.endereco, funcionarioID]);
    } catch (error) {
      return {
        dados: { Error: "MYSQL ERROR", error: error.code },
        status: 500,
      };
    }
    return {
      dados: { Mensagem: `Dados do(a) funcionario ${obj.nome} atualizado com sucesso` },
      status: 200,
    };
  }

  static async excluirfuncionarioID(funcionarioID) {
    const funcionarioCadastrado = await database.query(`SELECT * FROM funcionarios WHERE funcionarioID = ?`, funcionarioID);
    if (funcionarioCadastrado.length === 0) {
      throw {
        dados: { Error: "Desculpe não foi possível deletar, o ID informado não pertence ao nenhum funcionário cadastrado" },
        status: 404
      }
    }
    try {
      await database.query("DELETE FROM funcionarios WHERE funcionarioID = ?", [funcionarioID]);
    } catch (error) {
      return {
        dados: { Error: "MYSQL ERROR", error: error.code },
        status: 500,
      };
    }
    return {
      dados: { Mensagem: "Funcionário excluido com sucesso" },
      status: 200,
    };
  }
}

export default FuncionariosDAO