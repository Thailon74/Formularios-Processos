var mensagemErro = 'Preencha os campos abaixo para prosseguir:\n'
var erro = false

function validateForm(form) {

    var atividadeAtual = getValue('WKNumState')
    var prxAtividade = getValue('WKNextState')
    var fimAtividade = getValue('WKCompletTask')
    var formaPagamento = form.getValue('forma_pagamento')

    if ((fimAtividade == 'false') || (atividadeAtual == prxAtividade)) {
        return
    }

    if (atividadeAtual == '1' || atividadeAtual == '5') { // start
        validarCampo('setor_emitente', 'Setor')
        validarCampo('cnpj', 'Cnpj')
        validarCampo('empresa', 'Empresa')
        validarCampo('dt_venc', 'Data do Vencimento')
        validarCampo('dt_emissao', 'Data da Emissão')
        validarCampo('descricao', 'Descrição')
        validarCampo('forma_pagamento', 'Forma de Pagamento')

        if (formaPagamento == '3'){
            validarCampo('banco','Banco')
            validarCampo('agencia','Agência')
            validarCampo('conta_corrente','Conta Corrente')
        }
    }

    if (atividadeAtual == '21') { //aprovação
        validarCampo('aprov', 'Aprovação')

    }

    if (erro == true) {
        throw(mensagemErro)
    }


function validarCampo(campo, labelCampo) {
    if (form.getValue(campo) == null || form.getValue(campo) == '') {
        mensagemErro += '\n- ' + labelCampo
        erro = true
    }
}
}

