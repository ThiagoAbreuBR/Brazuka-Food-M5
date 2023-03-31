import React from "react";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useForm } from "react-hook-form"
import { motion } from "framer-motion";
import Logo from "../imagens/logo.png";
import { useNavigate } from "react-router-dom";
import cardapioFetch from "./axios/config";
// Import CSS via MODULE
import styles from "../styles/EditOption.module.css"


// Validação dos campos de inputs
const validationCardapio = yup.object().shape({
    cardapioID: yup.string().required("Informe o ID do prato"),
    nome: yup.string().required("Informe a nome da opção do cardápio"),
    descricao: yup.string().required("Informe a descrição"),
    tempoPreparo: yup.string().required("Informe o tempo de preparo"),
    preco: yup.string().required("Informe o preço"),
    img: yup.string().required("Informe URL da imagem da opção do cardápio"),
})

const EditReal = () => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(validationCardapio)
    })

    const navigate = useNavigate()


    const editOption = dados => cardapioFetch.put(`/cardapio/cardapioID/${dados.cardapioID}`, dados)
        .then(() => {
            console.log("Modificação feita com sucesso")
            navigate('/')
        })
        .catch(() => {
            console.log("Infelizmente não foi possível modificar a opção do menu")
        })

    return (
        < motion.div className={styles.editOption} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>

            <motion.div className={styles.logoAnimated} initial={{ width: 0 }} animate={{ width: "100%" }} exit={{ x: -window.innerWidth }}  >
                <img src={Logo} alt="" />
            </motion.div>

            <h1>Faltou alguma informação ou quer mudar sua sugestão</h1>
            <h1>Atualize</h1>

            <div className={styles.newInput}>
                <form className={styles.formInput} onSubmit={handleSubmit(editOption)} >


                    <div className={styles.addOption}>

                        <div>
                            <input type="text" name="id" placeholder="ID" className={styles.optionName} {...register("cardapioID")} />
                            <h3 className={styles.error}>{errors.cardapioID?.message}</h3>
                        </div>

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

export default EditReal