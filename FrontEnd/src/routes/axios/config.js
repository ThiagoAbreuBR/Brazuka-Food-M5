import axios from "axios";

// Configuração do API Global

const cardapioFetch =  axios.create({
    baseURL : "http://localhost:3000",
})

export async function getCardapio() {
    const resposta = await cardapioFetch.get("/cardapio")
    return resposta
}

export async function getCardapioID(cardapioID) {
    const resposta = await cardapioFetch.get(`/cardapio/cardapioID/${cardapioID}`)
    return resposta
}

export async function deleteCardapioID(cardapioID) {
   await cardapioFetch.delete(`/cardapio/cardapioID/${cardapioID}`)

}

export async function postCardapioID() {
    const resposta = await cardapioFetch.post("/cardapio")
    return resposta
}

export async function putCardapioID(cardapioID, obj) {
    const resposta = await cardapioFetch.put(`/cardapio/cardapioID/${cardapioID}`, obj);
    return resposta;
  }
  
  

export default cardapioFetch;