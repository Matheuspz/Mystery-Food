function Validar()
{

    var_senha = senha.value

    if(var_senha.length != 0){
        if(var_senha.match(/123/g)){
            var_senha = true
        }
        else {
            var_senha = false
        }
    }

    if (var_senha == false)
    {
        alert("DADOS INVALIDOS " + var_senha) ;
        if (var_senha == false) {
            senha.classList.remove('certo')
            senha.classList.add('errado')
        }   
    }

    if (var_senha == true)
    {
        alert(var_senha) ;
        if (var_senha == true) {
            senha.classList.remove('errado')
            senha.classList.add('certo')
        }  
    }
}

function Limpar() 
{
    document.getElementById("email").value = "";
    document.getElementById("senha").value = "";

    senha.classList.remove('certo', 'errado')
}