import FornecedoresModel from "../models/fornecedoresModel.js";
import FornecedoresDAO from "../DAO/fornecedoresDAO.js";

const fornecedoresController = (app) => {

  app.get("/fornecedores", async (req, res) => {
    const response = await FornecedoresDAO.fornecedores(req.body);
    res.status(response.status).send(response.dados);
  });

  app.get("/fornecedores/fornecedorID/:fornecedorID", async (req, res) => {
    const response = await FornecedoresDAO.fornecedorID(req.params.fornecedorID);
    res.status(response.status).send(response.dados);
  });

  app.get("/fornecedores/cnpj/:cnpj", async (req, res) => {
    const response = await FornecedoresDAO.fornecedorCNPJ(req.params.cnpj);
    res.status(response.status).send(response.dados);
  });

  app.post("/fornecedores", async (req, res) => {
    try {
      const fornecedorModelado = FornecedoresModel.modelarFornecedor(req.body);
      const response = await FornecedoresDAO.cadastrarVerificar(fornecedorModelado);
      res.status(response.status).send(response.dados);
    } catch (error) {
      res.status(error.status).send(error.dados);
    }
  });

  app.put("/fornecedores/fornecedorID/:fornecedorID", async (req, res) => {
    try {
      const fornecedorModelado = FornecedoresModel.modelarFornecedor(req.body);
      const response = await FornecedoresDAO.atualizarDadosFornecedoresID(req.params.fornecedorID, fornecedorModelado)
      res.status(response.status).send(response.dados);
    } catch (error) {
      res.status(error.status).send(error.dados);
    }
  });

  app.put("/fornecedores/cnpj/:cnpj", async (req, res) => {
    try {
      const fornecedorModelado = FornecedoresModel.modelarFornecedor(req.body);
      const response = await FornecedoresDAO.atualizarDadosFornecedorCNPJ(req.params.cnpj, fornecedorModelado)
      res.status(response.status).send(response.dados);
    } catch (error) {
      res.status(error.status).send(error.dados);
    }
  });

  app.delete("/fornecedores/fornecedorID/:fornecedorID", async (req, res) => {
    const response = await FornecedoresDAO.excluirID(req.params.fornecedorID)
    res.status(response.status).send(response.dados)
  });

  app.delete("/fornecedores/cnpj/:cnpj", async (req, res) => {
    const response = await FornecedoresDAO.excluirCNPJ(req.params.cnpj)
    res.status(response.status).send(response.dados)
  });
};

export default fornecedoresController;