
// efeitos da navbar 

window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.menu');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const elementos = document.querySelectorAll('.fade-in-scroll');

    const observer = new IntersectionObserver((entradas, observer) => {
        entradas.forEach(entrada => {
            if (entrada.isIntersecting) {
                entrada.target.classList.add('visible');
                observer.unobserve(entrada.target);
            }
        });
    }, {
        rootMargin: '0px 0px -50px 0px', // Ajuste conforme necessário
    });

    elementos.forEach(el => observer.observe(el));
});


// funções do cadastro

var senha = '';
var email = '';
let listaEmpresasCadastradas = [];

function cadastrar() {
    // declaração das variaveis que recebem o valor dos inputs
    var nome = ipt_nome.value
    var cnpj = ipt_cnpj.value
    var telefone = ipt_telefone.value
    senha = ipt_senha.value
    email = ipt_email.value;
    var codigoVar = codigo_input.value;
    var idEmpresaVincular


    // decraclaração das variaveies booleanas  para validar a senha
    var valido = false;
    var temMaiuscula = false;
    var temMinuscula = false;
    var temNumero = false;
    var temEspecial = false;

    // variaveis contendo as regras para a senha
    var caracteresEspeciais = "!@#$%^&*()_+-=[]{};':\"\\|,.<>/?";
    var numeros = "0123456789";
    var letrasMinusculas = "abcdefghijklmnopqrstuvwxyz";
    var letrasMaiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";



    // varre a string 'senha' aplicando a verificação de todas as regras da senha 
    for (var i = 0; i < senha.length; i++) {
        var caracter = senha[i];

        if (letrasMaiusculas.includes(caracter)) {
            temMaiuscula = true;

        } else if (letrasMinusculas.includes(caracter)) {
            temMinuscula = true;

        } else if (numeros.includes(caracter)) {
            temNumero = true;

        }
        else if (caracteresEspeciais.includes(caracter)) {
            temEspecial = true;
        }
    }


    if (senha == '' || nome == '' || cnpj == '' || telefone == '') {
        alert("Todos os campos devem ser preenchidos")
    } else if (senha.length < 6) {
        alert("A senha necessita ter 6 ou mais caracteres")
    } else if (!temMaiuscula) {
        alert('A senha deve conter pelo menos uma letra maiúscula.');
        valido = false;
    }
    else if (!temMaiuscula) {
        alert('A senha deve conter pelo menos uma letra maiúscula.');
        valido = false;
    } else if (!temMinuscula) {
        alert('A senha deve conter pelo menos uma letra minúscula.');
        valido = false;
    } else if (!temNumero) {
        alert('A senha deve conter pelo menos um número.');
        valido = false;
    } else if (ipt_senha.value != ipt_senha2.value) {
        alert('A senha e a confirmação devem coincidir')
    }
    else if (!temEspecial) {
        alert('A senha deve conter pelo menos um caractere especial (ex: !@#$%).');
    }
    else if (codigo_input.value == '') {
        alert('O código de vinculação deve ser preenchido')
    }
    // verificação do email 
    else if (!email.includes("@")) {
        alert("Email inválido")
    }

    else if (temMaiuscula && temMinuscula && temNumero && temEspecial && (ipt_senha.value == ipt_senha2.value)) {
        valido = true
        alert('Cadastro realizado com sucesso!')
    }




    for (let i = 0; i < listaEmpresasCadastradas.length; i++) {
        if (listaEmpresasCadastradas[i].tokenAtivacao == codigoVar) {
            idEmpresaVincular = listaEmpresasCadastradas[i].idEmpresa
            console.log("Código de ativação válido.");
            break;
        }
    }






    // Se os dados fornecidos nos inputs de cadastros forem válido, a senha e email serao armazenados localmente com o localStorage e abre a janela do login com window.location
    if (valido) {
        email = ipt_email.value;
        senha = ipt_senha.value;



        fetch("/usuarios/cadastrar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                // crie um atributo que recebe o valor recuperado aqui
                // Agora vá para o arquivo routes/usuario.js
                nomeServer: nome,
                emailServer: email,
                senhaServer: senha,
                idEmpresaVincularServer: idEmpresaVincular
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

                } else {
                    throw "Houve um erro ao tentar realizar o cadastro!";
                }
            })
            .catch(function (resposta) {
                console.log(`#ERRO: ${resposta}`);

            });




        window.location.href = 'login.html';
    }

}



// Listando empresas cadastradas
function listar() {
    fetch("/empresas/listar", {
        method: "GET",
    })
        .then(function (resposta) {
            resposta.json().then((empresas) => {
                empresas.forEach((empresa) => {
                    listaEmpresasCadastradas.push(empresa);

                    console.log("listaEmpresasCadastradas")
                    console.log(listaEmpresasCadastradas[0].tokenAtivacao)
                });
            });
        })
        .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });
}





// Login:




