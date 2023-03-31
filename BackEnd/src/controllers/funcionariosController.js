import funcionarioModel from "../models/funcionariosModel.js";
import FuncionariosDAO from "../DAO/funcionariosDAO.js";

const funcionariosController = (app) => {

  app.get("/funcionarios", async (req, res) => {
    try {
      const response = await FuncionariosDAO.funcionarios();
      res.status(response.status).send(response.dados);
    } catch (error) {
      res.status(error.status).send(error.dados);
    }
  });

  app.get("/funcionarios/funcionarioID/:funcionarioID", async (req, res) => {
    try {
      const response = await FuncionariosDAO.funcionarioID(req.params.funcionarioID);
      res.status(response.status).send(response.dados);
    } catch (error) {
      res.status(error.status).send(error.dados);
    }
  });

  app.post("/funcionarios", async (req, res) => {
    try {
      const funcionarioModelado = funcionarioModel.modelarFuncionario(req.body);
      const response = await FuncionariosDAO.cadastrarVerificarFuncionario(funcionarioModelado);
      res.status(response.status).send(response.dados);
    } catch (error) {
      res.status(error.status).send(error.dados);
    }
  });

  app.put("/funcionarios/funcionarioID/:funcionarioID", async (req, res) => {
    try {
      const funcionarioModelado = funcionarioModel.modelarFuncionario(req.body);
      const response = await FuncionariosDAO.atualizarFuncionarioCadastradoID(req.params.funcionarioID, funcionarioModelado)
      res.status(response.status).send(response.dados);
    } catch (error) {
      res.status(error.status).send(error.dados);
    }
  });

  app.delete("/funcionarios/funcionarioID/:funcionarioID", async (req, res) => {
    try {
      const response = await FuncionariosDAO.excluirfuncionarioID(req.params.funcionarioID)
      res.status(response.status).send(response.dados)
    } catch (error) {
      res.status(error.status).send(error.dados);
    }
  });
}

export default funcionariosController;