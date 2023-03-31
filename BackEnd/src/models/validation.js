const validationAPI = {

  validarCPF: (cpf) => {
    const cpfVALIDO = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    return cpfVALIDO.test(cpf);
  },

  validarCNPJ: (cnpj) => {
  const cnpjVALIDO = /^\d{2}\.\d{3}\.\d{3}\d{4}\-\d{2}$/;
    return cnpjVALIDO.test(cnpj);
  },

  validarEMAIL: (email) => {
    const emailVALIDO = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailVALIDO.test(email);
  },

  validarTELEFONE: (telefone) => {
    const telefoneVALIDO = /^(\(\d{2}\)\s*\d{4,5}\-\d{4}|\d{2}\s*9\d{4}\-\d{4})$/;
    return telefoneVALIDO.test(telefone);
  },

  validarCEP: (cep) => {
    const cepVALIDO = /^\d{5}-\d{3}$/;
    return cepVALIDO.test(cep);
  },

  validarSpaceAccent: (SpaceAccent) => {
    const SpaceAccentVALIDO = /^[a-zA-Z\u00C0-\u00FF\s]+$/;
    return SpaceAccentVALIDO.test(SpaceAccent);
  },

  validarSpaceAccentNumber: (SpaceAccentNumber) => {
    const SpaceAccentNumberVALIDO = /^[a-zA-ZÀ-ú\d\s]+$/;
    return SpaceAccentNumberVALIDO.test(SpaceAccentNumber);
  },

  validarDinheiro : (dinheiro) => {
    const dinheiroVALIDO = /^R\$ \d{1,3}(,\d{3})*.\d{2}$/;
    return dinheiroVALIDO.test(dinheiro);
  },

  validarHoraMin: (HoraMin) => {
    const HoraMinVALIDO = /^[a-zA-ZÀ-ú\d\s]+$/;
    return HoraMinVALIDO.test(HoraMin);
  },
}

export default validationAPI