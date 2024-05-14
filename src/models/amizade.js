class Amizade {
  constructor({ id, amigos }) {
    this.id = id ? id : -1;
    this.amigos = amigos
  }

  verbose() {
    // Faz uma cópia profunda de amizade
    let amizade = JSON.parse(JSON.stringify(this));

    if (amizade.amigos.length) {
      for (let i = 0; i < amizade.jogadores.length; i++) {
        amizade.jogadores[i] = jogadoresDAO.buscarPorId(amizade.jogadores[i])
      }
    }

    return amizade;
  }
}


module.exports = Amizade
