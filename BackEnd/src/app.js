import express from "express";
import clientesController from "./controllers/clientesController.js";
import fornecedoresController from "./controllers/fornecedoresController.js";
import funcionariosController from "./controllers/funcionariosController.js";
import cardapioController from "./controllers/cardapioController.js";
import cors from "cors"

const app = express()

app.use(cors())

app.use(express.json())

clientesController(app)
funcionariosController(app)
fornecedoresController(app)
cardapioController(app)

export default app