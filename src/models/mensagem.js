const JogadoresDAO = require("./dao/JogadoresDAO");

class Mensagem {
  constructor({ id, texto, dataHora, remetente, destinatario }) {
    this.id = id ? id : -1;
    this.texto = texto;
    this.dataHora = dataHora ? dataHora : new Date();
    this.remetente = remetente;
    this.destinatario = destinatario;
  }

  verbose() {
    // Faz uma cópia profunda de mensagem
    let mensagem = JSON.parse(JSON.stringify(this));

    // Atribui as estatisticas ao mensagem
    mensagem.remetente = JogadoresDAO.buscarPorId(mensagem.remetente).verbose();

    mensagem.destinatario = JogadoresDAO.buscarPorId(mensagem.destinatario).verbose();

    return mensagem;
  }
}

module.exports = Mensagem
