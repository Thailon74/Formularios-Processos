const ATIVIDADE_ATUAL = $('#atividade_atual').val()
const ATIVIDADE_INICIO = '0'
const ATIVIDADE_INICIO_SALVA = '5'

preencherCamposAutomaticos()

/*
function calcularMediaIdade() {
    let camposIdades = $('.classe_idade').slice(1)
    let totalizador = 0
    let totalLinhas = camposIdades.length

    if (totalLinhas > 0) {
        for (const campoIdade of camposIdades) {
            let tmpIdade = parseInt(campoIdade.value)
            totalizador += tmpIdade
        }

        let mediaIdade = (totalizador / totalLinhas)
        if (isNaN(mediaIdade) == true) {
            toast('É necessário informar valores válidos para o cálculo!', 'danger', 7)
        } else {
            toast('A média de idades é igual a ' + mediaIdade, 'info', 7)
            // $('#id_do_campo').val(mediaIdade)
        }
    } else {
        toast('Para calcular a <strong>média de idade</strong> ' +
            'é necessário incluir pelo menos uma linha!', 'danger', 7)
    }
}
*/

function preencherCamposAutomaticos() {
    $('#btn_add_contato').hide()

    if (ATIVIDADE_ATUAL == ATIVIDADE_INICIO || ATIVIDADE_ATUAL == ATIVIDADE_INICIO_SALVA) {
        $('#btn_add_contato').show()

        $('#estado').prepend('<option value="">Selecione...</option>')
        $('#estado').val('')
    }

    if (ATIVIDADE_ATUAL != ATIVIDADE_INICIO) { return }

    $('#numero_solicitacao').val('Gerado depois da Atividade Inicial')

    $('#data_abertura').val(moment().format('DD/MM/YYYY'))
    $('#data_abertura_aux').val(moment().format('YYYY-MM-DD'))

    $('#solicitante').val(parent.WCMAPI.user)
    $('#id_solicitante').val(parent.WCMAPI.userCode)
}

function beforeSendValidateAux(numState, nextState) {
    if (numState != ATIVIDADE_INICIO && numState != ATIVIDADE_INICIO_SALVA) {
        return true
    }

    let inputsNome = $('.cl_nome').slice(1)
    let inputsFone = $('.cl_fone').slice(1)
    let inputsEmail = $('.cl_email').slice(1)
    let mensagemErro = 'Preencha os campos abaixo:\n'
    let erro = false

    if (inputsNome.length == 0) {
        throw 'É necesssário <b>incluir pelo menos um ' +
        'contato</b> na <b>tabela de contatos</b>!'
    }

    for (let i = 0; i < inputsNome.length; i++) {
        const tmpNome = inputsNome[i].value
        const tmpFone = inputsFone[i].value
        const tmpMail = inputsEmail[i].value
        let linha = (i + 1)

        if (tmpNome.trim() == '') {
            mensagemErro += '\n- <b>Nome</b> na linha (<b>' + (linha) + '</b>)'
            erro = true
        }

        if (tmpFone.trim() == '') {
            mensagemErro += '\n- <b>Telefone</b> na linha (<b>' + (linha) + '</b>)'
            erro = true
        }

        if (tmpMail.trim() == '') {
            mensagemErro += '\n- <b>E-mail</b> na linha (<b>' + (linha) + '</b>)'
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