function entrar() {


    var emailVar = ipt_emailLogin.value;
    var senhaVar = ipt_senhaLogin.value;

    if (emailVar == "" || senhaVar == "") {
        alert('Mensagem de erro para todos os campos em branco');

        return
    }

    if (emailVar.includes("@medsense")) {
        fetch("/usuarios/autenticar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                emailServer: emailVar,
                senhaServer: senhaVar
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO entrar()!")

            if (resposta.ok) {
                console.log(resposta);

                resposta.json().then(json => {
                    console.log(json);
                    console.log(JSON.stringify(json));
                    sessionStorage.EMAIL_USUARIO = json.email;
                    sessionStorage.NOME_USUARIO = json.nome;
                    sessionStorage.ID_USUARIO = json.idUsuario;
                    alert(`Seja bem-vindo(a)`);
                    window.location = "BobIA.html";

                });
            } else {

                console.log("Houve um erro ao tentar realizar o login!");

                resposta.text().then(texto => {
                    console.error(texto);
                });
            }

        }).catch(function (erro) {
            console.log(erro);
        })
    }
    else {

        console.log("FORM LOGIN: ", emailVar);
        console.log("FORM SENHA: ", senhaVar);

        fetch("/usuarios/autenticar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                emailServer: emailVar,
                senhaServer: senhaVar
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO entrar()!")

            if (resposta.ok) {
                console.log(resposta);

                resposta.json().then(json => {
                    console.log(json);
                    console.log(JSON.stringify(json));
                    sessionStorage.EMAIL_USUARIO = json.email;
                    sessionStorage.NOME_USUARIO = json.nome;
                    sessionStorage.ID_USUARIO = json.idUsuario;
                    alert(`Seja bem-vindo(a)`);
                    window.location = "dashboard.html";

                });
            } else {

                console.log("Houve um erro ao tentar realizar o login!");

                resposta.text().then(texto => {
                    console.error(texto);
                });
            }

        }).catch(function (erro) {
            console.log(erro);
        })

    }
}



// Simulador Financeiro:

