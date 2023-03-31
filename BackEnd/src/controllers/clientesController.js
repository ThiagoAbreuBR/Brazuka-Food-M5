import clienteModel from "../models/clientesModel.js";
import ClientesDAO from "../DAO/clientesDAO.js";

const clientesController = (app) => {

  app.get("/clientes", async (req, res) => {
    try {
      const response = await ClientesDAO.clientes();
      res.status(response.status).send(response.dados);
    } catch (error) {
      res.status(error.status).send(error.dados);
    }
  });

  app.get("/clientes/clienteID/:clienteID", async (req, res) => {
    try {
      const response = await ClientesDAO.clienteID(req.params.clienteID);
      res.status(response.status).send(response.dados);
    } catch (error) {
      res.status(error.status).send(error.dados);
    }
  });

  app.post("/clientes", async (req, res) => {
    try {
      const clienteModelado = clienteModel.modelarCliente(req.body);
      const response = await ClientesDAO.cadastrarVerificarCliente(clienteModelado);
      res.status(response.status).send(response.dados);
    } catch (error) {
      res.status(error.status).send(error.dados);
    }
  });

  app.put("/clientes/clienteID/:clienteID", async (req, res) => {
    try {
      const clienteModelado = clienteModel.modelarCliente(req.body);
      const response = await ClientesDAO.atualizarDadosClienteID(req.params.clienteID, clienteModelado)
      res.status(response.status).send(response.dados);
    } catch (error) {
      res.status(error.status).send(error.dados);
    }
  });

  app.delete("/clientes/clienteID/:clienteID", async (req, res) => {
    try {
      const response = await ClientesDAO.excluirClienteID(req.params.clienteID)
      res.status(response.status).send(response.dados)
    } catch (error) {
      res.status(error.status).send(error.dados);
    }
  });
}

export default clientesController;