const Jogador = require("../jogador")

// Vetor de Jogadores
let jogadores = [
  new Jogador({id:1, nickName:"soromo", nome:"João Vitor Chüler", classificacao:1, estatisticas:1, conquistas:[1, 3, 5]}),
  new Jogador({id:2, nickName:"marjaaa", nome:"Marja Vitória", classificacao:2, estatisticas:2, conquistas:[2, 4, 5]}),
  new Jogador({id:3, nickName:"diaas.sofi", nome:"Sofia Dias da Cruz", classificacao:3, estatisticas:0, conquistas:[1, 2, 3]}),
  new Jogador({id:4, nickName:"zeent_", nome:"Gabriel Maia", classificacao:4, estatisticas:4, conquistas:[3, 4, 5]}),
  new Jogador({id:5, nickName:"KF", nome:"Rafael Kunz", classificacao:5, estatisticas:5, conquistas:[1, 2, 4]}),
  new Jogador({id:6, nickName:"Velk1500", nome:"Heloísa Parenti", classificacao:6, estatisticas:6, conquistas:[1, 3, 4]}),
  new Jogador({id:7, nickName:"Bolt", nome:"Enzo Gabriel", classificacao:7, estatisticas:7, conquistas:[1, 2, 4]}),
  new Jogador({id:8, nickName:"Callzin_", nome:"Calléu Anhaia", classificacao:8, estatisticas:8, conquistas:[2, 3, 4]}),
  new Jogador({id:9, nickName:"Royster", nome:"Lucas Oliotti", classificacao:9, estatisticas:9, conquistas:[2, 3, 5]}),
  new Jogador({id:10, nickName:"Yuuina", nome:"Amanda Almeida", classificacao:10, estatisticas:10, conquistas:[1, 3, 4]}),
  new Jogador({id:11, nickName:"Tonhooo", nome:"Antônio Tomasi", classificacao:11, estatisticas:11, conquistas:[1, 2]}),
  new Jogador({id:12, nickName:"Chuler", nome:"Gabriel Chüler", classificacao:12, estatisticas:12, conquistas:[1, 2, 3]}),
  new Jogador({id:13, nickName:"R E N", nome:"Pedro Lucas", classificacao:13, estatisticas:13, conquistas:[1, 4, 5]}),
  new Jogador({id:14, nickName:"Ana.braga", nome:"Ana Maria Braga", classificacao:14, estatisticas:14, conquistas:[2, 4, 5]}),
  new Jogador({id:15, nickName:"CaaP", nome:"Cauã Pereira Alves", classificacao:15, estatisticas:15, conquistas:[1, 2, 3]}),
  new Jogador({id:16, nickName:"NikAv", nome:"Nicole Azevedo Alves", classificacao:16, estatisticas:16, conquistas:[3, 4, 5]}),
  new Jogador({id:17, nickName:"Marisinha", nome:"Marisa Silva Melo", classificacao:17, estatisticas:17, conquistas:[2, 3, 4]}),
  new Jogador({id:18, nickName:"Aguti", nome:"Eliseu Elias Peruzzo", classificacao:18, estatisticas:18, conquistas:[2, 3, 5]}),
  new Jogador({id:19, nickName:"Agute", nome:"Eliseu Elias Peruzzo Junior", classificacao:19, estatisticas:19, conquistas:[1, 2, 5]}),
  new Jogador({id:20, nickName:"Papino", nome:"Heitor Rodrigues", classificacao:20, estatisticas:20, conquistas:[1, 4, 5]})
];

class JogadoresDAO {
  // Retorna a lista de jogadores
  listar() {
    return jogadores;
  }

  // Retorna um jogador filtrado peloa sua ID
  buscarPorId(id) {
    return jogadores.find(jogador => jogador.id === id);
  }

  // Verifica existe uma instância de jogadores com aquele id
  exist(id) {
    return this.buscarPorId(id) ? true : false;
  }

  // Cria e armazena um novo jogador
  criar(jogador) {
    jogador.id = jogadores[jogadores.length - 1].id + 1;
    jogadores.push(jogador);
    return parseInt(jogador.id);
  }

  // Atualiza um jogador
  atualizar(id, jogadorAtualizado) {
    const index = jogadores.findIndex(jogador => jogador.id === id);
    if (index !== -1) {
      jogadores[index] = jogadorAtualizado;
    }
  }

  // Deleta um jogador
  deletar(id) {
    const index = jogadores.findIndex(jogador => jogador.id === id);
    if (index !== -1) {
      jogadores.splice(index, 1);
    }
  }
}

module.exports = new JogadoresDAO();
