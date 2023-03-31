import database from "./bd.js";

const populateCardapio = () => {

    database.connection.query(
        "CREATE TABLE `restaurante`.`cardapio` (cardapioID INT PRIMARY KEY AUTO_INCREMENT,img VARCHAR(5000) NOT NULL, nome VARCHAR(100) NOT NULL, descricao VARCHAR(700) NOT NULL, tempoPreparo VARCHAR(50) NOT NULL, preco VARCHAR(50) NOT NULL);",
        function (error, results, fields) {
            if (error) {
                console.log(error);
            } else {
                console.log("Tabela dos cardapio criada com sucesso");
            }
        }
    );
    database.connection.query(
        "INSERT INTO cardapio (cardapioID, img, nome, descricao, tempoPreparo, preco) VALUES (NULL, 'https://s2.glbimg.com/b2nej0sDGjBcrgOTDXMms3DGN_A=/620x455/e.glbimg.com/og/ed/f/original/2021/01/14/mandioca-frita-receita.jpg','Aipim frito', 'Porção super crocante frita na manteiga' , '10min', 'R$12,00'),(NULL, 'https://img.itdg.com.br/tdg/images/recipes/000/069/468/358656/358656_original.jpg?mode=crop&width=710&height=400','Pão de queijo', 'Massa especial da casa com muito queijo e muita crocancia' , '10 min', 'R$12,00'),(NULL, 'https://assets.unileversolutions.com/recipes-v2/99457.jpg ','buraco quente','carne moída picante num pão especial. excesso de sabor.' , '10min', 'R$12,00'),(NULL, 'https://www.comidaereceitas.com.br/wp-content/uploads/2010/04/Caipirinha-de-tequila.jpg','caipirinha', 'tendo a opção de ser feita com cachaça ou vodka, tambem temos opção de sabores' , '5 min', 'R$15,00'),(NULL, 'https://truffle-assets.imgix.net/01157060-drink-de-abacaxi-acafrao-e-guarana-zero-l-thumb.jpg','guaraná antartica', 'refrigerante super gelado e com bastante gás.' , '5 min', 'R$15,00'),(NULL, 'https://static1.minhavida.com.br/recipes/62/8e/70/16/caldo-de-cana-orig-1.jpg','caldo de cana', 'cana moída na casa com excesso de doçura' , '5 min', 'R$15,00'),(NULL, 'https://s2.glbimg.com/PI_9zbqRX1yiHbfXvHXLmib_GJo=/e.glbimg.com/og/ed/f/original/2018/11/02/feijoada.jpg','Feijoada', 'prato tipicamente brasileiro, feito com muito amor, carinho e claro, cachaça. prato com sabor forte, muito bem temperado e sem merreca. recomendado pegar todo o combo 1, tambem conhecedico como combo mec tega composto por uma entrada de aipim mega frito na manteiga, uma super caipirinha da casa, a feijoada suprema e de sobremesa a ultra paçoca de amendoin que consegue ao mesmo tempo ser crocante e macia.' , '40 min', 'R$30,00'),(NULL, 'https://www.receitas-sem-fronteiras.com/uploads/recipe/148_crop.jpg?1475606864','Camarão na Moranga', 'prato tipicamente brasileiro, super moranga de tamanho mediano pra ninguem ficar triste, com muito recheio e bastante tempero. recomendado pegar no combo 2 tambem conhecedico como combo ainda bb.  composto por uma entrada de pães de quiejo mega crocantes e sequinhos, um maravilhoso guarana antartica pra acompanhar a super moranga e pra fechar com chave de ouro o ultimate quindim da casa.' , '40 min', 'R$30,00'),(NULL,'https://www.receitasnestle.com.br/sites/default/files/srh_recipes/f4322f4b99edd0f839d72ddf8908df79.jpg','Arroz Carreteiro', 'prato tipicamente brasileiro, o mais famoso dos famosos o sensacional arroz carreteiro tambem chamado de arroz com tudo dentro.recomendado pegar no combo 3 tambem conhecedico como combo ain papai.  composto por uma entrada do buraco mais quenete do mundo, bem picante e muito saboroso. a bebida não poderia ser outra senão um podersoso e docinho caldo de cana,pra acompanhar o sensacional arroz carreteiro e pra fechar, a sobremesesa mais querida dos brasileiros. o preferido, um delicioso pavê.' , '40 min', 'R$30,00'),(NULL, 'https://www.culinariapravaler.com/image/postagens/2020/05/pave-de-pacoca-com-amendoim-na-travessa-muito-bom-e-muito-facil-de-fazer-.html.jpg','Paçoca de amendoim', 'feito na casa uma travessa do mais saboroso e poderoso amendoim.' , '20 min', 'R$20,00'),(NULL, 'https://cloudfront-us-east-1.images.arcpublishing.com/estadao/KPEAZOQLPRGZ3AGZ3RE5PTF2HU.jpg','Quindim', 'sobremesa que remete ao carinho da vovó feito com muito amor, carinho e sabor.' , '20 min', 'R$20,00'),(NULL, 'https://www.sabornamesa.com.br/media/k2/items/cache/e2ead9c1349a48396463990fe7b55a21_XL.jpg','Pavê', 'doçura preferida dos brasileiros, e sim, esse é pacumê.' , '20 min', 'R$20,00')",
        function (error, results, fields) {
            if (error) {
                console.log(error);
            } else {
                console.log("Tabela do cardapio populada com sucesso");
            }
        }
    );
}

export default populateCardapio