function calcular() {
    resultado.innerHTML = '';
    var ax_nome = ipt_nome_sim.value;
    var ax_tamanho = ipt_tamanho.value;
    var ax_custoLote = Number(ipt_custoLote.value);
    var ax_loteporMes = Number(ipt_loteMes.value);
    var ax_risco = ipt_risco.value;

    // VERIFICAÇÃO DE ENTRADAS
    if (
        (ax_tamanho != 'pequeno' && ax_tamanho != 'médio' && ax_tamanho != 'grande') ||
        (ax_risco != 'muito baixo' && ax_risco != 'baixo' && ax_risco != 'médio' && ax_risco != 'alto' && ax_risco != 'muito alto')
    ) {
        alert('Entradas inválidas! Corrija e tente novamente')
    }
    // CÁLCULO PROPRIAMENTE DITO
    else {
        // ATRIBUINDO CUSTO DE MONITORAMENTO E INTERVALO DE PERDA DE LOTE POR TAMANHO DA EMPRESA
        if (ax_tamanho == 'pequeno') {
            var custoMonitoramento = 5000;
            var mesPerdeLote = 3
        }
        if (ax_tamanho == 'médio') {
            var custoMonitoramento = 10000;
            var mesPerdeLote = 2
        }
        if (ax_tamanho == 'grande') {
            var custoMonitoramento = 15000;
            var mesPerdeLote = 1
        }

        // ATRIBUINDO CUSTO DA MULTA EM MILHÃO E TEMPO DE PARADA DA INTERDIÇÃO
        var multaTotal = 0;
        if (ax_risco == 'muito baixo') {
            var custoMulta = 0.5;
            var custoInterdicao = 0
        }
        if (ax_risco == 'baixo') {
            var custoMulta = 0.75;
            var custoInterdicao = 0
        }
        if (ax_risco == 'médio') {
            var custoMulta = 1;
            var custoInterdicao = (ax_custoLote * ax_loteporMes * 3) / 1000000
        }
        if (ax_risco == 'alto') {
            var custoMulta = 1.25
            var custoInterdicao = (ax_custoLote * ax_loteporMes * 3) / 1000000
        }
        if (ax_risco == 'muito alto') {
            var custoMulta = 1.5
            var custoInterdicao = (ax_custoLote * ax_loteporMes * 3) / 1000000
        }
        multaTotal = custoMulta + custoInterdicao;

        // CÁLCULO DA PERDA DO LOTE
        var perdaLote = ax_custoLote * (12 / mesPerdeLote);
        var ganhoMonitoramento = (multaTotal * 1000000) + perdaLote - custoMonitoramento;

        // FORMATAÇÃO DOS VALORES
        var perdaFormatada, multaFormatada, perdaTotalFormatada, custoFormatado, ganhoFormatado;

        if (perdaLote >= 1000000000) {
            perdaFormatada = `R$${(perdaLote / 1000000000).toFixed(3)} bilhões`;
        } else if (perdaLote >= 1000000) {
            perdaFormatada = `R$${(perdaLote / 1000000).toFixed(3)} milhões`;
        } else if (perdaLote >= 1000) {
            perdaFormatada = `R$${(perdaLote / 1000).toFixed(3)} mil`;
        } else {
            perdaFormatada = `R$${perdaLote.toFixed(2)}`;
        }

        var multaValor = multaTotal * 1000000;
        if (multaValor >= 1000000000) {
            multaFormatada = `R$${(multaValor / 1000000000).toFixed(3)} bilhões`;
        } else if (multaValor >= 1000000) {
            multaFormatada = `R$${(multaValor / 1000000).toFixed(3)} milhões`;
        } else if (multaValor >= 1000) {
            multaFormatada = `R$${(multaValor / 1000).toFixed(3)} mil`;
        } else {
            multaFormatada = `R$${multaValor.toFixed(2)}`;
        }

        var perdaTotalValor = multaValor + perdaLote;
        if (perdaTotalValor >= 1000000000) {
            perdaTotalFormatada = `R$${(perdaTotalValor / 1000000000).toFixed(3)} bilhões`;
        } else if (perdaTotalValor >= 1000000) {
            perdaTotalFormatada = `R$${(perdaTotalValor / 1000000).toFixed(3)} milhões`;
        } else if (perdaTotalValor >= 1000) {
            perdaTotalFormatada = `R$${(perdaTotalValor / 1000).toFixed(3)} mil`;
        } else {
            perdaTotalFormatada = `R$${perdaTotalValor.toFixed(2)}`;
        }

        if (custoMonitoramento >= 1000000000) {
            custoFormatado = `R$${(custoMonitoramento / 1000000000).toFixed(3)} bilhões`;
        } else if (custoMonitoramento >= 1000000) {
            custoFormatado = `R$${(custoMonitoramento / 1000000).toFixed(3)} milhões`;
        } else if (custoMonitoramento >= 1000) {
            custoFormatado = `R$${(custoMonitoramento / 1000).toFixed(3)} mil`;
        } else {
            custoFormatado = `R$${custoMonitoramento.toFixed(2)}`;
        }

        if (ganhoMonitoramento >= 1000000000) {
            ganhoFormatado = `R$${(ganhoMonitoramento / 1000000000).toFixed(3)} bilhões`;
        } else if (ganhoMonitoramento >= 1000000) {
            ganhoFormatado = `R$${(ganhoMonitoramento / 1000000).toFixed(3)} milhões`;
        } else if (ganhoMonitoramento >= 1000) {
            ganhoFormatado = `R$${(ganhoMonitoramento / 1000).toFixed(3)} mil`;
        } else {
            ganhoFormatado = `R$${ganhoMonitoramento.toFixed(2)}`;
        }

        // EXIBIR RESULTADOS
        resultado.innerHTML = `
        <br>
        <h3>
            Sejam bem vindos ${ax_nome}!
        </h3>
        Com base em dados e estimativas do mercado farmacêutico e de acordo com as diretrizes dos orgãos de vigilância foi possível calcular que:
        <br><br>
        A ${ax_nome} por ser uma <u>empresa de porte ${ax_tamanho}</u> as perdas de lotes podem chegar a <b>${perdaFormatada}</b> no ano e caso ocorra a disponibilização de um medicamento com produção inadequada que ofereça <u>risco ${ax_risco}</u> à saúde a multa estimada é de <b>${multaFormatada}</b>! Dessa forma, sem o monitoramento da MedSense você corre o perigo de perder <b>${perdaTotalFormatada}</b>!
        <br>
        Agora, pagando um custo estimado inicial de implementação da solução de monitoramento de <b>${custoFormatado}</b> (apenas <b>${(custoMonitoramento / (ax_custoLote * ax_loteporMes) * 100).toFixed(2)}%</b> em relação ao investido em medicamentos por mês) você chega a economizar até <b>${ganhoFormatado}</b>!
        `;
    }
}






function olho_senha1() {
    const senha = document.getElementById("ipt_senha");
    const icone = document.getElementById("id_icone");

    if (senha.type == "password") {
        senha.type = "text"; // Mostra a senha
        icone.src = "assets/image/olho-sim.png"; // Ícone de "olho fechado"
    } else {
        senha.type = "password"; // Oculta a senha
        icone.src = "assets/image/olho-nao.png"; // Ícone de "olho aberto"
    }
}

function olho_senha2() {
    const senha = document.getElementById("ipt_senha2");
    const icone = document.getElementById("id_icone2");

    if (senha.type == "password") {
        senha.type = "text"; // Mostra a senha
        icone.src = "assets/image/olho-sim.png"; // Ícone de "olho fechado"
    } else {
        senha.type = "password"; // Oculta a senha
        icone.src = "assets/image/olho-nao.png"; // Ícone de "olho aberto"
    }
}

function olho_senha3() {
    const senha = document.getElementById("ipt_senhaLogin");
    const icone = document.getElementById("id_icone3");

    if (senha.type == "password") {
        senha.type = "text"; // Mostra a senha
        icone.src = "assets/image/olho-sim.png"; // Ícone de "olho fechado"
    } else {
        senha.type = "password"; // Oculta a senha
        icone.src = "assets/image/olho-nao.png"; // Ícone de "olho aberto"
    }
}
