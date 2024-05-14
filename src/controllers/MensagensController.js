const Mensagem = require("../models/mensagem")
const MensagensDAO = require('../models/dao/MensagensDAO');

class MensagensController {
  // Cria um novo mensagem (CREATE)
  create(req, res) {
    let texto = req.body.texto;
    let data = req.body.data;
    let remetente = req.body.remetente;
    let destino = req.body.destino;

    let mensagem = new Mensagem ({texto, data, remetente, destino});
    let mensagemId = MensagensDAO.criar(mensagem);

    // Faz o response para o browser
    if (mensagemId){
      res.status(201).json({ mensagem: MensagensDAO.buscarPorId(mensagemId) })
      date = new Date(log['datetime'])
    }
    else{    
      res.status(500).json({ message: "Não foi possível criar uma mensagem" })
    }
  }


  // Lista todos os jogadors (READ)
  list(req, res) {
    // Copia o array jogadores
    let listamensagens = MensagensDAO.listar().slice()

    if(listamensagens.length === 0)
      res.status(200).json({message: "Nenhuma mensagem encontrada"})

    res.status(200).json({ mensagens: listamensagens })
  }

  // Mostrar um mensagem (READ)
  show(req, res) {
    let id = req.params.id;
    let mensagem = MensagensDAO.buscarPorId(parseInt(id));

    // Faz o response para o browser
    if (mensagem) {
      let mensagemVerbose = mensagem.verbose()
      res.status(200).json({ mensagem: mensagemVerbose });
    } else {
      res.status(404).json({ message: 'Mensagem não encontrada' });
    }
  }

  // Atualizar uma mensagem (UPDATE)
  update(req, res) {
    let id = req.params.id;
    let mensagem = MensagensDAO.buscarPorId(parseInt(id));
    if (mensagem) {
      if (req.body.texto) mensagem.texto = req.body.texto
      if (req.body.data) mensagem.data = req.body.data
      if (req.body.remetente) mensagem.remetente = req.body.remetente
      if (req.body.destino) mensagem.destino = req.body.destino

      MensagensDAO.atualizar(id, texto, data, remetente, destino)
      // Faz o response para o browser
      res.status(200).json({ mensagem: mensagem });
    }
    else {
      // Faz o response para o browser
      res.status(404).json({ message: 'Mensagem não encontrada' });
    }
  }

  // Deleta uma mensagem (DELETE)
  delete(req, res) {
    let id = parseInt(req.params.id);

    if (MensagensDAO.exist(id)) {
      MensagensDAO.deletar(id);

      // Faz o response para o browser
      res.status(200).send()
    }
    else {
      // Faz o response para o browser
      res.status(404).json({ message: 'Mensagem não encontrada' });
    }
  }
}

module.exports = new MensagensController();