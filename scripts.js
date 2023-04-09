function calcular(tipo, valor) {
    if (tipo === 'acao') {

        if (valor === 'c') {

            /* Adiciona o valor vazio ao campo para limpar os numeros digitados */
            document.querySelector('#resultado').value = ''

        }

        /* || Serve para caso algum dos valores dentro do if seja verdadeiro o if se torne verdadeiro */
        if (valor === '+' ||  valor === '-' || valor === '*' || valor === '/' || valor === '.') {

            document.querySelector('#resultado').value += valor

        }

        if (valor === '=') {

            /* Está salvando o valor do campo nessa variavel */
            /* Eval transforma o valor de string para um valor matematico valido  */
            var valorCampo = eval(document.querySelector('#resultado').value)

            /* Vai substituir o valor dentro do campo pelo resultado do calculo matematico  */
            document.querySelector('#resultado').value = valorCampo

        }

    } else if (tipo === 'valor') {

        /* Está salvando o valor do campo nessa variavel */
        var valorCampo = document.querySelector('#resultado').value

        /* Está pegando o valor salvo e adicionando novos valores clicados */
        document.querySelector('#resultado').value = valorCampo + valor

    }

}