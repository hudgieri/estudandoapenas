function conta(){
    var ini = document.getElementById('ini')
    var fim = document.getElementById('fim')
    var pula = document.getElementById('pula')
    var res = document.getElementById('res')


    if (ini.value.length == 0 || fim.value.length == 0 || pula.value.length == 0){
        res.innerHTML = 'Faltam Dados...'
    }else {
        res.innerHTML = 'Contando: </br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pula.value)
        
        if(p <= 0){
            p = 1
        }

        if (i < f){
            for (let c = i ; c <= f ; c += p){
                res.innerHTML += ` ${c} \u{1F449}`
                // Contagem Crescente
            }
        }else {
            for (let c = i ; c >= f ; c -= p){
                res.innerHTML += ` ${c} \u{1F449}`
                // Contagem Decrescente
            }
            res.innerHTML += `\u{1f3c1}`
        }
    }
}