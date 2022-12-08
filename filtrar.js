const filter = document.getElementById('filter')
filter.addEventListener('keyup' , () => {
    let expressao = filter.value;

    let linhas = tbody.getElementsByTagName('tr')

    console.log(linhas)
    for (let posicao in linhas) {
        if (true === isNaN(posicao)) {
            continue;
        }

        let conteudoDaLinha = linhas[posicao].innerHTML;
        if (true ===conteudoDaLinha.includes(expressao)){
            linhas[posicao].style.display = '';
        } else {
            linhas[posicao].style.display = 'none';
        }
    }
    
});