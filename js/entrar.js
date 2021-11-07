//Verifica se CPF é válido
function _cpf(cpf) {
    cpf = cpf.replace(/[^\d]+/g, '');
    if (cpf == '') return false;
    if (cpf.length != 11 ||
        cpf == "00000000000" ||
        cpf == "11111111111" ||
        cpf == "22222222222" ||
        cpf == "33333333333" ||
        cpf == "44444444444" ||
        cpf == "55555555555" ||
        cpf == "66666666666" ||
        cpf == "77777777777" ||
        cpf == "88888888888" ||
        cpf == "99999999999")
        return false;
    add = 0;
    for (i = 0; i < 9; i++)
        add += parseInt(cpf.charAt(i)) * (10 - i);
    rev = 11 - (add % 11);
    if (rev == 10 || rev == 11)
        rev = 0;
    if (rev != parseInt(cpf.charAt(9)))
        return false;
    add = 0;
    for (i = 0; i < 10; i++)
        add += parseInt(cpf.charAt(i)) * (11 - i);
    rev = 11 - (add % 11);
    if (rev == 10 || rev == 11)
        rev = 0;
    if (rev != parseInt(cpf.charAt(10)))
        return false;
    return true;
}
function validarCPF(el) {
    if (!_cpf(el.value)) {
        alert("CPF inválido!" + el.value);
        // apaga o valor
        el.value = "";
    }
}

const apresentaDados = (resultado) => {
    for (let campo in resultado) {
        if (document.querySelector("#" + campo)) {
            console.log(campo);
            document.querySelector("#" + campo).value = resultado[campo]
        }
    }
}

function consultaCEP() {
    let cepDigitado = document.getElementById("cep");

    if (cepDigitado.value == "") {
        cepDigitado.style.border = "1px solid red";
    } else {
        //tira o que tá no primeiro parâmetro e insere o que está no segundo. Nessa situação o - do CEP é apagado, caso retirado
        let cepProcurado = cepDigitado.value.replace("-", "");
        console.log(cepProcurado);

        fetch(`http://viacep.com.br/ws/${cepProcurado}/json/`)
            .then(response => {
                response.json()
                    .then(data => console.log(apresentaDados(data)));
            })
            .catch(x => console.log("CEP não encontrado!!"));
    }
}



//Validação de campos formulário
function enviardados() {

    if (document.form1.txNome.value == "" || document.form1.txNome.value.length < 3) {
        alert("Preencha campo Nome corretamente!");
        //propriedade focus setar para o input nome caso não seja preeenchido
        document.form1.txNome.focus();
        //O Return false evita laço de repetição e perda da prorpiedade focus
        return false;
    }
     if (document.form1.txTelefone.value == "" || document.form1.txTelefone.value.length < 10) {
        alert("Preencha campo Telefone corretamente!");
        document.form1.txTelefone.focus();
        return false;
    }
    if (document.form1.txUsuario.value == "" || document.form1.txUsuario.value.length < 3) {
        alert("Preencha campo Usuário corretamente!");
        document.form1.txUsuario.focus();
        return false;
    }
    if (document.form1.txSenha.value == "" || document.form1.txSenha.value.length < 3) {
        alert("Preencha campo Senha corretamente!");
        document.form1.txSenha.focus();
        return false;
    }
    if (document.form1.txDataNascimento.value == "") {
        alert("Preencha campo Data de Nascimento corretamente!");
        document.form1.txDataNascimento.focus();
        return false;
    }
    if (document.form1.txEmail.value == "" || document.form1.txEmail.value.length < 3) {
        alert("Preencha campo E-mail corretamente!");
        document.form1.txEmail.focus();
        return false;
    }
    if (document.form1.txCPF.value == "" || document.form1.txCPF.value.length < 5) {
        alert("Preencha campo CPF corretamente!");
        document.form1.txCPF.focus();
        return false;
    }

    if (document.form1.txCep.value == "" || document.form1.txCep.value.length < 7) {
        alert("Preencha o  campo CEP corretamente!");
        document.form1.txCep.focus();
        return false;
    }
    if (document.form1.logradouro.value == "" || document.form1.logradouro.value.length < 5) {
        alert("Preencha o campo Endereço corretamente!");
        document.form1.logradouro.focus();
        return false;
    }
    if (document.form1.txNumero.value == "" || document.form1.txNumero.value.length < 2) {
        alert("Preencha o campo Número corretamente!");
        document.form1.txNumero.focus();
    }
    if (document.form1.complemento.value == "" || document.form1.complemento.value.length < 1) {
        alert("Preencha o campo Complemento corretamente!");
        document.form1.complemento.focus();
    }
    if (document.form1.uf.value == "" || document.form1.uf.value.length < 3) {
        alert("Preencha o campo Estado corretamente!");
        document.form1.uf.focus();
        return false;
    }
    if (document.form1.localidade.value == "" || document.form1.localidade.value.length < 3) {
        alert("Preencha o campo Cidade corretamente!");
        document.form1.localidade.focus();
        return false;
    }

    if (!document.querySelector('[name="rdSexo"]:checked')) {
        alert("Selecione o sexo ao qual vocês se identifica, corretamente!");
        return false;
    }    
    if (!(document.querySelector('[name="ckFuncao"]:checked'))) {
        alert("Selecione as habilidades corespondentes aos seu perfil corretamente!");
        return false;
    }

    {
        alert("Cadastro realizado com sucesso!");
    }
}


