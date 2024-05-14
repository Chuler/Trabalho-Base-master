const Amizade = require("../amizade");

let amizades=[
  new Amizade({id: 1, amigos: [1, 2]}),
  new Amizade({id: 2, amigos: [3, 4]}),
  new Amizade({id: 3, amigos: [5, 6]}),
  new Amizade({id: 4, amigos: [7, 8]}),
  new Amizade({id: 5, amigos: [9, 10]}),
  new Amizade({id: 6, amigos: [11, 12]}),
  new Amizade({id: 7, amigos: [13, 14]}),
  new Amizade({id: 8, amigos: [15, 16]}),
  new Amizade({id: 9, amigos: [17, 18]}),
  new Amizade({id: 10, amigos: [19, 20]}),
  new Amizade({id: 11, amigos: [1, 20]}),
  new Amizade({id: 12, amigos: [2, 18]}),
  new Amizade({id: 13, amigos: [3, 17]}),
  new Amizade({id: 14, amigos: [4, 16]}),
  new Amizade({id: 15, amigos: [5, 15]}),
  new Amizade({id: 16, amigos: [6, 14]}),
  new Amizade({id: 17, amigos: [7, 13]}),
  new Amizade({id: 18, amigos: [8, 12]}),
  new Amizade({id: 19, amigos: [9, 11]}),
  new Amizade({id: 20, amigos: [1, 10]})
]

class AmizadesDAO {
    // Retorna a lista de amizades
    listar() {
      return amizades;
    }
  
    // Retorna uma amizade filtrada pela sua ID
    buscarPorId(id) {
      return amizades.find(amizade => amizade.id === id);
    }
  
    // Verifica se existe uma instância de amizades com aquele id
    exist(id) {
      return this.buscarPorId(id) ? true : false;
    }

    buscarPorIdJogador(idJogador){
      return amizades.filter(am => {
        return am.amigos.includes(Number(idJogador))
      })
    }
  
    // Cria e armazena uma nova amizade
    criar(amizade) {
      amizade.id = amizades[amizades.length - 1].id + 1;
      amizades.push(amizade);
      return parseInt(amizade.id);
    }
  
    // Atualiza uma amizade
    atualizar(id, amizadeAtualizado) {
      const index = amizades.findIndex(amizade => amizade.id === id);
      if (index !== -1) {
        amizades[index] = amizadeAtualizado;
      }
    }
  
    // Deleta uma amizade
    deletar(id) {
      const index = amizades.findIndex(amizade => amizade.id === id);
      if (index !== -1) {
        amizades.splice(index, 1);
      }
    }
  }
  
  module.exports = new AmizadesDAO();