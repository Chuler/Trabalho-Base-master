const Estatisticas = require("../estatistica");

let estatisticas = [
  new Estatisticas({ id: 1, pontuacao: 0, jogosJogados: 0, jogosVencidos: 76, jogosPerdidos: 54}),
    new Estatisticas({ id: 2, pontuacao: 0, jogosJogados: 0, jogosVencidos: 42, jogosPerdidos: 22}),
    new Estatisticas({ id: 3, pontuacao: 0, jogosJogados: 0, jogosVencidos: 21, jogosPerdidos: 34}),
    new Estatisticas({ id: 4, pontuacao: 0, jogosJogados: 0, jogosVencidos: 66, jogosPerdidos: 11}),
    new Estatisticas({ id: 5, pontuacao: 0, jogosJogados: 0, jogosVencidos: 39, jogosPerdidos: 24}),
    new Estatisticas({ id: 6, pontuacao: 0, jogosJogados: 0, jogosVencidos: 66, jogosPerdidos: 11}),
    new Estatisticas({ id: 7, pontuacao: 0, jogosJogados: 0, jogosVencidos: 44, jogosPerdidos: 34}),
    new Estatisticas({ id: 8, pontuacao: 0, jogosJogados: 0, jogosVencidos: 87, jogosPerdidos: 67}),
    new Estatisticas({ id: 9, pontuacao: 0, jogosJogados: 0, jogosVencidos: 9, jogosPerdidos: 29}),
    new Estatisticas({ id: 10, pontuacao: 0, jogosJogados: 0, jogosVencidos: 23, jogosPerdidos: 2}),
    new Estatisticas({ id: 11, pontuacao: 0, jogosJogados: 0, jogosVencidos: 45, jogosPerdidos: 33}),
    new Estatisticas({ id: 12, pontuacao: 0, jogosJogados: 0, jogosVencidos: 8, jogosPerdidos: 4}),
    new Estatisticas({ id: 13, pontuacao: 0, jogosJogados: 0, jogosVencidos: 12, jogosPerdidos: 8}),
    new Estatisticas({ id: 14, pontuacao: 0, jogosJogados: 0, jogosVencidos: 27, jogosPerdidos: 24}),
    new Estatisticas({ id: 15, pontuacao: 0, jogosJogados: 0, jogosVencidos: 31, jogosPerdidos: 34}),
    new Estatisticas({ id: 16, pontuacao: 0, jogosJogados: 0, jogosVencidos: 65, jogosPerdidos: 55}),
    new Estatisticas({ id: 17, pontuacao: 0, jogosJogados: 0, jogosVencidos: 7, jogosPerdidos: 2}),
    new Estatisticas({ id: 18, pontuacao: 0, jogosJogados: 0, jogosVencidos: 12, jogosPerdidos: 5}),
    new Estatisticas({ id: 19, pontuacao: 0, jogosJogados: 0, jogosVencidos: 22, jogosPerdidos: 18}),
    new Estatisticas({ id: 20, pontuacao: 0, jogosJogados: 0, jogosVencidos: 56, jogosPerdidos: 77})
]

class EstatisticasDAO {
  // Retorna a lista de estatisticas
  listar() {
    return estatisticas;
  }

  // Retorna uma estatistica filtrado pela sua id
  buscarPorId(id) {
    return estatisticas.find(estatistica => estatistica.id === id);
  }

  // Verifica se existe uma instância de estatisticas com aquele id
  exist(id) {
    return this.buscarPorId(id) ? true : false;
  }

  // Cria e armazena uma nova estatistica
  criar(estatistica) {
    estatistica.id = estatisticas[estatisticas.length - 1].id + 1;
    estatisticas.push(estatistica);
    return parseInt(estatistica.id);
  }

  // Atualiza uma estatistica
  atualizar(id, estatisticaAtualizado) {
    const index = estatisticas.findIndex(estatistica => estatistica.id === id);
    if (index !== -1) {
      estatisticas[index] = estatisticaAtualizado;
    }
  }

  // Deleta um estatistica
  deletar(id) {
    const index = estatisticas.findIndex(estatistica => estatistica.id === id);
    if (index !== -1) {
      estatisticas.splice(index, 1);
    }
  }
}

module.exports = new EstatisticasDAO();
