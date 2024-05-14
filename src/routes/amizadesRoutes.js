const express = require('express');
const router = express.Router();
const amizadesController = require('../controllers/amizadesController');

// Rota para criar um novo amizade (CREATE)
router.post('/', amizadesController.create);

// Rota para listar todos os amizades (READ)
router.get('/', amizadesController.list);

// Rota para listar todos os amizades (READ)
router.get('/buscarPorIdJogador/:idJogador', amizadesController.searchByPlayerId);

// Rota para mostrar uma amizade (READ)
router.get('/:id', amizadesController.show);

// Rota para atualizar uma amizade (UPDATE)
router.put('/:id', amizadesController.update);

// Rota para deletar uma amizade (DELETE)
router.delete('/:id', amizadesController.delete);

module.exports = router;