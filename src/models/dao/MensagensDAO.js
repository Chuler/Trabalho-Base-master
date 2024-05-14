const Mensagem = require("../mensagem")

let mensagens = [
    new Mensagem({ id: 1, data: new Date('1995-12-17T03:24:00'), texto: "Oiii", remetente: 1, destinatario: 2}),
    new Mensagem({ id: 2, data: new Date('2021-12-17T06:24:00'), texto: "quer ir duo?", remetente: 3, destinatario: 4}),
    new Mensagem({ id: 3, data: new Date('2006-07-22T07:54:00'), texto: "mid diff", remetente: 5, destinatario: 6}),
    new Mensagem({ id: 4, data: new Date('2001-09-11T18:29:00'), texto: "só tem elo baixo", remetente: 7, destinatario: 8}),
    new Mensagem({ id: 5, data: new Date('2004-05-14T015:24:00'), texto: "como você esta?", remetente: 9, destinatario: 10}),
    new Mensagem({ id: 6, data: new Date('1999-06-30T07:43:00'), texto: "ele deu instalock Reyna", remetente: 11, destinatario: 12}),
    new Mensagem({ id: 7, data: new Date('1998-05-17T09:42:00'), texto: "eae", remetente: 13, destinatario: 14}),
    new Mensagem({ id: 8, data: new Date('2003-02-17T00:00:00'), texto: "qual foi?", remetente: 15, destinatario: 16}),
    new Mensagem({ id: 9, data: new Date('2005-12-31T12:30:00'), texto: "bora mais um?", remetente: 17, destinatario: 18}),
    new Mensagem({ id: 10, data: new Date('2017-11-18T03:24:00'), texto: "Como é?", remetente: 19, destinatario: 20}),
    new Mensagem({ id: 11, data: new Date('2008-08-28T15:59:00'), texto: "eu tô bem ali", remetente: 1, destinatario: 3}),
    new Mensagem({ id: 12, data: new Date('2009-01-17T16:00:00'), texto: "não dá não", remetente: 5, destinatario: 7}),
    new Mensagem({ id: 13, data: new Date('2011-04-12T07:30:00'), texto: "sim, claro", remetente: 8, destinatario: 3}),
    new Mensagem({ id: 14, data: new Date('2024-10-08T12:30:00'), texto: "Tenta mais", remetente: 16, destinatario: 6}),
    new Mensagem({ id: 15, data: new Date('2019-03-14T09:35:00'), texto: "que isso cara, joga mto", remetente: 11, destinatario: 15}),
    new Mensagem({ id: 16, data: new Date('2013-11-04T11:20:00'), texto: "Iaê", remetente: 7, destinatario: 17}),
    new Mensagem({ id: 17, data: new Date('2017-10-03T13:54:00'), texto: "nunca mais faço essa jogada", remetente: 3, destinatario: 12}),
    new Mensagem({ id: 18, data: new Date('2019-09-11T16:39:00'), texto: "COMO QUE ELE TA ALI", remetente: 14, destinatario: 5}),
    new Mensagem({ id: 19, data: new Date('2021-08-12T17:21:00'), texto: "nem ferrando...", remetente: 20, destinatario: 8}),
    new Mensagem({ id: 20, data: new Date('2024-07-05T18:11:00'), texto: "bora comp?", remetente: 10, destinatario: 18}),
  ]

class MensagensDAO {
    // Retorna a lista de mensagens
    listar() {
      return mensagens;
    }
  
    // Retorna um mensagem filtrado peloa sua ID
    buscarPorId(id) {
      return mensagens.find(mensagem => mensagem.id === id);
    }
  
    // Verifica existe uma instância de mensagens com aquele id
    exist(id) {
      return this.buscarPorId(id) ? true : false;
    }
  
    // Cria e armazena um novo mensagem
    criar(mensagem) {
      mensagem.id = mensagens[mensagens.length - 1].id + 1;
      mensagens.push(mensagem);
      return parseInt(mensagem.id);
    }
  
    // Atualiza um mensagem
    atualizar(id, mensagemAtualizado) {
      const index = mensagens.findIndex(mensagem => mensagem.id === id);
      if (index !== -1) {
        mensagens[index] = mensagemAtualizado;
      }
    }
  
    // Deleta um mensagem
    deletar(id) {
      const index = mensagens.findIndex(mensagem => mensagem.id === id);
      if (index !== -1) {
        mensagens.splice(index, 1);
      }
    }
  }
  
  module.exports = new MensagensDAO();