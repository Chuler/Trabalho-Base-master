const express = require('express');
const router = express.Router();
const mensagensController = require('../controllers/MensagensController');

// Rota para criar um novo mensagem (CREATE)
router.post('/', mensagensController.create);

// Rota para listar todos os mensagens (READ)
router.get('/', mensagensController.list);

// Rota para mostrar uma mensagem (READ)
router.get('/:id', mensagensController.show);

// Rota para atualizar uma mensagem (UPDATE)
router.put('/:id', mensagensController.update);

// Rota para deletar uma mensagem (DELETE)
router.delete('/:id', mensagensController.delete);

module.exports = router;