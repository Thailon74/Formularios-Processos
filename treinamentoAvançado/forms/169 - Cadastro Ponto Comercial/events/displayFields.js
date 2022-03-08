function displayFields(form, customHTML) {
    var atividadeAtual = getValue('WKNumState')

    form.setValue('atividade_atual', atividadeAtual)
    form.setValue('validar_form', 'false')

    form.setEnabled('razao_social', false)
    form.setEnabled('nome_fantasia', false)
    form.setEnabled('cnpj', false)
    form.setEnabled('home_page', false)
    form.setEnabled('cep', false)
    form.setEnabled('estado', false)
    form.setEnabled('cidade', false)
    form.setEnabled('bairro', false)
    form.setEnabled('logradouro', false)
    form.setEnabled('numero', false)
    form.setEnabled('info_adicional', false)
    form.setEnabled('obs_visita_local', false)
    form.setEnabled('orc_material_divulgacao', false)
    form.setEnabled('orc_cerimonia', false)
    form.setEnabled('tipo_producao_material', false)
    form.setEnabled('orc_aprovado', false)
    form.setEnabled('obs_marketing', false)
    form.setEnabled('responsavel_cadastro', false)
    form.setEnabled('status_cadastro', false)
    form.setEnabled('obs_cadastro_ponto_comercial', false)

    if (atividadeAtual == '0' || atividadeAtual == '5') { // start
        form.setEnabled('razao_social', true)
        form.setEnabled('nome_fantasia', true)
        form.setEnabled('cnpj', true)
        form.setEnabled('home_page', true)
        form.setEnabled('cep', true)
        form.setEnabled('estado', true)
        form.setEnabled('cidade', true)
        form.setEnabled('bairro', true)
        form.setEnabled('logradouro', true)
        form.setEnabled('numero', true)
        form.setEnabled('info_adicional', true)
    } else {
        var indexes = form.getChildrenIndexes('tb_info_contato')
        for (var i = 0; i < indexes.length; i++) {
            form.setEnabled('tb_info_contato_nome___' + indexes[i], false)
            form.setEnabled('tb_info_contato_fone___' + indexes[i], false)
            form.setEnabled('tb_info_contato_email___' + indexes[i], false)
        }

        form.setHideDeleteButton(true)
    }

    if (atividadeAtual == '10') { // visita ao local
        form.setEnabled('obs_visita_local', true)
    }

    if (atividadeAtual == '12') { // fazer orcamento
        form.setEnabled('orc_material_divulgacao', true)
        form.setEnabled('orc_cerimonia', true)
        form.setEnabled('tipo_producao_material', true)
    }

    if (atividadeAtual == '12') { // analisar orcamento
        form.setEnabled('orc_aprovado', true)
    }

    if (atividadeAtual == '22' || atividadeAtual == '24') { // planejar inauguracao ou criar material divulgacao
        form.setEnabled('obs_marketing', true)
    }

    if (atividadeAtual == '26') { // cadastrar novo ponto comercial
        form.setEnabled('responsavel_cadastro', true)
        form.setEnabled('status_cadastro', true)
        form.setEnabled('obs_cadastro_ponto_comercial', true)
    }
}