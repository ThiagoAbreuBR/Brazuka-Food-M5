import React from "react";
import cardapioFetch from "./axios/config";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import Logo from "../imagens/logo.png";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
// Import CSS via MODULE
import styles from "../styles/NewOption.module.css"

// Validação dos campos de inputs
const validationCardapio = yup.object().shape({
    nome: yup.string().required("Informe a nome da opção do cardápio"),
    descricao: yup.string().required("Informe a descrição da opção do cardápio"),
    tempoPreparo: yup.string().required("Informe o tempo de preparo da opção do cardápio"),
    preco: yup.string().required("Informe o preço da opção do cardápio"),
    img: yup.string().required("Informe URL da imagem da opção do cardápio da opção do cardápio"),
})

const NewOption = () => {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(validationCardapio)
    })

    const navigate = useNavigate()


    const addOptions = dados => cardapioFetch.post("/cardapio/", dados)
        .then(() => {
            console.log("Opção de cardápio adicionada na API com sucesso")
            navigate('/')

        })
        .catch(() => {
            console.log("Infelizmente não foi possível adicionar a opção de cardápio na API")
        })


    return (
        < motion.div className={styles.addOptions} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>

            <motion.div className={styles.logoAnimated} initial={{ width: 0 }} animate={{ width: "100%" }} exit={{ x: -window.innerWidth }}  >
                <img src={Logo} alt="" />
            </motion.div>

            <h1>Quer vê seus pratos favoritos em nosso restaurante ?</h1>
            <h1>Adicione ele como opção no cardápio</h1>

            <div className={styles.newInput}>

                <form className={styles.formInput} onSubmit={handleSubmit(addOptions)} >


                    <div className={styles.addOption}>
                        <div>
                            <input type="text" name="nome" placeholder="Prato de entrada, principal, bebidas ou sobremesas" className={styles.optionName} {...register("nome")} />
                            <h3 className={styles.error}>{errors.nome?.message}</h3>
                        </div>

                        <div className={styles.option}>
                            <textarea type="text" name="descricao" placeholder="Descrição" className={styles.optionDescription} {...register("descricao")} />
                            <h3 className={styles.error}>{errors.descricao?.message}</h3>
                        </div>

                        <div className={styles.option}>
                            <input type="text" name="preparo" placeholder="Tempo de preparo" className={styles.optionTempoPreparo} {...register("tempoPreparo")} />
                            <h3 className={styles.error}>{errors.tempoPreparo?.message}</h3>
                        </div>

                        <div className={styles.option}>
                            <input type="text" name="preco" placeholder="Preço" className={styles.optionPreco} {...register("preco")} />
                            <h3 className={styles.error}>{errors.preco?.message}</h3>
                        </div>
                        <div className={styles.option}>
                            <input type="text" name="img" placeholder="URL da opção do cardápio" className={styles.optionIMG} {...register("img")} />
                            <h3 className={styles.error}>{errors.img?.message}</h3>
                        </div>

                        <div className={styles.option}>
                            <input type="submit" className={styles.enviarOption} />
                        </div>
                    </div>

                </form>

            </div>

        </motion.div>
    )
}

export default NewOption