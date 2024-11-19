import Doador from '../Modelo/Doador.js';
export default class DoadorCTRL {

    gravar(requisiçao, resposta) {
        resposta.type("application/json");
        if (requisiçao.method === "POST" && requisiçao.is('application/json')) {
            const dados = requisiçao.body;
            const nome = dados.nome;
            const cpf = dados.cpf;
            const endereco = dados.endereco;
            const bairro = dados.bairro;
            const cidade = dados.cidade;
            const uf = dados.uf;
            const fone = dados.fone;
            const email = dados.email;
            if (nome && cpf && endereco && bairro && cidade && uf && fone && email) {
                const doador = new Doador(nome, cpf, endereco, bairro, cidade, uf, fone, email);
                doador.gravar().then(() => {
                    resposta.status(200).json({
                        status: true,
                        mensagem: "Doador gravado com sucesso!!"
                    });
                }).catch((erro) => {
                    resposta.status(500).json({
                        status: false,
                        mensagem: erro.message
                    })
                });
            }
            else {
                resposta.status(400).json({
                    status: false,
                    mensagem: "Informe todos os dados do Doador conforme a documentação da API"
                });
            }
        }
        else {
            resposta.status(400).json({
                status: false,
                mensagem: "Método não permitido ou Doador no formato JSON não fornecido! Consulte a documentação da API"
            });
        }
    }

    atualizar(requisiçao, resposta) {
        resposta.type("application/json");
        if (requisiçao.method === "PUT" && requisiçao.is('application/json')) {
            const dados = requisiçao.body;
            const nome = dados.nome;
            const cpf = dados.cpf;
            const endereco = dados.endereco;
            const bairro = dados.bairro;
            const cidade = dados.cidade;
            const uf = dados.uf;
            const fone = dados.fone;
            const email = dados.email;
            if (nome && cpf && endereco && bairro && cidade && uf && fone && email) {
                const doador = new Doador(nome, cpf, endereco, bairro, cidade, uf, fone, email);
                doador.atualizar().then(() => {
                    resposta.status(200).json({
                        status: true,
                        mensagem: "Doador atualizado com sucesso!"
                    });
                }).catch((erro) => {
                    resposta.status(500).json({
                        status: false,
                        mensagem: erro.message
                    })
                });
            }
            else {
                resposta.status(400).json({
                    status: false,
                    mensagem: "Informe todos os dados do doador conforme a documentação da API"
                });
            }
        }
        else {
            resposta.status(400).json({
                status: false,
                mensagem: "Método não permitido ou doador no formato JSON não fornecido! Consulte a documentação da API"
            });
        }
    }

    excluir(requisiçao, resposta) {
        resposta.type("application/json");
        if (requisiçao.method === "DELETE" && requisiçao.is('application/json')) {
            const dados = requisiçao.body;
            const nome = dados.nome;
            const cpf = dados.cpf;
            if (cpf) {
                const doador= new Doador(nome, cpf);
                doador.removerDoBancoDados().then(() => {
                    resposta.status(200).json({
                        status: true,
                        mensagem: "Doador excluído com sucesso!"
                    });
                }).catch((erro) => {
                    resposta.status(500).json({
                        status: false,
                        mensagem: erro.message
                    })
                });
            }
            else {
                resposta.status(400).json({
                    status: false,
                    mensagem: "Informe cpf do doador conforme a documentação da API"
                });
            }
        }
        else {
            resposta.status(400).json({
                status: false,
                mensagem: "Método não permitido ou doador no formato JSON não fornecido! Consulte a documentação da API"
            });
        }
    }

    consultar(requisiçao, resposta) {
        resposta.type("application/json");
        if (requisiçao.method === "GET") {
            const doador = new Doador();
            doador.consultar('').then((doadores) => {
                resposta.status(200).json(doadores);
            }).catch((erro) => {
                resposta.status(500).json({
                    status: false,
                    mensagem: erro.message
                })
            });
        }
        else {
            resposta.status(400).json({
                status: false,
                mensagem: "Método não permitido!  Consulte a documentação da API"
            });
        }
    }

    consultarPelocpf(requisiçao, resposta) {
        resposta.type("application/json");
        const cpf = requisiçao.params['cpf'];
        if (requisiçao.method === "GET") {
            const doador = new Doador();
            doador.consultarCpf(cpf).then((doador) => {
                resposta.status(200).json(doador);
            }).catch((erro) => {
                resposta.status(500).json({
                    status: false,
                    mensagem: erro.message
                })
            });
        }
        else {
            resposta.status(400).json({
                status: false,
                mensagem: "Método não permitido! Consulte a documentação da API"
            });
        }
    }
}