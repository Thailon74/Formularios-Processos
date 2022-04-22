function displayFields(form, customHTML) { 
    var atividadeAtual = getValue('WKNumState')
    form.setValue('atividade_atual', atividadeAtual)

    form.setEnabled('aprovador', false)
    form.setEnabled('tituloSA', false)
    form.setEnabled('teste_ds_itens', false)
    form.setEnabled('descAlteracao', false)
    form.setEnabled('text_justificat', false)
    form.setEnabled('text_com_aprov',false)
    form.setEnabled('text_com_exec',false)
    form.setEnabled('radio_par_aprov',false)
    form.setEnabled('radio_par_exec',false)
    form.setEnabled('checkbox30',false)
    form.setEnabled('checkbox31',false)
    form.setEnabled('checkbox32',false)
    form.setEnabled('checkbox33',false)
    form.setEnabled('checkbox34',false)
    form.setEnabled('checkbox35',false)
    form.setEnabled('checkbox36',false)
    form.setEnabled('checkbox50',false)
    form.setEnabled('checkbox51',false)
    form.setEnabled('checkbox52',false)
    form.setEnabled('checkbox53',false)
    form.setEnabled('checkbox54',false)
    form.setEnabled('checkbox55',false)

    if (atividadeAtual == '19' || atividadeAtual == '1' || atividadeAtual == '0') { //começo
    form.setEnabled('aprovador',true)
    form.setEnabled('tituloSA', true)
    form.setEnabled('teste_ds_itens', true)
    form.setEnabled('descAlteracao', true)
    form.setEnabled('text_justificat', true)
    form.setEnabled('checkbox30',true)
    form.setEnabled('checkbox31',true)
    form.setEnabled('checkbox32',true)
    form.setEnabled('checkbox33',true)
    form.setEnabled('checkbox34',true)
    form.setEnabled('checkbox35',true)
    form.setEnabled('checkbox36',true)
    form.setEnabled('checkbox50',true)
    form.setEnabled('checkbox51',true)
    form.setEnabled('checkbox52',true)
    form.setEnabled('checkbox53',true)
    form.setEnabled('checkbox54',true)
    form.setEnabled('checkbox55',true)
 
    }
    
    if (atividadeAtual == '5') { //aprovador
        
        form.setEnabled('text_com_aprov',true)
        form.setEnabled('radio_par_aprov',true)

    }
    if (atividadeAtual == '10') { //executor

        form.setEnabled('text_com_exec',true)
        form.setEnabled('radio_par_exec',true)

    }
}