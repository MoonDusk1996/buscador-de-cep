//variaveis
const _cep = document.querySelector("#CEP")
const _invalidText = document.querySelector("#invalidtext")



//evento quando tabulado
_cep.addEventListener("blur", buscacep)
_cep.addEventListener("keypress", function(e){
    if (e.key === 'Enter'){
        var btn = document.querySelector("#buscar")
        btn.click()
    }
})

function buscacep(){

    let search = _cep.value.replace("-","")
    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }
    fetch(`https://viacep.com.br/ws/${search}/json/`, options)
    .then(response => {response.json()
        .then(data => showData(data))
        
        _invalidText.innerHTML = ""
        
            const showData = (result)=>{
                for(const campo in result){
                    if (document.querySelector("#"+campo)){
                        document.querySelector("#"+campo).value = result[campo]
                    }
                }
            }
    })
    .catch(function(erro){
        _invalidText.innerHTML = "CEP inválido"
        
    })
}

