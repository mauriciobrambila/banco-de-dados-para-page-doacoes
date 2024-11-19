import { Router } from "express";
import DoadorCTRL from "../Controle/DoadorCtrl.js";

const rotaDoador = new Router();
const doadorCtrl = new DoadorCTRL();

rotaDoador.post('/', doadorCtrl.gravar)
          .put('/', doadorCtrl.atualizar)
          .delete('/', doadorCtrl.excluir)
          .get('/', doadorCtrl.consultar)
          .get('/:cpf', doadorCtrl.consultarPelocpf);

export default rotaDoador;