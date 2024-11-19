import express from "express";
import rotaDoador from "./Rotas/rotaDoador.js";
import cors from 'cors';

const app = new express();

app.use(express.urlencoded({ extended: false }));
app.use(cors({cors:'*'}))
app.use(express.json());
app.use('/doadores', rotaDoador);

app.listen(3001, 'localhost', () => {
    console.log("Backend ouvindo em http://localhost:3001")
})

//import Doador from "./Modelo/Doador.js";
// let objDoador = new Doador( 'Mauricio',
//                             '111.111.111-11',
//                             'Rua Jose bongiovani',
//                             'Jd.Bongiovani',
//                             'Presidente Prudente',
//                             'SP',
//                             '(18) 9999-9999',
//                             'doador@gmail.com');
// //console.log(objDoador.toJSON());

// //TESTE GRAVAR
// objDoador.gravar().then(()=>{
//     console.log("O Doador foi gravado com sucesso no banco de dados")
// });

//TESTE ATUALIZAR
// objDoador.nome='Andre';
// objDoador.atualizar(()=>{
//     console.log("O Doador foi atualizado com sucesso")
// });

//TESTE REMOVER 
// objDoador.removerDoBancoDados(()=>{
//     console.log("O Doador foi excluído do banco de dados")
// });

//TESTE CONSULTAR
//  const objDoador = new Doador();
//  objDoador.consultar("Mauricio").then((doadores)=>{
//     for(const doador of doadores){
//         console.log(doador.toJSON())
//     }
//  });