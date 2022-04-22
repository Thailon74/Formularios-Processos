function displayFields(form, customHTML) { 
    var atividadeAtual = getValue('WKNumState')

    /*form.setValue('atividade_atual', atividadeAtual)
    form.setValue('validar_form', 'false')*/


    form.setEnabled('nome_candidato',false)
    form.setEnabled('data_inicio',false)
    form.setEnabled('setor_solicitante',false)
    form.setEnabled('setor',false)
    form.setEnabled('cargo_funcao',false)
    form.setEnabled('salario',false)
    form.setEnabled('motivo_contrat',false)
    form.setEnabled('radio_estagio',false)
    form.setEnabled('radio_temporario',false)
    form.setEnabled('radio_efetivo',false)
    form.setEnabled('radio_diarista',false)
    form.setEnabled('radio_interno',false)
    form.setEnabled('radio_externo',false)
    form.setEnabled('externo',false)
    form.setEnabled('radio_indicacao',false)
    form.setEnabled('indicacao',false)
    form.setEnabled('radio_novavaga',false)
    form.setEnabled('radio_substituicao',false)
    form.setEnabled('substituicao',false)
    form.setEnabled('observ_geral',false)
    form.setEnabled('radio_anuncio',false)
    form.setEnabled('radio_redacao',false)
    form.setEnabled('radio_quest',false)
    form.setEnabled('radio_entrevista',false)
    form.setEnabled('radio_teste_pisc',false)
    form.setEnabled('radio_hsit_escol',false)
    form.setEnabled('radio_video',false)
    form.setEnabled('aprovacao1',false)
    form.setEnabled('obs_aprov1',false)
    form.setEnabled('aprovacao2',false)
    form.setEnabled('obs_aprov2',false)
    form.setEnabled('aprovacao3',false)
    form.setEnabled('obs_aprov3',false)

    if (atividadeAtual == '4' || atividadeAtual == '5' ||atividadeAtual == '0') { //começo
        form.setEnabled('nome_candidato',true)
        form.setEnabled('data_inicio',true)
        form.setEnabled('setor_solicitante',true)
        form.setEnabled('setor',true)
        form.setEnabled('cargo_funcao',true)
        form.setEnabled('salario',true)
        form.setEnabled('motivo_contrat',true)
        form.setEnabled('radio_estagio',true)
        form.setEnabled('radio_temporario',true)
        form.setEnabled('radio_efetivo',true)
        form.setEnabled('radio_diarista',true)
        form.setEnabled('radio_interno',true)
        form.setEnabled('radio_externo',true)
        form.setEnabled('externo',true)
        form.setEnabled('radio_indicacao',true)
        form.setEnabled('indicacao',true)
        form.setEnabled('radio_novavaga',true)
        form.setEnabled('radio_substituicao',true)
        form.setEnabled('substituicao',true)
        form.setEnabled('observ_geral',true)
        form.setEnabled('radio_anuncio',true)
        form.setEnabled('radio_redacao',true)
        form.setEnabled('radio_quest',true)
        form.setEnabled('radio_entrevista',true)
        form.setEnabled('radio_teste_pisc',true)
        form.setEnabled('radio_hsit_escol',true)
        form.setEnabled('radio_video',true)
        
    }
    
    if (atividadeAtual == '11') { //aprovação1
        form.setEnabled('aprovacao1',true)
        form.setEnabled('obs_aprov1',true)
    }

    if (atividadeAtual == '12'){ //aprovacao2
        form.setEnabled('aprovacao2',true)
        form.setEnabled('obs_aprov2',true)
    }

    if (atividadeAtual == '13'){ //aprovacao3
        form.setEnabled('aprovacao3',true)
        form.setEnabled('obs_aprov3',true)
    }

}