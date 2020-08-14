function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var masc = document.getElementById('masc')
    var femi = document.getElementById('femi')
    var resp = document.getElementById('resposta')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 13){
                // criança
                img.setAttribute('src', 'foto-bebe-m.png')
            }else if (idade < 25){
                // jovem
                img.setAttribute('src', 'foto-jovem-m.png')
            }else if (idade < 50){
                // Adulto
                img.setAttribute('src', 'foto-adulto-m.png')
            }else{
                // idoso
                img.setAttribute('src', 'foto-idoso-m.png')
            }
        }else{
            genero = 'Mulher'
            if (idade >= 0 && idade < 13){
                img.setAttribute('src', 'foto-bebe-f.png')
            }else if (idade <  25){
                img.setAttribute('src', 'foto-jovem-f.png')
            }else if (idade < 50){
                img.setAttribute('src', 'foto-adulto-f.png')
            }else{
                img.setAttribute('src', 'foto-idoso-f.png')
            }
        }
        resposta.style.textAlign = 'center'
        resposta.innerHTML = `Detectamos ${genero} com ${idade}.`
        resposta.appendChild(img)
    }
}