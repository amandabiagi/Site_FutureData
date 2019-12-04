function cadastrar(){

    var senhas = senha.value;
    var emails = email.value;

    mensagem.innerHTML='';

    if( nome.value == '' ||
        email.value == '' ||        
        endereco.value == '' ||
        numero.value == '' ||
        bairro.value=='' ||
        cep.value == '' ||
        cidade.value=='' ||
        senha.value == '' ||
        confirmar_senha.value == ''){

            mensagem.innerHTML = 'Preencha todos os campos';

    }else if (senha.value != confirmar_senha.value){
            mensagem.innerHTML = 'As senhas não se correspondem';
            senha.value='';
            confirmar_senha.value='';

    }else if (emails.indexOf('@') < 1  ){             
            mensagem.innerHTML='Digite um email válido';
            emails=''

    }else if (senhas.length < 4){
            mensagem.innerHTML='Senha com no mínimo 4 caracteres';

    }
    
    else {
            window.location='index.html';
    }   
    {

    }
}