const express = require('express');
const router = express.Router();
const partidasController = require('../controllers/PartidasController');

// Rota para criar um novo partida (CREATE)
router.post('/', partidasController.create);

// Rota para listar todos os partidas (READ)
router.get('/', partidasController.list);

// Rota para mostrar uma partida (READ)
router.get('/:id', partidasController.show);

// Rota para atualizar uma partida (UPDATE)
router.put('/:id', partidasController.update);

// Rota para deletar uma partida (DELETE)
router.delete('/:id', partidasController.delete);

module.exports = router;