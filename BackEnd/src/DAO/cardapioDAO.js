import database from "../infra/bd.js";

class CardapioDAO {

  static async cardapio() {

    const optionsMENU= await database.query("SELECT * FROM cardapio");
    if (optionsMENU.length === 0) {
      throw {
        dados: { Mensagem: "Desculpe, não existe nenhuma opção no menu cadastrado" },
        status: 404,
      };
    } else {
      return {
        dados: { optionsMENU},
        status: 200,
      };
    }
  }
  static async cardapioID(param) {

    const optionMENU = await database.query(`SELECT * FROM cardapio WHERE cardapioID = ?`, param);
    if (optionMENU.length === 0) {
      throw {
        dados: { Mensagem: "Desculpe não foi possível encontrar nenhuma opção no menu cadastrado"},
        status: 404
      }
    } else {
      return {
        dados: { optionMENU },
        status: 200,
      };
    }
  }
  static async cadastrarVerificarCardapio(obj) {

    const nomeCadastrado = await database.query("SELECT * FROM cardapio WHERE nome = ?", [obj.nome]);
    const descricaoCadastrado = await database.query("SELECT * FROM cardapio WHERE descricao = ?", [obj.descricao]);
    if (nomeCadastrado.length > 0 && descricaoCadastrado.length > 0) {
      throw {
        dados: { Mensagem: "Opção já cadastrado no menu" },
        status: 400,
      };
    }
    try {
      await database.query("INSERT INTO cardapio (cardapioID, img, nome, descricao, tempoPreparo, preco) VALUES (?,?,?,?,?,?)", Object.values(obj));
    } catch (error) {
      return {
        dados: { Error: "MYSQL ERROR", error: error.code },
        status: 500,
      };
    }
    return {
      dados: { Mensagem: "Opção cadastrada no menu com sucesso" },
      status: 201,
    };
  }

  static async atualizarDadosCardapioID(cardapioID, obj) {
    const nomeCadastrado = await database.query("SELECT * FROM cardapio WHERE nome = ?", [obj.nome]);
    const descricaoCadastrado = await database.query("SELECT * FROM cardapio WHERE descricao = ?", [obj.descricao]);
    if (nomeCadastrado.length > 0 && descricaoCadastrado.length > 0) {
      throw {
        dados: { Mensagem: "Não foi possível alterar informações dessa opção" },
        status: 400,
      };
    }
    try {
      await database.query("UPDATE cardapio SET img = ?, nome = ?, descricao = ?, tempoPreparo = ?, preco = ? WHERE cardapioID = ?", [obj.img,obj.nome, obj.descricao, obj.tempoPreparo, obj.preco, cardapioID]);
    } catch (error) {
      return {
        dados: { Error: "MYSQL ERROR", error: error.code },
        status: 500,
      };
    }
    return {
      dados: { Mensagem: `Dados da opção ${obj.nome} atualizado com sucesso` },
      status: 200,
    };
  }

  static async excluirCardapioID(cardapioID) {
    const optionMENU = await database.query(`SELECT * FROM cardapio WHERE cardapioID = ?`, cardapioID);
    if (optionMENU.length === 0) {
      throw {
        dados: { Error: "Desculpe não foi possível deletar, o ID informado não pertence ao nenhuma opção cadastrada" },
        status: 404
      }
    }
    try {
      await database.query("DELETE FROM cardapio WHERE cardapioID = ?", [cardapioID]);
    } catch (error) {
      return {
        dados: { Error: "MYSQL ERROR", error: error.code },
        status: 500,
      };
    }
    return {
      dados: { Mensagem: "Opção excluida com sucesso" },
      status: 200,
    };
  }
}

export default CardapioDAO