/* ********************CRIAÇÃO DA CLASSE************************** */
class meusFavoritos {

    /*********************  CRIAÇÃO DO CONSTRUCTOR  ***************/
    constructor() {
        this.codigo = 1;
        this.titulo = "";
        this.autor = "";
        this.arrayLivros = [];

        this.editCodigo = null;
    }

    /* ***************Função 1 - LER DADOS************************* */
    lerDados() {
        /* alert("lerDados"); */
        let livro = {};

        livro.codigo = this.codigo;
        livro.titulo = document.getElementById("tituloLivro").value;
        livro.autor = document.getElementById("autorLivro").value;

        return livro;
    }

    /**********************  Função 2 - SALVAR **********************/
    salvar() {
        let livro = this.lerDados();
        if (this.validarCampos(livro)) {
            if (this.editCodigo == null) {
                this.adicionar(livro);
            } else {
                console.log(livro);
                this.atualizarEdicao(this.editCodigo);
            }
        }
        this.criarTabela();
        this.cancelar();
        console.log(this.arrayLivros);
    }

    /*********************  Função 3 - VALIDAR CAMPOS ***************/
    validarCampos(livro) {
        let mensagem = "";
        if (livro.titulo == "") {
            mensagem += "- Informe o titulo do livro! \n";
        }
        if (livro.autor == "") {
            mensagem += "- Informe o(a)  autor(a) do livro! \n";
        }
        if (mensagem != "") {
            alert(mensagem);
            return false;
        }
        return true;
    }

    /*********************  Função 4 - ADICIONAR LIVRO ***************/
    adicionar(livro) {
        this.arrayLivros.push(livro);
        this.codigo++;

        /* this.limpar(); */
        console.log("Bom dia");
    }

    /*********************  Função 5 - CRIAR TABELA ***************/
    criarTabela() {
        let tbody = document.getElementById("tbody");
        //resetar a lista quando salvar um novo produto
        tbody.innerText = "";
        for (let i = 0; i < this.arrayLivros.length; i++) {
            let novaLinha = tbody.insertRow();
            let td_titulo = novaLinha.insertCell();
            let td_autor = novaLinha.insertCell();
            let td_acoes = novaLinha.insertCell();

            td_titulo.innerText = this.arrayLivros[i].titulo;
            td_autor.innerText = this.arrayLivros[i].autor;
            td_acoes.classList.add("center");

            let imgEditar = document.createElement("img");
            imgEditar.src = "../img/editar.svg"
            imgEditar.setAttribute('onclick', 'livro.editarDados(' + JSON.stringify(this.arrayLivros[i]) + ')');

            let imgDeletar = document.createElement("img");
            imgDeletar.src = "../img/deletar.svg"
            imgDeletar.setAttribute('onclick', 'livro.deletar(' + this.arrayLivros[i].codigo + ')');

            td_acoes.appendChild(imgEditar);
            td_acoes.appendChild(imgDeletar);
        }
    }

    /*********************  Função 6 - EDITAR  ***************/
    editarDados(dados) {
        this.editCodigo = dados.codigo;
        document.getElementById("tituloLivro").value = dados.titulo;
        document.getElementById("autorLivro").value = dados.autor;

        document.getElementById("btn1").innerText = "Atualizar";

        this.editCodigo = dados.codigo;

    }

    /*********************  Função 7 - ATUALIZAR  ***************/
    atualizarEdicao(codigo) {
        for (let i = 0; i < this.arrayLivros.length; i++) {
            if (codigo == this.arrayLivros[i].codigo) {
                this.arrayLivros[i].titulo = document.getElementById("tituloLivro").value;
                this.arrayLivros[i].autor = document.getElementById("autorLivro").value;
            }
        }
        document.getElementById("btn1").innerText = "Salvar";
        this.editCodigo = null;
    }

    /*********************  Função 8 - CANCELAR  ***************/
    cancelar() {
        document.getElementById("tituloLivro").value = "";
        document.getElementById("autorLivro").value = "";

        document.getElementById("btn1").innerText = "Salvar";
        this.editCodigo = null;
    }

    /*********************  Função 9 - DELETAR ***************/
    deletar(codigoProcurado) {
        if (confirm("Desdeja realmente deletar o livro " + codigoProcurado + " ?")) {
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
