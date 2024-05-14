class Estatisticas {
  constructor({ id, pontuacao, jogosJogados, jogosVencidos, jogosPerdidos }) {
    this.id = id ? id : -1;
    this.pontuacao = pontuacao ? pontuacao : 0;
    this.jogosJogados = jogosJogados ? jogosJogados : 0;
    this.jogosVencidos = jogosVencidos ? jogosVencidos : 0;
    this.jogosPerdidos = jogosPerdidos ? jogosPerdidos : 0;
  }
  
  // Calcula a pontuação e os jogos jogados da estatistica
  calculaEstatisticas(){

    this.jogosVencidosP = 0
    this.jogosPerdidosP = 0
    this.jogosJogadosP = 0

    for(i = this.jogosVencidos; i > 0; i--){
      this.jogosVencidosP = this.jogosVencidosP + 10
    }
    for(i = this.jogosPerdidos; i > 0; i--){
      this.jogosPerdidosP = this.jogosPerdidosP - 5
    }

    //Calcula a quantidade de jogos jogados
    this.jogosJogados = this.jogosVencidos + this.jogosPerdidos
    this.jogosJogadosP = this.jogosVencidosP + this.jogosPerdidosP

    if(this.jogosJogadosP < 0){
      this.jogosJogadosP = 0
    }
  }
}

module.exports = Estatisticas
