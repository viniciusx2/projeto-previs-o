const key = "0b10868db18d45348d669464e6303b25"

function colocardadosnatela(dados){
    console.log(dados)

    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name 
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector(".texto-previsao").innerHTML= dados.weather[0].description
    document.querySelector(".umidade").innerHTML= dados.main.humidity + "% de Umidade"
    document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png` 

}
 

 async function buscarcidade(cidade){
    
const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${ key}&lang=pt_br&units=metric`).then(resposta => resposta.json())

    https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

    colocardadosnatela(dados)
     
}



function cliqueiNoBotao() {
    const cidade = document.querySelector(".input-cidade").value

    buscarcidade(cidade)
}


