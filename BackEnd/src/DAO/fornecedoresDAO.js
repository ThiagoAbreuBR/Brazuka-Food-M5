import database from "../infra/bd.js";

class FornecedoresDAO {

    static async fornecedores() {

        const fornecedoresCadastrados = await database.query("SELECT * FROM fornecedores");
        if (fornecedoresCadastrados === 0) {
            throw {
                dados: { Mensagem: "Desculpe, não existe nenhum fornecedor cadastrado" },
                status: 404,
            };
        } else {
            return {
                dados: { fornecedoresCadastrados },
                status: 200,
            };
        }
    }
    static async fornecedorID(param) {

        const fornecedorCadastrado = await database.query(`SELECT * FROM fornecedores WHERE fornecedorID = ?`, param);
        if (fornecedorCadastrado.length === 0) {
            throw {
                dados: { Mensagem: "Desculpe, fornecedor não encontrado" },
                status: 404
            }
        } else {
            return {
                dados: { fornecedorCadastrado },
                status: 200,
            };
        }
    }

    static async fornecedorCNPJ(param) {

        const dadosFornecedor = await database.query(`SELECT * FROM fornecedores WHERE cnpj = ?`, param);
        if (dadosFornecedor.length === 0) {
            throw {
                dados: { Mensagem: "Desculpe, fornecedor não encontrado" },
                status: 404
            }
        } else {
            return {
                dados: { dadosFornecedor },
                status: 200,
            };
        }
    }

    static async cadastrarVerificar(obj) {

        const razaoSocialCadastrado = await database.query("SELECT * FROM fornecedores WHERE razaoSocial = ?", [obj.razaoSocial]);
        const cnpjCadastrado = await database.query("SELECT * FROM fornecedores WHERE cnpj = ?", [obj.cnpj]);
        if (razaoSocialCadastrado.length > 0 || cnpjCadastrado.length > 0) {
            throw {
                dados: { Mensagem: "Fornecedor já cadastrado" },
                status: 400,
            };
        }
        try {
            await database.query("INSERT INTO fornecedores (fornecedorID, cnpj, razaoSocial ,email,telefone,cep,endereco,mercadoria) VALUES (?,?,?,?,?,?,?,?)", Object.values(obj));
        } catch (error) {
            return {
                dados: { Error: "MYSQL ERROR", error: error.code },
                status: 500,
            };
        }
        return {
            dados: { Mensagem: "Fornecedor cadastrado com sucesso" },
            status: 201,
        };
    }

    static async atualizarDadosFornecedoresID(fornecedorID, obj) {
        const razaoSocialCadastrado = await database.query("SELECT * FROM fornecedores WHERE razaoSocial = ?", [obj.razaoSocial]);
        const cpnjCadastrado = await database.query("SELECT * FROM fornecedores WHERE cnpj = ?", [obj.cnpj]);
        if (razaoSocialCadastrado.length > 0 || cpnjCadastrado.length > 0) {
            throw {
                dados: { Mensagem: "Não foi possível alterar seus dados" },
                status: 400,
            };
        }
        try {
            await database.query("UPDATE fornecedores SET cnpj = ?, razaoSocial = ?, email = ?, telefone = ?, cep = ?, endereco = ?, mercadoria = ? WHERE cnpj = ?", [obj.cnpj, obj.razaoSocial, obj.email, obj.telefone, obj.cep, obj.endereco, obj.mercadoria, fornecedorID]);
        } catch (error) {
            return {
                dados: { Error: "MYSQL ERROR", error: error.code },
                status: 500,
            };
        }
        return {
            dados: { Mensagem: `Dados do fornecedor ${obj.razaoSocial} atualizado com sucesso` },
            status: 200,
        };
    }

    static async atualizarDadosFornecedorCNPJ(cnpj, obj) {
        const razaoSocialCadastrado = await database.query("SELECT * FROM fornecedores WHERE razaoSocial = ?", [obj.razaoSocial]);
        const cpnjCadastrado = await database.query("SELECT * FROM fornecedores WHERE cnpj = ?", [obj.cnpj]);
        if (razaoSocialCadastrado.length > 0 || cpnjCadastrado.length > 0) {
            throw {
                dados: { Mensagem: "Não foi possível alterar seus dados" },
                status: 400,
            };
        }
        try {
            await database.query("UPDATE fornecedores SET cnpj = ?, razaoSocial = ?, email = ?, telefone = ?, cep = ?, endereco = ?, mercadoria = ? WHERE cnpj = ?", [obj.cnpj, obj.razaoSocial, obj.email, obj.telefone, obj.cep, obj.endereco, obj.mercadoria, cnpj]);
        } catch (error) {
            return {
                dados: { Error: "MYSQL ERROR", error: error.code },
                status: 500,
            };
        }
        return {
            dados: { Mensagem: `Dados do fornecedor ${obj.razaoSocial} atualizado com sucesso`},
            status: 200,
        };
    }

    static async excluirID(fornecedorID) {
        const dadosFornecedor = await database.query(`SELECT * FROM fornecedores WHERE fornecedorID = ?`, fornecedorID);
        if (dadosFornecedor.length === 0) {
            throw {
                dados: { Error: "Desculpe não foi possível deletar, o ID informado não pertence ao nenhum fornecedor cadastrado" },
                status: 404
            }
        }
        try {
            await database.query("DELETE FROM fornecedores WHERE fornecedorID = ?", [fornecedorID]);
        } catch (error) {
            return {
                dados: { Error: "MYSQL ERROR", error: error.code },
                status: 500,
            };
        }
        return {
            dados: { Mensagem: "Fornecedor excluido com sucesso" },
            status: 200,
        };
    }

    static async excluirCNPJ(cnpj) {
        const dadosFornecedor = await database.query(`SELECT * FROM fornecedores WHERE cnpj = ?`, cnpj);
        if (dadosFornecedor.length === 0) {
            throw {
                dados: { Error: "Desculpe não foi possível deletar, o CNPJ informado não pertence ao nenhum fornecedor cadastrado" },
                status: 404
            }
        }
        try {
            await database.query("DELETE FROM fornecedores WHERE cnpj = ?", [cnpj]);
        } catch (error) {
            return {
                dados: { Error: "MYSQL ERROR", error: error.code },
                status: 500,
            };
        }
        return {
            dados: { Mensagem: "Fornecedor excluido com sucesso" },
            status: 200,
        };
    }
}

export default FornecedoresDAO