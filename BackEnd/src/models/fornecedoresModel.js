import validationAPI from "./validation.js";

const fornecedoresModel = {

  modelarFornecedor: (obj) => {

    if (!validationAPI.validarCNPJ(obj.cnpj)) {
      throw {
        dados: { Error: "CNPJ inválido, verique se há presença de pontos e traços" },
        status: 400
      };
    }
    if (!validationAPI.validarSpaceAccent(obj.razaoSocial)) {
      throw {
        dados: { Error: "Razão Social inválida, verique se há presença de caracter especial" },
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
        dados: { Error:"Telefone inválido (certique-se se o DDD e o 9 foi adicionado)"},
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
          dados: { Error: "Endereço inválido (verique se há presença de caracter especial)" },
          status: 400
        }
    }
    if (!validationAPI.validarSpaceAccent(obj.mercadoria)) {
        throw {
            dados: { Error: "Mercadoria inválida (verique se há presença de caracter especial)" },
          status: 400
        }
    }
    return {
      fornecedorID: obj.fornecedorID,
      cnpj: obj.cnpj,
      razaoSocial: obj.razaoSocial,
      email: obj.email,
      telefone: obj.telefone,
      cep: obj.cep,
      endereco: obj.endereco,
      mercadoria: obj.mercadoria
    };
  }
};

export default fornecedoresModel;