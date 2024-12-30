async function buscarEndereco(cep) {
    var mensagemErro = document.getElementById('erro');
    mensagemErro.innerHTML ="";

    try {
        var consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        var consultaCepConvertida = await consultaCep.json();

        if (consultaCepConvertida.erro) {
            throw Error('CEP não existente!');
        }
        var cidade = document.getElementById('cidade');
        var logradouro = document.getElementById('endereco');
        var estado = document.getElementById('estado');

        cidade.value = consultaCepConvertida.localidade;
        logradouro.value = consultaCepConvertida.logradouro;
        estado.value = consultaCepConvertida.uf;

        console.log(consultaCepConvertida);
        return consultaCepConvertida;
    } catch (erro) {
        mensagemErro.innerHTML = `<p>Cep invalido.  Tente novamente!</p>`
        console.log(erro);
    } finally {
        console.log('Processamento concluído!');
    }
}

var cep = document.getElementById('cep');
cep.addEventListener('focusout', () => buscarEndereco(cep.value))





