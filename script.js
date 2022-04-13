//FUNÇÃO DE MUDANÇA DE POSIÇÕES
function mudarPosicao(chegada, posicaoAtual, paraPosicao){
    chegada.splice(paraPosicao, 0, chegada.splice(posicaoAtual, 1)[0])
    return chegada
}

//FUNÇÃO QUE RECEBE A POSIÇÃO DE CHEGADA
function positions(firstPlace, secondPlace, lastPlace){
    let chegada = [firstPlace, secondPlace, lastPlace]
    if (chegada.indexOf("Daniel") == 1){
        mudarPosicao(chegada, 1, 0)
        console.log("1º - Colocado: " + chegada[0] + ", 2º - Colocado: " + chegada[1] + ", 3º - Colocado: " + chegada[2])
    }else if(chegada.indexOf("Daniel") == 2){
            mudarPosicao(chegada, 2, 1)
            console.log("1º - Colocado: " + chegada[0] + ", 2º - Colocado: " + chegada[1] + ", 3º - Colocado: " + chegada[2])
    }else{
            console.log("1º - Colocado: " + chegada[0] + ", 2º - Colocado: " + chegada[1] + ", 3º - Colocado: " + chegada[2])
    }
}

positions("Manoel", "Rafael", "Daniel")
