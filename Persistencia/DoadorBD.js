import Doador from '../Modelo/Doador.js';
import Conectar from './Conexao.js';
export default class DoadorBD {

    async incluir(doador) {
        if (doador instanceof Doador) {
            const conexao = await Conectar();
            const sql = "INSERT INTO doador(nome, cpf, endereco, bairro, cidade, uf, fone, email) VALUES(?,?,?,?,?,?,?,?)";
            const valores = [doador.nome, doador.cpf, doador.endereco, doador.bairro, doador.cidade, doador.uf, doador.fone, doador.email];
            await conexao.query(sql, valores);
        }
    }

    async alterar(doador) {
        if (doador instanceof Doador) {
            const conexao = await Conectar();
            const sql = "UPDATE doador SET nome=?, endereco=?, bairro=?, cidade=?, uf=?, fone=?, email=? WHERE cpf=?";
            const valores = [doador.nome, doador.endereco, doador.bairro, doador.cidade, doador.uf, doador.fone, doador.email, doador.cpf];
            await conexao.query(sql, valores);
        }
    }

    async excluir(doador) {
        if (doador instanceof Doador) {
            const conexao = await Conectar();
            const sql = "DELETE FROM doador WHERE cpf=?";
            const valores = [doador.cpf];
            await conexao.query(sql, valores);
        }
    }

    async consultar(termo) {
        const conexao = await Conectar();
        const sql = "SELECT * FROM doador WHERE nome LIKE ?";
        const valores = ['%' + termo + '%']
        const [rows] = await conexao.query(sql, valores);
        const listaDoadores = [];
        for (const row of rows) {
            const doador = new Doador(row['nome'], row['cpf'], row['endereco'], row['bairro'], row['cidade'], row['uf'], row['fone'], row['email']);
            listaDoadores.push(doador);
        }
        return listaDoadores;
    }

    async consultarCpf(cpf) {
        const conexao = await Conectar();
        const sql = "SELECT * FROM doador WHERE cpf = ?";
        const valores = [cpf]
        const [rows] = await conexao.query(sql, valores);
        const listaDoadores = [];
        for (const row of rows) {
            const doador = new Doador(row['nome'], row['cpf'], row['endereco'], row['bairro'], row['cidade'], row['uf'], row['fone'], row['email']);
            listaDoadores.push(doador);
        }
        return listaDoadores;
    }
}