const Conquista = require("../conquista");

// Vetor de Conquistas
let conquistas = [
  // Altere aqui para as suas conquistas
  new Conquista({id:1, nome:"Headshot", descricao:"Acerte seu primeiro tiro na cabeça"}),
  new Conquista({id:2, nome:"Rede de Contatos", descricao:"Tenha mais de 5 amigos"}),
  new Conquista({id:3, nome:"MVP", classificacao:3, descricao:"Seja o MVP da partida"}),
  new Conquista({id:4, nome:"Amigo da Pátria", descricao:"Ajude a reportar um trapaceiro"}),
  new Conquista({id:5, nome:"Cuidado onde pisa", descricao:"Pise em uma área que retira sua vida"}),
  new Conquista({id:6, nome:"Contagem iniciada", descricao:"Utilize a ultimate da Killjoy"}),
  new Conquista({id:7, nome:"A maré vai virar", descricao:"Utilize a ultimate do Harbor"}),
  new Conquista({id:8, nome:"Eles vão temer", descricao:"Utilize a ultimate da Reyna"}),
  new Conquista({id:9, nome:"Tá contigo, maninha", descricao:"Utilize a ultimate do Gekko"}),
  new Conquista({id:10, nome:"Meu território, minhas regras", descricao:"Utilize a ultimate da Deadlock"}),
  new Conquista({id:11, nome:"Só eu e você agora", descricao:"Utilize a ultimate do Iso"}),
  new Conquista({id:12, nome:"Chegou o raggae", descricao:"Utilize a ultimate da Raze"}),
  new Conquista({id:13, nome:"Pesadelo, acabe com ele", descricao:"Utilize a ultimate da Fade"}),
  new Conquista({id:14, nome:"Vocês já se divertiram, minha vez", descricao:"Utilize a ultimate de Clove"}),
  new Conquista({id:15, nome:"VSei exatamente onde estão escondidos", descricao:"Utilize a ultimate do Cypher"}),
  new Conquista({id:16, nome:"Eu sou o caçador", descricao:"Utilize a ultimate do Sova"}),
  new Conquista({id:17, nome:"Chuva de fogo", descricao:"Utilize a ultimate do Brimstone"}),
  new Conquista({id:18, nome:"Sua missão não acabou", descricao:"Utilize a ultimate da Sage"}),
  new Conquista({id:19, nome:"Esse é o meu mundo", descricao:"Utilize a ultimate da Viper"}),
  new Conquista({id:20, nome:"Mundo dividido", descricao:"Utilize a ultimate da Astra"})
];

class ConquistasDAO {
  // Retorna a lista de conquistas
  listar() {
    return conquistas;
  }

  // Retorna um conquista filtrado peloa sua ID
  buscarPorId(id) {
    return conquistas.find(conquista => conquista.id === id);
  }

  // Verifica existe uma instância de conquista com aquele id
  exist(id) {
    return this.buscarPorId(id) ? true : false;
  }

  // Cria e armazena um novo conquista
  criar(conquista) {
    conquista.id = conquistas[conquistas.length - 1].id + 1;
    conquistas.push(conquista);
    return parseInt(conquista.id);
  }

  // Atualiza um conquista
  atualizar(id, conquistaAtualizado) {
    const index = conquistas.findIndex(conquista => conquista.id === id);
    if (index !== -1) {
      conquistas[index] = conquistaAtualizado;
    }
  }

  // Deleta um conquista
  deletar(id) {
    const index = conquistas.findIndex(conquista => conquista.id === id);
    if (index !== -1) {
      conquistas.splice(index, 1);
    }
  }
}

module.exports = new ConquistasDAO();
