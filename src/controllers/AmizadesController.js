const Amizade = require("../models/amizade")
const AmizadesDAO = require('../models/dao/AmizadesDAO');

class AmizadesController {
  // Cria um novo amizade (CREATE)
  create(req, res) {
    let amigos = req.body.amigos;

    let amizade = new amizade ({amigos});
    let amizadeId = AmizadesDAO.criar(amizade);

    // Faz o response para o browser
    if (amizadeId)
      res.status(201).json({ amizade: AmizadesDAO.buscarPorId(amizadeId) })
    else
      res.status(500).json({ message: "Não foi possível criar um usuário" })
  }

  // Lista todos os jogadors (READ)
  list(req, res) {
    // Copia o array jogadores
    let listaAmizades = AmizadesDAO.listar().slice()

    if(listaAmizades.length === 0)
      res.status(200).json({message: "Nenhuma amizade encontrada"})

    res.status(200).json({ amizades: listaAmizades })
  }

  searchByPlayerId(req, res){
    let amizadesJogador = AmizadesDAO.buscarPorIdJogador(req.params.idJogador);

    if (amizadesJogador) {
      res.status(200).json({ amizadesJogador: amizadesJogador });
    } else {
      res.status(404).json({ message: 'amizade não encontrada' });
    }
  }

  // Mostrar um amizade (READ)
  show(req, res) {
    let id = req.params.id;
    let amizade = AmizadesDAO.buscarPorId(parseInt(id));

    // Faz o response para o browser
    if (amizade) {
      let amizadeVerbose = amizade.verbose()
      res.status(200).json({ amizade: amizadeVerbose });
    } else {
      res.status(404).json({ message: 'amizade não encontrada' });
    }
  }

  // Atualizar um amizade (UPDATE)
  update(req, res) {
    let id = req.params.id;
    let amizade = AmizadesDAO.buscarPorId(parseInt(id));
    if (amizade) {
      if (req.body.amigos) amizade.amigos = req.body.amigos

      AmizadesDAO.atualizar(id, amizade)
      // Faz o response para o browser
      res.status(200).json({ amizade: amizade });
    }
    else {
      // Faz o response para o browser
      res.status(404).json({ message: 'amizade não encontrada' });
    }
  }

  // Deleta um amizade (DELETE)
  delete(req, res) {
    let id = parseInt(req.params.id);

    if (AmizadesDAO.exist(id)) {
      AmizadesDAO.deletar(id);

      // Faz o response para o browser
      res.status(200).send()
    }
    else {
      // Faz o response para o browser
      res.status(404).json({ message: 'amizade não encontrada' });
    }
  }
}

module.exports = new AmizadesController();