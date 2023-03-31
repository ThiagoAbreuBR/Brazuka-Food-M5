import validationAPI from "./validation.js";

const cardapioModel = {

  modelarCardapio: (obj) => {

    if (!validationAPI.validarSpaceAccent(obj.nome)) {
      throw {
        dados: { Error: "Nome inválido, verique se há presença de caracter especial" },
        status: 400
      };
    }
    if (!validationAPI.validarSpaceAccentPoint(obj.descricao)) {
      throw {
        dados: { Error: "Descrição inválida, verique se há presença de caracter especial" },
        status: 400
      };
    }
    if (!validationAPI.validarHoraMin(obj.tempoPreparo)) {
      throw {
        dados: ("(Padrão esperado 10min 1h)"),
        status: 400
      };
    }
    if (!validationAPI.validarDinheiro(obj.preco)) {
      throw {
        dados: { Error: "Escrita do dinheiro inválida (incluir pontos e vírgula entre os números)" },
        status: 400
      };
    }
    return {
      cardapioID: obj.cardapioID,
      img: obj.img,
      nome: obj.nome,
      descricao: obj.descricao,
      tempoPreparo: obj.tempoPreparo,
      preco: obj.preco
    };
  }
};

export default cardapioModel;
