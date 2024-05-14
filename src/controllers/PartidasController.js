const Partida = require("../models/partida")
const PartidasDAO = require('../models/dao/PartidasDAO');

class PartidasController {
  // Cria um novo partida (CREATE)
  create(req, res) {
    let texto = req.body.timeV;
    let data = req.body.timeP;
    let remetente = req.body.mvp;

    let partida = new Partida ({timeV, timeP, mvp});
    let partidaId = PartidasDAO.criar(partida);

    // Faz o response para o browser
    if (partidaId)
      res.status(201).json({ partida: PartidasDAO.buscarPorId(partidaId) })
    else
      res.status(500).json({ message: "Não foi possível criar uma partida" })
  }

  // Lista todos os jogadors (READ)
  list(req, res) {
    // Copia o array jogadores
    let listapartidas = PartidasDAO.listar().slice()

    if(listapartidas.length === 0)
      res.status(200).json({message: "Nenhuma partida encontrada"})

    res.status(200).json({ partidas: listapartidas })
  }

  // Mostrar um partida (READ)
  show(req, res) {
    let id = req.params.id;
    let partida = PartidasDAO.buscarPorId(parseInt(id));

    // Faz o response para o browser
    if (partida) {
      let partidaVerbose = partida.verbose()
      res.status(200).json({ partida: partidaVerbose});
    } else {
      res.status(404).json({ message: 'partida não encontrada' });
    }
  }

  // Atualizar uma partida (UPDATE)
  update(req, res) {
    let id = req.params.id;
    let partida = PartidasDAO.buscarPorId(parseInt(id));
    if (partida) {
      if (req.body.texto) partida.texto = req.body.texto
      if (req.body.data) partida.timeV = req.body.timeV
      if (req.body.remetente) partida.timeP = req.body.timeP
      if (req.body.destino) partida.mvp = req.body.mvp

      PartidasDAO.atualizar(id, timeV, timeP, mvp)
      // Faz o response para o browser
      res.status(200).json({ partida: partida });
    }
    else {
      // Faz o response para o browser
      res.status(404).json({ message: 'partida não encontrada' });
    }
  }

  // Deleta uma partida (DELETE)
  delete(req, res) {
    let id = parseInt(req.params.id);

    if (PartidasDAO.exist(id)) {
      PartidasDAO.deletar(id);

      // Faz o response para o browser
      res.status(200).send()
    }
    else {
      // Faz o response para o browser
      res.status(404).json({ message: 'partida não encontrada' });
    }
  }
}

module.exports = new PartidasController();