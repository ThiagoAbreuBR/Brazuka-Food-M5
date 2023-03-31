import database from "../infra/bd.js";

class ClientesDAO {

  static async clientes() {

    const dadosClientes = await database.query("SELECT * FROM clientes");
    if (dadosClientes.length === 0) {
      throw {
        dados: { Mensagem: "Desculpe, não existe nenhum cliente cadastrado" },
        status: 404,
      };
    } else {
      return {
        dados: { ClientesCadastrados: dadosClientes },
        status: 200,
      };
    }
  }
  static async clienteID(param) {

    const dadosCliente = await database.query(`SELECT * FROM clientes WHERE clienteID = ?`, param);
    if (dadosCliente.length === 0) {
      throw {
        dados: { Mensagem: "Desculpe não foi possível encontrar nenhum cliente cadastrado"},
        status: 404
      }
    } else {
      return {
        dados: { dadosCliente },
        status: 200,
      };
    }
  }
  static async cadastrarVerificarCliente(obj) {

    const emailCadastrado = await database.query("SELECT * FROM clientes WHERE email = ?", [obj.email]);
    const cpfCadastrado = await database.query("SELECT * FROM clientes WHERE cpf = ?", [obj.cpf]);
    if (emailCadastrado.length > 0 || cpfCadastrado.length > 0) {
      throw {
        dados: { Mensagem: "Cliente já cadastrado" },
        status: 400,
      };
    }
    try {
      await database.query("INSERT INTO clientes (clienteID, cpf, nome, email, telefone, cep, endereco) VALUES (?,?,?,?,?,?,?)", Object.values(obj));
    } catch (error) {
      return {
        dados: { Error: "MYSQL ERROR", error: error.code },
        status: 500,
      };
    }
    return {
      dados: { Mensagem: "Cliente cadastrado com sucesso" },
      status: 201,
    };
  }

  static async atualizarDadosClienteID(clienteID, obj) {
    const emailCadastrado = await database.query("SELECT * FROM clientes WHERE email = ?", [obj.email]);
    const cpfCadastrado = await database.query("SELECT * FROM clientes WHERE cpf = ?", [obj.cpf]);
    if (emailCadastrado.length > 0 && cpfCadastrado.length > 0) {
      throw {
        dados: { Mensagem: "Não foi possível alterar seus dados" },
        status: 400,
      };
    }
    try {
      await database.query("UPDATE clientes SET cpf = ?, nome = ?, email = ?, telefone = ?, cep = ?, endereco = ? WHERE clienteID = ?", [obj.cpf, obj.nome, obj.email, obj.telefone, obj.cep, obj.endereco, clienteID]);
    } catch (error) {
      return {
        dados: { Error: "MYSQL ERROR", error: error.code },
        status: 500,
      };
    }
    return {
      dados: { Mensagem: `Dados do(a) cliente ${obj.nome} atualizado com sucesso` },
      status: 200,
    };
  }

  static async excluirClienteID(clienteID) {
    const dadosCliente = await database.query(`SELECT * FROM clientes WHERE clienteID = ?`, clienteID);
    if (dadosCliente.length === 0) {
      throw {
        dados: { Error: "Desculpe não foi possível deletar, o ID informado não pertence ao nenhum cliente cadastrado" },
        status: 404
      }
    }
    try {
      await database.query("DELETE FROM clientes WHERE clienteID = ?", [clienteID]);
    } catch (error) {
      return {
        dados: { Error: "MYSQL ERROR", error: error.code },
        status: 500,
      };
    }
    return {
      dados: { Mensagem: "Cliente excluido com sucesso" },
      status: 200,
    };
  }
}

export default ClientesDAO