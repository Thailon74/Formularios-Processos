const ATIVIDADE_ATUAL = $('#atividade_atual').val()
const ATIVIDADE_INICIO = '1'
const ATIVIDADE_INICIO_SALVA = '5'

removerBotoes()
aperecerContaAgencia()

function calcularTotal() {
    let camposValores = $('.cl_valor').slice(1);
    let totalizador = 0;

    for (let i = 0; i < camposValores.length; i++) {
        let tmpValor = camposValores[i].value
        tmpValor = tmpValor.replaceAll(".", "")
        tmpValor = tmpValor.replaceAll(",", ".")
        tmpValor = parseFloat(tmpValor)
        totalizador += tmpValor
    }

    console.log('totalizador', totalizador)

    let formatado = totalizador.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    console.log('formatado', formatado)

    $('#valor_total').val(formatado)
}

function fnCustomDelete(elemento) {

    fnWdkRemoveChild(elemento)
    calcularTotal()
}

function removerBotoes() {

    var atividadeAtual = $('#atividade_atual').val();

    if (atividadeAtual == '0' || atividadeAtual == '5') {

        $('#bt_nv_registro').show()

    } else {

        $('#bt_nv_registro').hide()

    }
}

function beforeSendValidateAux(numState, nextState) {
    if (numState != ATIVIDADE_INICIO && numState != ATIVIDADE_INICIO_SALVA) {
        return true
    }

    let inputsCC = $('.cl_cc').slice(1)
    let inputsConta = $('.cl_conta').slice(1)
    let inputsValor = $('.cl_valor').slice(1)
    let mensagemErro = 'Preencha os campos abaixo:\n'
    let erro = false

    if (inputsValor.length == 0) {
        throw 'É necesssário <b>incluir pelo menos um ' +
        'Registro</b> na <b>tabela de Registros</b>!'
    }

    for (let i = 0; i < inputsCC.length; i++) {
        const tmpCC = inputsCC[i].value
        const tmpConta = inputsConta[i].value
        const tmpValor = inputsValor[i].value
        let linha = (i + 1)

        if (tmpCC.trim() == '') {
            mensagemErro += '\n- <b>Centro de Custo</b> na linha (<b>' + (linha) + '</b>)'
            erro = true
        }

        if (tmpConta.trim() == '') {
            mensagemErro += '\n- <b>Conta contabil</b> na linha (<b>' + (linha) + '</b>)'
            erro = true
        }

        if (tmpValor.trim() == '') {
            mensagemErro += '\n- <b>Valor</b> na linha (<b>' + (linha) + '</b>)'
            erro = true
        }
    }

    if (erro == true) {
        throw mensagemErro
    }

    return true
}

function toast(mensagem, tipo, timeout) {
    FLUIGC.toast({
        title: 'Atenção: ',
        message: mensagem,
        type: tipo,
        timeout: timeout * 1000
    })
}

function aperecerContaAgencia(ocultar) {
    var formaPagamento = $('#forma_pagamento').val()
    var confirmacao = $('#agencia').val()

    if (formaPagamento == '3' && (confirmacao == null || confirmacao == '')) {
        $('.remover input').attr('readonly', false);
        $('.remover').show()
    } else {
        $('.remover input').attr('readonly', true);
        $('#banco').val('')
        $('#agencia').val('')
        $('#conta_corrente').val('')
        if (ocultar == true) {
            $('.remover').hide()
        }
    }
}

function addLinhaPaiFilho() {
    wdkAddChild('tabledetailname')
    $('.moeda').mask('#.##0.000.000.000,00', { reverse: true })
}
