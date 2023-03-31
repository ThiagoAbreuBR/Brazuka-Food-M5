import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import cardapioFetch, { deleteCardapioID, getCardapio } from "./axios/config";
import Logo from "../imagens/logo.png";
import { motion } from "framer-motion"
// Import CSS via MODULE
import styles from "../styles/Cardapio.module.css"

const Cardapio = () => {

    const [cardapio, setCardapio] = useState([])

    // Função sendo executada apenas quando o componente aparecer na tela
    useEffect(() => {
        async function handleRequisicao() {
            const dados = await getCardapio()
            setCardapio(dados.data.optionsMENU)
        }
        handleRequisicao()
    }, [])

    function apagarCardapio(cardapioID) {
        deleteCardapioID(cardapioID)
        setCardapio(cardapio.filter(cardapio => cardapio.cardapioID !== cardapioID))
    }
    return (
        <motion.div className={styles.cardapioEdit} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>

            <motion.div className={styles.logoAnimated} initial={{ width: 0 }} animate={{ width: "100%" }} exit={{ x: -window.innerWidth }}  >
                <img src={Logo} alt="" />
                <h1>O melhor tempero brasileiro, explodindo no seu paladar!!!</h1>
            </motion.div>
            

            {cardapio.map((cardapio, key) => {

                return (
                    
                    <div className={styles.card}>
                        <div className={styles.content}>
                            <img src={cardapio.img} alt="" />
                            <h1>{cardapio.nome}</h1>
                            <p>{cardapio.descricao}</p>
                            <button className={styles.preco}>{cardapio.preco}</button>
                            <Link to={{ pathname: `/editoption/` }}>
                                <button className={styles.atualizar}>Alterar</button>
                            </Link>
                            <button className={styles.deletar} onClick={() => apagarCardapio(cardapio.cardapioID)}>Excluir</button>
                        </div>
                    </div>
                )
            })}
        </motion.div>
    )
}
export default Cardapio
