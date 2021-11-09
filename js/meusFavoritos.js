/* BIANCA */
/* ********************CRIAÇÃO DA CLASSE************************** */
class meusFavoritos {
  /*********************  CRIAÇÃO DO CONSTRUCTOR  ***************/
  constructor() {
    this.codigo = 1;
    this.titulo = '';
    this.autor = '';
    this.rating = '';
    this.conteudo = '';
    this.arrayLivros = [];

    this.editCodigo = null;
  }

  /* ***************Função 1 - LER DADOS************************* */
  /* Esta função irá ler os dados inseridos nos inputs */
  lerDados() {
    /* alert("lerDados"); */
    let livro = {};

    livro.codigo = this.codigo;
    livro.titulo = document.getElementById('tituloLivro').value;
    livro.autor = document.getElementById('autorLivro').value;
    livro.rating =
      document.getElementById('ratingStar').selectedOptions[0].value;

    return livro;
  }

  /**********************  Função 2 - SALVAR **********************/
  /* A função salvar é um elo entro lerDados() e validarCampos(). Ele salva os elementos inseridos nos inputs depois que eles passam pela validação */
  salvar() {
    let livro = this.lerDados();
    if (this.validarCampos(livro)) {
      if (this.editCodigo == null) {
        this.adicionar(livro);
      } else {
        console.log(livro);
        this.atualizarEdicao(this.editCodigo);
      }
      this.criarTabela();
      this.cancelar();
    }

    console.log(this.arrayLivros);
  }

  /*********************  Função 3 - VALIDAR CAMPOS ***************/
  /* Valida os campos inseridos nos inputs */
  validarCampos(livro) {
    let mensagem = '';
    if (livro.titulo == '') {
      mensagem += '- Informe o titulo do livro! \n';
    }
    if (livro.autor == '') {
      mensagem += '- Informe o(a)  autor(a) do livro! \n';
    }
    if (livro.rating == '') {
      mensagem += '- Selecione uma opção! \n';
    }
    if (mensagem != '') {
      alert(mensagem);
      return false;
    }
    return true;
  }

  /*********************  Função 4 - ADICIONAR LIVRO ***************/
  /* Adiciona os dados numa array */
  adicionar(livro) {
    this.arrayLivros.push(livro);
    this.codigo++;
  }

