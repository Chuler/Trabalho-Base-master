class Partidas {
  constructor({ id, timeVencedor, timePerdedor, mvp }) {
    this.id = id ? id : -1;
    this.timeVencedor = timeVencedor
    this.timePerdedor = timePerdedor
    this.mvp = mvp
  }

  verbose() {
    // Faz uma cópia profunda de partida
    let partida = JSON.parse(JSON.stringify(this));

    // Atribui as estatisticas ao partida
    partida.timePerdedor = JogadoresDAO.buscarPorId(partida.timePerdedor).verbose();

    partida.timeVencedor = JogadoresDAO.buscarPorId(partida.timeVencedor).verbose();

    partida.mvp = JogadoresDAO.buscarPorId(partida.mvp).verbose();

    return partida;
  }
}

module.exports = Partidas
