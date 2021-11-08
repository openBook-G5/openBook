/* Declaração de uma lista de objetos //Bianca */
const livros = [
  {
    codigo: 1,
    nome: 'Dom Casmurro',
    autor: 'Machado de Assis',
    ano: 1899,
    local: 'Brasil',
    resumo:
      'Bento Santiago se dispõe a narrar a história de sua vida. Trata-se de um homem na casa dos 60 anos, que, supostamente, teria muito o que contar. No entanto, desde logo fica evidente que seu interesse pela própria biografia tem um foco bastante dirigido: o relacionamento com a jovem Capitu, a vizinha que viria a ser o grande amor de sua vida. Personagem fascinante, Capitu possui um extraordinário poder de sedução, manifesto em seus “olhos de cigana oblíqua e dissimulada”, capazes de atrair como a ressaca do mar. '
  },
  {
    codigo: 2,
    nome: 'Esaú e Jacó',
    autor: 'Machado de Assis',
    ano: 1904,
    local: 'Brasil',
    resumo:
      'A obra Esaú e Jacó de Machado de Assis, narra a história de Pedro e Paulo, dois irmãos gêmeos que apresentam perfis comportamentais completamente diferentes um do outro, e sua briga pelo amor da mesma mulher, Flora. Os irmãos encarnam a contradição, suas oposições, conflito amoroso e dúvida.'
  },

  {
    codigo: 3,
    nome: 'Eu e outras poesias',
    autor: 'Augusto dos Anjos',
    ano: 1912,
    local: 'Brasil',
    resumo:
      'Eu e outras poesias, conhecido também apenas como Eu é o único livro de poesia de Augusto dos Anjos, publicado no Rio de Janeiro no ano de 1912. A obra se destaca pela visão da vida, numa espécie de réplica à idealização dos temas praticados pelo Parnasianismo.'
  },

  {
    codigo: 4,
    nome: 'Senhora',
    autor: 'José de Alencar',
    ano: 1875,
    local: 'Brasil',
    resumo:
      'A obra Senhora, de José de Alencar é dividida em quatro partes. A primeira delas, nomeada de “O preço do casamento”, começa descrevendo uma jovem moça chamada Aurélia, rica e frequentadora de bailes da alta sociedade. Aurélia, sendo órfã e recebedora de uma grande fortuna, estava sempre acompanhada de sua parenta D. Firmina e acreditava que todos só se interessavam por ela por causa de sua beleza e do seu dinheiro. Em um baile de costume, Aurélia começou a se questionar sobre sua educação e seu destino. Escreveu uma carta ao Sr. Lemos dando-lhe a missão de arrumar seu casamento com o atual noivo de Adelaide Amaral, o Fernando Seixas. Seixas era pertencente a uma família de situação pouco favorável e pretendia arrumar um casamento com uma moça rica para oferecer melhores condições para sua mãe e suas irmãs, e também para seus luxos. Lemos faz a proposta de casamento a Seixas, que mesmo sem conhecer a noiva, recebe um adiantamento do alto dote e aceita o compromisso. Quando foi apresentado à Aurélia, Seixas sente uma profunda humilhação, pois em tempos passados tinha rompido um noivado com ela para ficar noivo de Adelaide, que era mais rica. Na noite de núpcias, Aurélia chama seu então marido de homem vendido.'
  },
  {
    codigo: 5,
    nome: 'Memórias de um Sargento de Mílicias',
    autor: 'Manuel Antônio de Almeida',
    ano: 1855,
    local: 'Brasil',
    resumo:
      'O livro narra a história de Leonardo, filho de pai do mesmo nome e Maria das Hortaliças. Depois de um escândalo causado pela traição de Maria, o casal toma rumos diferentes.O menino Leonardo, então, viveu criado pelo compadre que o cuidou como se fosse seu filho. Queria que o menino seguisse a vida religiosa mas, depois de passar um tempo na igreja da Sé, o garoto aprontou com o mestre de cerimônia e nunca mais voltou.Durante o tempo em que vive com o compadre, faz visitas à D. Maria, uma senhora rica, que conseguiu a guarda da sobrinha pela qual Leonardo se apaixona.Leonardo Pataca (o pai) se envolve com uma cigana e começa a participar de rituais. Durante um desses rituais o Major Vidigal o prende. A comadre, senhora influente, consegue a liberdade de Leonardo, que se casa com sua filha.Surge então na história José Manuel, que interessado na herança de Luisinha (sobrinha de D. Maria), começa a cortejá-la.Depois que o compadre morre, Leonardo (filho) vai morar com Leonardo Pataca (o pai), porém, não consegue conviver com a madrasta e foge. Vai então morar na casa do antigo amigo de igreja que encontra na rua por acaso. Lá, se apaixona por Vidinha, provocando o ciúme dos outros garotos da casa.'
  },
  {
    codigo: 6,
    nome: 'As maluquices do Imperador',
    autor: 'Paulo Setúbal',
    ano: 1927,
    local: 'Brasil',
    resumo:
      'O primeiro capítulo começa com a chegada da nau Príncipe Real, trazendo a família real: Maria I , a louca, que vem gritando durante toda a viagem, D. Carlota Joaquina o príncipe regente D. João VI e os Infantes, filhos do príncipe. A partir dai, ao desenrolar dos acontecimentos históricos do nosso país, mergulhamos mais profundamente na intrincada vida pessoal de um dos ocupantes da nau, o futuro D. Pedro I: a bailarina do teatro S. João, Maria Leopoldina de Áustria, o João Pinto, o Chalaça o marquês de Barbacena, entre outros. Todos esses personagens uns mais outros menos conhecidos, realmente existiram e ajudaram a moldar o destino de nosso país. São apresentados ao leitor episódios cômicos e até heróicos, como a resistência ao cerco do Porto, fato que possibilitou a ascendência ao trono de sua filha mais velha, Maria da Glória, ou Maria II de Portugal.'
  },

  {
    codigo: 7,
    nome: 'O cortiço',
    autor: 'Aluísio de Azevedo',
    ano: 1890,
    local: 'Brasil',
    resumo:
      'O Cortiço narra a busca do português João Romão pelo enriquecimento e para tal ele explora os empregados e é capaz de tudo para atingir seus objetivos. Romão é dono do cortiço, da taverna e da pedreira. Bertoleza, sua amante, o ajuda trabalhando sem descanso. Opondo-se a João Romão, está Miranda, um comerciante bem sucedido que disputa com o taverneiro um pedaço de terra para aumentar seu quintal, entretanto, não havendo acordo, há o rompimento provisório da relação entre eles.'
  },
  {
    codigo: 8,
    nome: 'A Falência',
    autor: 'Júlio Lopes de Almeida',
    ano: 1901,
    local: 'Brasil',
    resumo:
      'A falência é o livro mais famoso da escritora Júlia Lopes de Almeida. Conta a história de Camila, uma mulher burguesa, casada com Francisco Teodoro (um rico empresário) e amante do doutor Gervásio. No entanto, com a falência e o posterior suicídio do marido, ela precisa recomeçar.A narrativa está situada na última década do século XIX, no Rio de Janeiro, e mostra os primeiros anos após a Proclamação da República. Assim, com uma linguagem objetiva e antirromântica, apresenta uma visão realista sobre a sociedade da época e, também, traços naturalistas, como o determinismo.'
  },

  {
    codigo: 9,
    nome: 'Inocência',
    autor: 'Visconde de Taunay',
    ano: 1872,
    local: 'Brasil',
    resumo:
      'O romance passa-se no Sertão de Santana do Paranaíba, onde Martinho dos Santos Pereira (Pereira) vive numa fazenda com sua filha Inocência de 18 anos. De comportamento autoritário, Pereira exige da filha uma obediência que a obrigue ser educada sob seu regime e longe do mundo. Pereira decide que a filha irá se casar com um homem criado no sertão bruto, Manecão, um negociante de gado com índole violenta. Um certo dia, Inocência ficou muito doente e o pai encontrou-se com um rapaz que caminhava pelo sertão e se dizia médico. Era Cirino, que iniciou Farmácia em Ouro Preto e concluiu estudos no colégio do Caraça. Cirino curou Inocência e imediatamente apaixonou-se. Pereira convidou Cirino a ficar em sua casa e lhe arranjou alguns pacientes. Outro hóspede chega trazendo consigo um servo engraçado e uma carta do irmão de Pereira e permanece em sua casa. É o Dr. Meyer, naturalista alemão que embarcou no Brasil com o objetivo de encontrar novas espécies de insetos e caçar borboletas. Embora o anfitrião o tenha recebido normalmente, não compreendeu os elogios que o recém-chegado entregou para sua filha e começou a desconfiar dele.'
  },

  {
    codigo: 10,
    nome: 'Iracema',
    autor: 'José de Alencar',
    ano: 1865,
    local: 'Brasil',
    resumo:
      'O romance possui como casal protagonista Iracema e Martim. O primeiro encontro dos dois se dá quando Iracema está repousando em sua sesta quando é assustada por um guerreiro estranho. Assustada, ela lança uma flecha que atinge o guerreiro. Ele não tem nenhuma reação ao ataque de Iracema e, ao ver que ele não possui nenhum tipo de má intenção, parte para acudi-lo. Esse guerreiro chama-se Martim. Eles vão juntos até a tribo de Iracema, chamada de tabajara. Martim é recebido pelo Pajé e, como de costume, belas mulheres são levadas até ele por Iracema. Ele recusa e decide ir embora da tribo. Entretanto, Iracema vai atrás dele, pedindo para ele voltar. Martim aceita. Começa nesse momento uma troca de amor mútuo. À noite, passeiam pelo bosque e ficam muito próximos. Um guerreiro tabajara avista a proximidade dos dois. Ele tenta ferir Iracema e acaba ferindo Martim.'
  }
];

//crio uma variável x que irá pegar pelo querySelector todos os buttons que possuem class="botao"
var x = document.querySelectorAll('.botao');
for (let i = 0; i < x.length; i++) {
  //crio um evento com a minha variável que ao clicar no botão irá acionar uma função anonima
  x[i].addEventListener('click', function () {
    //o if irá verificar se o id de determinado botão acionado corresponde ao codigo do array que declaramos acima (linha 1)
    if (Number(x[i].id) == livros[i].codigo) {
      //se a condição do if for verdadeira irá acrescentar no meu id="livro" o nome do livro que foi estabelecido no objeto acima (linha 1)
      document.getElementById('livro').innerText = livros[i].nome;
      document.getElementById('nomeAutor').innerText = livros[i].resumo;
      document.getElementById('Ano').innerText = livros[i].ano;
    }
  });
}
