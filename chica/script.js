function verificar() {
    var nome = window.document.getElementById('nome').value 
    var res = window.document.getElementById('resultado')


    if (nome == '') {
        res.style.display = 'block'
        res.innerHTML = `Por favor digite algo!`
        
    } else if (nome == 'chica' || nome =='CHICA' || nome == 'Chica' || nome == 'Chiquinha' || nome == 'CHIQUINHA' || nome == 'chika' || nome == 'Chika' || nome == 'CHIKA') {
        res.style.display = 'block'
        res.innerHTML = `<span style="color: rgb(30, 255, 0);">Parabéns você acertou!</span>`
    } else {
        res.style.display = 'block'
        res.innerHTML = `Eu não me chamo <span style="color: red;">"${nome}"</span>`
    }


}
