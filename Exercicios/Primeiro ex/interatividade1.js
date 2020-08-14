function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var atual = new Date()
    var hora = atual.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora < 12){
        img.src = 'dia.png'
        document.body.style.background = 'rgb(153, 184, 113)'
        msg2.innerHTML = 'Bom dia!'
        // Bom Dia!
    }else if (hora < 18){
        img.src = 'tarde.png'
        document.body.style.background = 'rgb(209, 145, 86)'
        msg2.innerHTML = 'Boa Tarde!'
        // Boa Tarde!
    }else{
        img.src = 'noite.png'
        document.body.style.background = 'rgb(36, 85, 148)'
        msg2.innerHTML = 'Boa Noite!'
        // Boa noite!
    }
}