function Validar()
{
    expressao_cpf = /^[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}$/g ;
    expressao_telefone = /^\([0-9]{2}\) [0-9] [0-9]{4}-[0-9]{4}$/g ;
    
    texto_cpf = cpf.value
    texto_telefone = telefone.value

    resposta_cpf = expressao_cpf.test(texto_cpf)
    resposta_telefone = expressao_telefone.test(texto_telefone)

    if (resposta_cpf == false || resposta_telefone == false)
    {
        alert("DADOS INVALIDOS") ;

        if (resposta_cpf == false) {
            cpf.classList.remove('certo')
            cpf.classList.add('errado')
        }
        if (resposta_telefone == false) {
            telefone.classList.remove('certo')
            telefone.classList.add('errado')
        }
    }

    if (resposta_cpf == true || resposta_telefone == true)
    {
        if (resposta_cpf == true) {
            cpf.classList.remove('errado')
            cpf.classList.add('certo')
        }
        if (resposta_telefone == true) {
            telefone.classList.remove('errado')
            telefone.classList.add('certo')
        }
    }
}

function Limpar() 
{
    document.getElementById("cpf").value = "";
    document.getElementById("telefone").value = "";
    document.getElementById("cep").value = "";

    cpf.classList.remove('certo', 'errado')
    telefone.classList.remove('certo', 'errado')
    cep.classList.remove('certo', 'errado')
}