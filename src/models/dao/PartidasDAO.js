const Partidas = require("../partida")

let partidas = [
    new Partidas({ id: 1, timeV: [4, 5, 6], timeP: [1, 2, 3], mvp: 2}),
    new Partidas({ id: 2, timeV: [7, 8, 9], timeP: [10, 11, 12], mvp: 12}),
    new Partidas({ id: 3, timeV: [6, 15, 8], timeP: [4, 20, 19], mvp: 15}),
    new Partidas({ id: 4, timeV: [4, 7, 6], timeP: [12, 5, 13], mvp: 4}),
    new Partidas({ id: 5, timeV: [14, 17, 16], timeP: [1, 18, 13], mvp: 1}),
    new Partidas({ id: 6, timeV: [10, 12, 14], timeP: [11, 13, 15], mvp: 10}),
    new Partidas({ id: 7, timeV: [8, 16, 20], timeP: [2, 7, 19], mvp: 8}),
    new Partidas({ id: 8, timeV: [1, 2, 12], timeP: [3, 5, 13], mvp: 12}),
    new Partidas({ id: 9, timeV: [1, 5, 18], timeP: [6, 12, 19], mvp: 18}),
    new Partidas({ id: 10, timeV: [1, 3, 5], timeP: [7, 10, 16], mvp: 7}),
    new Partidas({ id: 11, timeV: [2, 4, 6], timeP: [8, 10, 12], mvp: 4}),
    new Partidas({ id: 12, timeV: [3, 5, 7], timeP: [9, 11, 13], mvp: 9}),
    new Partidas({ id: 13, timeV: [15, 17, 19], timeP: [14, 16, 18], mvp: 19}),
    new Partidas({ id: 14, timeV: [6, 18, 20], timeP: [7, 10, 16], mvp: 16}),
    new Partidas({ id: 15, timeV: [1, 2, 3], timeP: [4, 5, 6], mvp: 5}),
    new Partidas({ id: 16, timeV: [10, 11, 12], timeP: [7, 8, 9], mvp: 11}),
    new Partidas({ id: 17, timeV: [2, 3, 16], timeP: [4, 17, 20], mvp: 3}),
    new Partidas({ id: 18, timeV: [4, 8, 12], timeP: [10, 15, 16], mvp: 4}),
    new Partidas({ id: 19, timeV: [6, 7, 13], timeP: [9, 11, 19], mvp: 6}),
    new Partidas({ id: 20, timeV: [18, 19, 20], timeP: [8, 9, 10], mvp: 19})
]

class PartidasDAO {
    // Retorna a lista de Partidas
    listar() {
      return partidas;
    }
  
    // Retorna uma partida filtrada pela sua ID
    buscarPorId(id) {
      return partidas.find(partida => partida.id === id);
    }
  
    // Verifica se existe uma instância de Partidas com aquele id
    exist(id) {
      return this.buscarPorId(id) ? true : false;
    }
  
    // Cria e armazena uma nova partida
    criar(partida) {
      partida.id = partidas[partidas.length - 1].id + 1;
      partidas.push(partida);
      return parseInt(partida.id);
    }
  
    // Atualiza uma partida
    atualizar(id, partidaAtualizado) {
      const index = partidas.findIndex(partida => partida.id === id);
      if (index !== -1) {
        partidas[index] = partidaAtualizado;
      }
    }
  
    // Deleta uma partida
    deletar(id) {
      const index = partidas.findIndex(partida => partida.id === id);
      if (index !== -1) {
        partidas.splice(index, 1);
      }
    }
  }
  
  module.exports = new PartidasDAO();