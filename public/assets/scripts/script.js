
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

function cadastrar() {
    // declaração das variaveis que recebem o valor dos inputs
    var nome = ipt_nome.value
    var cnpj = ipt_cnpj.value
    var telefone = ipt_telefone.value
    senha = ipt_senha.value

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

        } else if (caracteresEspeciais.includes(caracter)) {
            temEspecial = true;
        }
    }


    if (senha == '' || nome == '' || cnpj == '' || telefone == '') {
        alert("Todos os campos devem ser preenchidos")
    } else if (senha.length < 10) {
        alert("A senha necessita ter 10 ou mais caracteres")
    } else if (!temMaiuscula) {
        alert('A senha deve conter pelo menos uma letra maiúscula.');
        valido = false;
    } else if (!temMinuscula) {
        alert('A senha deve conter pelo menos uma letra minúscula.');
        valido = false;
    } else if (!temNumero) {
        alert('A senha deve conter pelo menos um número.');
        valido = false;
    } else if (!temEspecial) {
        alert('A senha deve conter pelo menos um caractere especial (ex: !@#$%).');
        valido = false;
    } else if (ipt_senha.value != ipt_senha2.value) {
        alert('A senha e a confirmação devem coincidir')
    } else if (!ipt_email.value.endsWith('@medsense.com')) {
        alert('O email deve terminar com @medsense.com')
    } else if (temMaiuscula && temEspecial && temMinuscula && temNumero && (ipt_senha.value == ipt_senha2.value) && (ipt_email.value.endsWith('@medsense.com'))) {
        valido = true
    }


    // Se os dados fornecidos nos inputs de cadastros forem válido, a senha e email serao armazenados localmente com o localStorage e abre a janela do login com window.location
    if (valido) {

        alert('Recebemos sua solicitamos de cadastro, entraremos em contato para o alinhamento das propostas. ');

        senha = ipt_senha.value;
        email = ipt_email.value;

        // armazena localmente:
        localStorage.setItem('medsense_email', email);
        localStorage.setItem('medsense_password', senha);

        window.location.href = 'login.html';
    }

}

// Login:

function login() {
    var senhalogin = ipt_senhaLogin.value;
    var emaillogin = ipt_emailLogin.value;

    var storedEmail = localStorage.getItem('medsense_email');
    var storedPassword = localStorage.getItem('medsense_password');


    if (!storedEmail || !storedPassword) {
        alert('Nenhum usuário cadastrado. Por favor, cadastre-se primeiro.');
    }


    if (senhalogin != storedPassword) {
        alert('Senha incorreta');
    } else if (emaillogin != storedEmail) {
        alert('Email incorreto');

    } else {
        window.location.href = 'dashboard.html';
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

    // VERIFICAÇÂO DE ENTRADAS
    if (
        (ax_tamanho != 'pequeno' && ax_tamanho != 'médio' && ax_tamanho != 'grande') ||
        (ax_risco != 'muito baixo' && ax_risco != 'baixo' && ax_risco != 'médio' && ax_risco != 'alto' && ax_risco != 'muito alto')
    ) {
        alert('Entradas inválidas! Corrija e tente novamente')
    }
    //

    // CÁCULO PROPIAMENTE DITO
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
        //

        // ATRIBUINDO DO CUSTO DA MULTA EM MILHÃO E TEMPO DE PARADA DA INTERDIÇÃO
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
        //
        // CÁLCULO DA PERDA DO LOTE
        var perdaLote = ax_custoLote * (12 / mesPerdeLote);
        var ganhoMonitoramento = (multaTotal * 1000000) + perdaLote - custoMonitoramento;
        //
        // EXIBIR OS CÁLCULOS
        resultado.innerHTML = `
        <br>
        <h3>
            Sejam bem vindos ${ax_nome}!
        </h3>
        Com base em dados e estimativas do mercado farmacêutico e de acordo com as diretrizes dos orgãos de vigilância foi possível calcular que:
        <br><br>
        A ${ax_nome} por ser uma <u>empresa de porte ${ax_tamanho}</u> as perdas de lotes podem chegar a <b>R$${perdaLote / 1000000} milhões</b> no ano e caso ocorra a disponibilização de um medicamento com produção inadequada que ofereça <u>risco ${ax_risco}</u> à saúde a multa estimada é de <b>R$${multaTotal * 1000} mil</b>! Dessa forma, sem o monitoramento da MedSense você corre o perigo de perder <b>R$${multaTotal + (perdaLote / 1000000)} milhões</b>!
        <br>
        Agora, pagando um custo estimado inicial de implementação da solução de monitoramento de <b>R$${custoMonitoramento / 1000} mil</b> (apenas <b>${custoMonitoramento / (ax_custoLote * ax_loteporMes)}%</b> em relação ao investido em medicamentos por mês) você chega a economizar até <b>R$${ganhoMonitoramento / 1000000} milhões</b>!
        `

    }


}




