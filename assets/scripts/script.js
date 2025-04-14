
function cadastrar() {
    // Inputs
    var nome = ipt_nome.value
    var cnpj = ipt_cnpj.value
    var telefone = ipt_telefone.value
    var senha = ipt_senha.value
    
    // Variavel booleana validar a senha
    var valido = false;

    var temMaiuscula = false;
    var temMinuscula = false;
    var temNumero = false;
    var temEspecial = false;

    // regras para a senha
    var caracteresEspeciais = "!@#$%^&*()_+-=[]{};':\"\\|,.<>/?";
    var numeros = "0123456789";
    var letrasMinusculas = "abcdefghijklmnopqrstuvwxyz";
    var letrasMaiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";


    //verifica se os inputs estao vazios
    if (senha == '' || nome == '' || cnpj == '' || telefone == '') {
        alert("Todos os campos devem ser preenchidos")
    }

    // verifica se a senha tem 10 ou mais caracteres
    else if (senha.length < 10) {
        alert("A senha necessita ter 10 ou mais caracteres")
    }


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
    if(temMaiuscula&&temEspecial&&temMinuscula&&temNumero){
        valido = true;
    }else {
        if (!temMaiuscula) {
            alert ('A senha deve conter pelo menos uma letra maiúscula.');
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
        }
    }


    if (valido){
        alert('Cadastro realizado com sucesso.');

    }
}