import validationAPI from "./validation.js";

const clienteModel = {

  modelarCliente: (obj) => {

    if (!validationAPI.validarCPF(obj.cpf)) {
      throw {
        dados: { Error: "CPF inválido (incluir pontos e traço entre os números)" },
        status: 400
      };
    }
    if (!validationAPI.validarSpaceAccent(obj.nome)) {
      throw {
        dados: { Error: "Nome inválido, verique se há presença de caracter especial" },
        status: 400
      };
    }
    if (!validationAPI.validarEMAIL(obj.email)) {
      throw {
        dados: { Error: "E-mail inválido (certifique se há presença @ ou .com)" },
        status: 400
      };
    }
    if (!validationAPI.validarTELEFONE(obj.telefone)) {
      throw {
        dados: ("Telefone inválido (certique-se se o DDD e o 9 foi adicionado)"),
        status: 400
      };
    }
    if (!validationAPI.validarCEP(obj.cep)) {
      throw {
        dados: { Error: "CEP inválido (incluir pontos e traços entre os números)" },
        status: 400
      };
    }
    if (!validationAPI.validarSpaceAccentNumber(obj.endereco)) {
      throw {
        dados: { Error: "Endereço verique se há presença de caracter especial" },
        status: 400
      };
    }
    return {
      clienteID: obj.clienteID,
      cpf: obj.cpf,
      nome: obj.nome,
      email: obj.email,
      telefone: obj.telefone,
      cep: obj.cep,
      endereco: obj.endereco
    };
  }
};

export default clienteModel;