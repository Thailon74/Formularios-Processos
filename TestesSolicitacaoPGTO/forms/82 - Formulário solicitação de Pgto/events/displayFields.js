function displayFields(form, customHTML) { 
    var atividadeAtual = getValue('WKNumState')

    form.setValue('atividade_atual', atividadeAtual)
    form.setValue('validar_form', 'false')

    form.setEnabled('setor_emitente', false)
    form.setEnabled('cnpj', false)
    form.setEnabled('empresa', false)
    form.setEnabled('dt_venc', false)
    form.setEnabled('dt_emissao', false)
    form.setEnabled('valor_total', false)
    form.setEnabled('descricao', false)
    form.setEnabled('forma_pagamento', false)
    form.setEnabled('aprov', false)
    //form.setEnabled('agencia', false)
    //form.setEnabled('conta_corrente', false)

    if (atividadeAtual == '0' || atividadeAtual == '5') { //começo

    form.setEnabled('setor_emitente',true)
    form.setEnabled('cnpj', true)
    form.setEnabled('empresa', true)
    form.setEnabled('dt_venc', true)
    form.setEnabled('dt_emissao', true)
    form.setEnabled('valor_total', true)
    form.setEnabled('descricao', true)
    form.setEnabled('forma_pagamento', true)

    }else{ 
        var indexes = form.getChildrenIndexes('tabledetailname')
            for (var i = 0; i < indexes.length; i++) {
                form.setEnabled('centro_custo___' + indexes[i], false)
                form.setEnabled('conta_contabil___' + indexes[i], false)
                form.setEnabled('valor___' + indexes[i], false)
            }
            form.setHideDeleteButton(true)
        }
    
    if (atividadeAtual == '21') { //aprovador

        form.setEnabled('aprov',true)
        
    }
}