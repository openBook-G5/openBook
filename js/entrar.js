//Verifica se CPF é válido
function _cpf(cpf) {
  cpf = cpf.replace(/[^\d]+/g, '');
  if (cpf == '') return false;
  if (
    cpf.length != 11 ||
    cpf == '00000000000' ||
    cpf == '11111111111' ||
    cpf == '22222222222' ||
    cpf == '33333333333' ||
    cpf == '44444444444' ||
    cpf == '55555555555' ||
    cpf == '66666666666' ||
    cpf == '77777777777' ||
    cpf == '88888888888' ||
    cpf == '99999999999'
  )
    return false;
  add = 0;
  for (i = 0; i < 9; i++) add += parseInt(cpf.charAt(i)) * (10 - i);
  rev = 11 - (add % 11);
  if (rev == 10 || rev == 11) rev = 0;
  if (rev != parseInt(cpf.charAt(9))) return false;
  add = 0;
  for (i = 0; i < 10; i++) add += parseInt(cpf.charAt(i)) * (11 - i);
  rev = 11 - (add % 11);
  if (rev == 10 || rev == 11) rev = 0;
  if (rev != parseInt(cpf.charAt(10))) return false;
  return true;
}
function validarCPF(el) {
  if (!_cpf(el.value)) {
    //  alert("CPF inválido!" + el.value);
    // apaga o valor
    el.value = '';
  }
}

const apresentaDados = resultado => {
  for (let campo in resultado) {
    if (document.querySelector('#' + campo)) {
      console.log(campo);
      document.querySelector('#' + campo).value = resultado[campo];
    }
  }
};

function consultaCEP() {
  let cepDigitado = document.getElementById('cep');

  if (cepDigitado.value == '') {
    cepDigitado.style.border = '1px solid red';
  } else {
    //tira o que tá no primeiro parâmetro e insere o que está no segundo. Nessa situação o - do CEP é apagado, caso retirado
    let cepProcurado = cepDigitado.value.replace('-', '');
    console.log(cepProcurado);

    fetch(`http://viacep.com.br/ws/${cepProcurado}/json/`)
      .then(response => {
        response.json().then(data => console.log(apresentaDados(data)));
      })
      .catch(x => console.log('CEP não encontrado!!'));
  }
}

//Validando os  campos formulário de cadastro
function validadados() {
  if (document.formCadastro.nomeCompleto.value.length < 11) {
    alert('Informe um nome válido');
    //propriedade focus setar para o input nome caso não seja preeenchido
    document.formCadastro.nomeCompleto.focus();
    //O Return false evita laço de repetição e perda da prorpiedade focus
    return false;
  }

  if (document.formCadastro.email.value.length < 10) {
    alert('Informe um E-mail válido');
    document.formCadastro.email.focus();
    return false;
  }

  if (document.formCadastro.senha.value.length < 3) {
    alert('Informe uma senha');
    document.formCadastro.senha.focus();
    return false;
  }

  if (
    document.formCadastro.telefone.value == '' ||
    document.formCadastro.telefone.value.length < 10
  ) {
    alert('Informe um telefone válido');
    document.formCadastro.telefone.focus();
    return false;
  }

  if (
    document.formCadastro.cpf.value == '' ||
    document.formCadastro.cpf.value.length < 11
  ) {
    alert('Informe um CPF válido');
    document.formCadastro.cpf.focus();
    return false;
  }

  if (
    document.formCadastro.cep.value == '' ||
    document.formCadastro.cep.value.length < 7
  ) {
    alert('Informe um CEP válido');
    document.formCadastro.cep.focus();
    return false;
  }
  if (
    document.formCadastro.logradouro.value == '' ||
    document.formCadastro.logradouro.value.length < 5
  ) {
    alert('Informe um endereço válido');
    document.form.logradouro.focus();
    return false;
  }

  if (
    document.formCadastro.uf.value == '' ||
    document.formCadastro.uf.value.length < 2
  ) {
    alert('Informe um estado válido');
    document.formCadastro.uf.focus();
    return false;
  }
  if (
    document.formCadastro.localidade.value == '' ||
    document.formCadastro.localidade.value.length < 5
  ) {
    alert('Informe uma cidade válida');
    document.formCadastro.localidade.focus();
    return false;
  }

  {
    alert('Cadastro Concluido - Bem Vindo a OpenBook!');
    document.formCadastro.nomeCompleto.value = '';
    document.formCadastro.email.value = '';
    document.formCadastro.senha.value = '';
    document.formCadastro.telefone.value = '';
    document.formCadastro.cpf.value = '';
    document.formCadastro.cep.value = '';
    document.formCadastro.logradouro.value = '';
    document.formCadastro.bairro.value = '';
    document.formCadastro.numero.value = '';
    document.formCadastro.localidade.value = '';
    document.formCadastro.uf.value = '';
  }
}

$('#buttonLogin').click(function () {
  $('#formCadastrar').hide();
  $('#formLogin').show();
});
$('#buttonCadastro').click(function () {
  $('#formLogin').hide();
  $('#formCadastrar').show();
});
