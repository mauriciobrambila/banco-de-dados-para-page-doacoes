import DoadorBD from '../Persistencia/DoadorBD.js';
export default class Doador {

    #nome;
    #cpf;
    #endereco;
    #bairro;
    #cidade;
    #uf;
    #fone;
    #email;

    constructor(nome, cpf, endereco, bairro, cidade, uf, fone, email) {
        this.#nome = nome;
        this.#cpf = cpf;
        this.#endereco = endereco;
        this.#bairro = bairro;
        this.#cidade = cidade;
        this.#uf = uf;
        this.#fone = fone;
        this.#email = email
    }

    get nome() {
        return this.#nome
    }
    set nome(novoNome) {
        this.#nome = novoNome
    }

    get cpf() {
        return this.#cpf
    }
    set cpf(novoCPF) {
        this.#cpf = novoCPF
    }

    get endereco() {
        return this.#endereco
    }
    set endereco(novoEndereco) {
        this.#endereco = novoEndereco
    }

    get bairro() {
        return this.#bairro
    }
    set bairro(novoBairro) {
        this.#bairro = novoBairro
    }

    get cidade() {
        return this.#cidade
    }
    set cidade(novoCidade) {
        this.#cidade = novoCidade
    }

    get uf() {
        return this.#uf
    }
    set uf(novoUF) {
        this.#uf = novoUF
    }

    get fone() {
        return this.#fone
    }
    set fone(novoFone) {
        this.#fone = novoFone
    }

    get email() {
        return this.#email
    }
    set email(novoEmail) {
        this.#email = novoEmail
    }

    toJSON() {
        return {
            "nome": this.#nome,
            "cpf": this.#cpf,
            "endereco": this.#endereco,
            "bairro": this.#bairro,
            "cidade": this.#cidade,
            "uf": this.#uf,
            "fone": this.#fone,
            "email": this.#email
        }
    }

    async gravar() {
        const doadorBD = new DoadorBD();
        await doadorBD.incluir(this);
    }

    async atualizar() {
        const doadorBD = new DoadorBD();
        await doadorBD.alterar(this);
    }

    async removerDoBancoDados() {
        const doadorBD = new DoadorBD();
        await doadorBD.excluir(this);
    }

    async consultar(termo) {
        const doadorBD = new DoadorBD();
        const doadores = await doadorBD.consultar(termo);
        return doadores;
    }

    async consultarCCpf(cpf) {
        const doadorBD = new DoadorBD();
        const doadores = await doadorBD.consultarCpf(cpf);
        return doadores;

    }
}