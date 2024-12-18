// sessão
function validarSessao() {
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;
    var idUsuario = sessionStorage.ID_USUARIO;

    var b_usuario = document.getElementById("b_usuario");

    if (email != null && nome != null) {
        b_usuario.innerHTML = nome;
    } else {
        window.location = "../login.html";
    }   
}

function cadastrar() {
    aguardar();

    var nomeVar = nome_input.value;
    var emailVar = email_input.value;
    var senhaVar = senha_input.value;
    var confirmacaoSenhaVar = confirmacao_senha_input.value;

    if (senhaVar != confirmacaoSenhaVar){
      cardErro.style.display = "block";
      mensagem_erro.innerHTML =
        `As senhas não estão iguais.<br>
        Insira senhas inguais`;

      finalizarAguardar();
      return false;
    } else if (senhaVar < 8){
      cardErro.style.display = "block";
      mensagem_erro.innerHTML =
        `Senha muito pequena.<br>
        Insira uma senha com 8 ou mais caracteres.`;

      finalizarAguardar();
      return false;
    }

    if (
      nomeVar == "" ||
      emailVar == "" ||
      senhaVar == "" ||
      confirmacaoSenhaVar == ""
    ) {
      cardErro.style.display = "block";
      mensagem_erro.innerHTML =
      `Insira todas as informações.<br>
      Verifique se há um campo em branco.`;

      finalizarAguardar();
      return false;
    } else if (
      emailVar.indexOf('@') === -1||
      emailVar.indexOf('.com') === -1
    ) {
      cardErro.style.display = "block";
      mensagem_erro.innerHTML = 
      `E-mail inválido!<br>
      Insira um e-mail válido.`

      finalizarAguardar();
      return false;
    } else {
      setInterval(sumirMensagem, 5000);
    }
    
    // Enviando o valor da nova input
    fetch("/usuarios/cadastrar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // crie um atributo que recebe o valor recuperado aqui
        // Agora vá para o arquivo routes/usuario.js
        nomeServer: nomeVar,
        emailServer: emailVar,
        senhaServer: senhaVar,
      }),
    })
      .then(function (resposta) {
        console.log("resposta: ", resposta);

        if (resposta.ok) {
          cardErro.style.display = "block";

          mensagem_erro.innerHTML =
            "Cadastro realizado com sucesso! Redirecionando para tela de Login...";

          setTimeout(() => {
            window.location = "login.html";
          }, "2000");

          limparFormulario();
          finalizarAguardar();
        } else {
          throw "Houve um erro ao tentar realizar o cadastro!";
        }
      })
      .catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
        finalizarAguardar();
      });

    return false;
}

function sumirMensagem() {
    cardErro.style.display = "none";
}


function limparSessao() {
    sessionStorage.clear();
    window.location = "../login.html";
}

//Função que encaminha o usuario para a página principal
function direcionarHome(){
    window.location.href = 'index.html'
}

//Função que encaminha o usuario para a página de login
function realizarLogin(){
    window.location.href = 'login.html'
}

//Função que encaminha o usuario para a página de login
function realizarCadastro(){
    window.location.href = 'cadastro.html'
}

// carregamento (loading)
function aguardar() {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "flex";
}

function finalizarAguardar(texto) {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "none";

    var divErrosLogin = document.getElementById("div_erros_login");
    if (texto) {
        divErrosLogin.style.display = "flex";
        divErrosLogin.innerHTML = texto;
    }
}

