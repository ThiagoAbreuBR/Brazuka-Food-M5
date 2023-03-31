import cardapioModel from "../models/cardapioModel.js";
import CardapioDAO from "../DAO/cardapioDAO.js";

const cardapioController = (app) => {

  app.get("/cardapio", async (req, res) => {
    try {
      const response = await CardapioDAO.cardapio();
      res.status(response.status).send(response.dados);
    } catch (error) {
      res.status(error.status).send(error.dados);
    }
  });

  app.get("/cardapio/cardapioID/:cardapioID", async (req, res) => {
    try {
      const response = await CardapioDAO.cardapioID(req.params.cardapioID);
      res.status(response.status).send(response.dados);
    } catch (error) {
      res.status(error.status).send(error.dados);
    }
  });

  app.post("/cardapio", async (req, res) => {
    try {
      const cardapioModelado = cardapioModel.modelarCardapio(req.body);
      const response = await CardapioDAO.cadastrarVerificarCardapio(cardapioModelado);
      res.status(response.status).send(response.dados);
    } catch (error) {
      res.status(error.status).send(error.dados);
    }
  });

  app.put("/cardapio/cardapioID/:cardapioID", async (req, res) => {
    try {
      const cardapioModelado = cardapioModel.modelarCardapio(req.body);
      const response = await CardapioDAO.atualizarDadosCardapioID(req.params.cardapioID, cardapioModelado)
      res.status(response.status).send(response.dados);
    } catch (error) {
      res.status(error.status).send(error.dados);
    }
  });

  app.delete("/cardapio/cardapioID/:cardapioID", async (req, res) => {
    try {
      const response = await CardapioDAO.excluirCardapioID(req.params.cardapioID)
      res.status(response.status).send(response.dados)
    } catch (error) {
      res.status(error.status).send(error.dados);
    }
  });
}

export default cardapioController;