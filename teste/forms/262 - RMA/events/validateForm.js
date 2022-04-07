function validateForm(form) {
    var atividadeAtual = getValue('WKNumState').toString()
    var mensagemErro = 'É necessário preencher os campos abaixo para prosseguir:\n'
    var erro = false

    // start
    if (atividadeAtual == '' || atividadeAtual == '0' || atividadeAtual == '4') {
        if (form.getValue('numero_nf') == '' || form.getValue('numero_nf') == null) {
            mensagemErro += '\n- Número da NF'
            erro = true
        }
    }

    if (erro == true) {
        throw mensagemErro
    }
}