  /*********************  Função 5 - CRIAR TABELA DINÂMICA ***************/
  criarTabela() {
    let tbody = document.getElementById('tbody');
    //resetar a lista quando salvar um novo produto
    tbody.innerText = '';

    /* Aqui se criam as novas linhas da tabela */
    for (let i = 0; i < this.arrayLivros.length; i++) {
      let novaLinha = tbody.insertRow();
      let td_titulo = novaLinha.insertCell();
      let td_autor = novaLinha.insertCell();
      let td_favoritar = novaLinha.insertCell();
      let td_acoes = novaLinha.insertCell();

      td_titulo.innerText = this.arrayLivros[i].titulo;
      td_autor.innerText = this.arrayLivros[i].autor;

      /* Inserir as estrelas no desejômetro. Precisei criar cada uma das cinco estrelas de maneira separada e independente */
      let imgStar = document.createElement('span');
      imgStar.classList.add('bi', 'bi-star-fill', 'icons3');

      let imgStar2 = document.createElement('span');
      imgStar2.classList.add('bi', 'bi-star-fill', 'icons3');

      let imgStar3 = document.createElement('span');
      imgStar3.classList.add('bi', 'bi-star-fill', 'icons3');

      let imgStar4 = document.createElement('span');
      imgStar4.classList.add('bi', 'bi-star-fill', 'icons3');

      let imgStar5 = document.createElement('span');
      imgStar5.classList.add('bi', 'bi-star-fill', 'icons3');

      /* Uso do Switch para inserir as estrelas */
      switch (this.arrayLivros[i].rating) {
        case '1':
          imgStar.classList.add('bi', 'bi-star-fill', 'yellowStar');
          imgStar2.classList.add('bi', 'bi-star-fill', 'grayStar');
          imgStar3.classList.add('bi', 'bi-star-fill', 'grayStar');
          imgStar4.classList.add('bi', 'bi-star-fill', 'grayStar');
          imgStar5.classList.add('bi', 'bi-star-fill', 'grayStar');
          td_favoritar.appendChild(imgStar);
          td_favoritar.appendChild(imgStar2);
          td_favoritar.appendChild(imgStar3);
          td_favoritar.appendChild(imgStar4);
          td_favoritar.appendChild(imgStar5);
          break;

        case '2':
          imgStar.classList.add('bi', 'bi-star-fill', 'yellowStar');
          imgStar2.classList.add('bi', 'bi-star-fill', 'yellowStar');
          imgStar3.classList.add('bi', 'bi-star-fill', 'grayStar');
          imgStar4.classList.add('bi', 'bi-star-fill', 'grayStar');
          imgStar5.classList.add('bi', 'bi-star-fill', 'grayStar');
          td_favoritar.appendChild(imgStar);
          td_favoritar.appendChild(imgStar2);
          td_favoritar.appendChild(imgStar3);
          td_favoritar.appendChild(imgStar4);
          td_favoritar.appendChild(imgStar5);
          break;

        case '3':
          imgStar.classList.add('bi', 'bi-star-fill', 'yellowStar');
          imgStar2.classList.add('bi', 'bi-star-fill', 'yellowStar');
          imgStar3.classList.add('bi', 'bi-star-fill', 'yellowStar');
          imgStar4.classList.add('bi', 'bi-star-fill', 'grayStar');
          imgStar5.classList.add('bi', 'bi-star-fill', 'grayStar');
          td_favoritar.appendChild(imgStar);
          td_favoritar.appendChild(imgStar2);
          td_favoritar.appendChild(imgStar3);
          td_favoritar.appendChild(imgStar4);
          td_favoritar.appendChild(imgStar5);
          break;

        case '4':
          imgStar.classList.add('bi', 'bi-star-fill', 'yellowStar');
          imgStar2.classList.add('bi', 'bi-star-fill', 'yellowStar');
          imgStar3.classList.add('bi', 'bi-star-fill', 'yellowStar');
          imgStar4.classList.add('bi', 'bi-star-fill', 'yellowStar');
          imgStar5.classList.add('bi', 'bi-star-fill', 'grayStar');
          td_favoritar.appendChild(imgStar);
          td_favoritar.appendChild(imgStar2);
          td_favoritar.appendChild(imgStar3);
          td_favoritar.appendChild(imgStar4);
          td_favoritar.appendChild(imgStar5);
          break;

        case '5':
          imgStar.classList.add('bi', 'bi-star-fill', 'yellowStar');
          imgStar2.classList.add('bi', 'bi-star-fill', 'yellowStar');
          imgStar3.classList.add('bi', 'bi-star-fill', 'yellowStar');
          imgStar4.classList.add('bi', 'bi-star-fill', 'yellowStar');
          imgStar5.classList.add('bi', 'bi-star-fill', 'yellowStar');
          td_favoritar.appendChild(imgStar);
          td_favoritar.appendChild(imgStar2);
          td_favoritar.appendChild(imgStar3);
          td_favoritar.appendChild(imgStar4);
          td_favoritar.appendChild(imgStar5);
          break;
        default:
      }

      /* Imagem editar de ações */
      let imgEditar = document.createElement('span');
      imgEditar.classList.add('bi', 'bi-pencil-square', 'icons3');
      imgEditar.setAttribute(
        'onclick',
        'livro.editarDados(' + JSON.stringify(this.arrayLivros[i]) + ')'
      );

      /* Imagem deletar de ações */
      let imgDeletar = document.createElement('span');
      imgDeletar.setAttribute(
        'onclick',
        'livro.deletar(' + this.arrayLivros[i].codigo + ')'
      );
      imgDeletar.classList.add('bi', 'bi-trash', 'icons3');

      /* Inserir os elementos na tabela dinâmica */
      td_acoes.appendChild(imgEditar);
      td_acoes.appendChild(imgDeletar);
    }
  }

  /*********************  Função 6 - EDITAR  ***************/
  /* Permite que os dados sejam editados */
  editarDados(dados) {
    this.editCodigo = dados.codigo;
    document.getElementById('tituloLivro').value = dados.titulo;
    document.getElementById('autorLivro').value = dados.autor;
    document.getElementById('ratingStar').value = dados.rating;
    document.getElementById('btn1').innerText = 'Atualizar';

    this.editCodigo = dados.codigo;
  }

  /*********************  Função 7 - ATUALIZAR  ***************/
  /* A função atualizar é "puxada" pela função atualizar dados. Ela sempre será chamada na execução de atualização dos dados */
  atualizarEdicao(codigo) {
    for (let i = 0; i < this.arrayLivros.length; i++) {
      if (codigo == this.arrayLivros[i].codigo) {
        this.arrayLivros[i].titulo =
          document.getElementById('tituloLivro').value;
        this.arrayLivros[i].autor = document.getElementById('autorLivro').value;
        this.arrayLivros[i].rating =
          document.getElementById('ratingStar').value;
      }
    }
    document.getElementById('btn1').innerText = 'Salvar';
    this.editCodigo = null;
  }

  /*********************  Função 8 - CANCELAR  ***************/
  /* Cancela e limpa as informações inseridas quando acionado */
  cancelar() {
    document.getElementById('tituloLivro').value = '';
    document.getElementById('autorLivro').value = '';
    document.getElementById('ratingStar').value = '';
    document.getElementById('btn1').innerText = 'Salvar';
    this.editCodigo = null;
  }

  /*********************  Função 9 - DELETAR ***************/
  /* Deleta as informações quando acionado */
  deletar(codigoProcurado) {
    if (
      confirm('Desdeja realmente deletar o livro ' + codigoProcurado + ' ?')
    ) {
      for (let i = 0; i < this.arrayLivros.length; i++) {
        if (this.arrayLivros[i].codigo == codigoProcurado) {
          this.arrayLivros.splice(i, 1);
          tbody.deleteRow(i);
        }
      }
    }
  }
}
var livro = new meusFavoritos();
