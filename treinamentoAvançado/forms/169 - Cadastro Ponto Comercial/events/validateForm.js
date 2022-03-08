var mensagemErro = 'Preencha os campos abaixo para prosseguir:\n'
var erro = false
var formGlobal = null

function validateForm(form) {
    formGlobal = form

    var atividadeAtual = getValue('WKNumState')
    var prxAtividade = getValue('WKNextState')
    var fimAtividade = getValue('WKCompletTask')

    if ((fimAtividade == 'false') || (atividadeAtual == prxAtividade)) {
        return
    }

    if (atividadeAtual == '0' || atividadeAtual == '5') { // start
        validarCampo('razao_social', 'Razão Social')
        validarCampo('nome_fantasia', 'Nome Fantasia')
        validarCampo('cnpj', 'CNPJ')
        validarCampo('home_page', 'Home Page')
        validarCampo('cep', 'CEP')
        validarCampo('estado', 'Estado')
        validarCampo('cidade', 'Cidade')
        validarCampo('bairro', 'Bairro')
        validarCampo('logradouro', 'Logradouro')
        validarCampo('numero', 'Número')
        validarCampo('info_adicional', 'Informações Adicionais')
    }

    if (atividadeAtual == '10') { // visita ao local
        validarCampo('obs_visita_local', 'Obs. Visita ao Local')
    }

    if (atividadeAtual == '12') { // fazer orcamento
        validarCampo('orc_material_divulgacao', 'Orçamento Material de Divulgação')
        validarCampo('orc_cerimonia', 'Orçamento Cerimônia')
        validarCampo('tipo_producao_material', 'Tipo de Produção do Material')
    }

    if (atividadeAtual == '14') { // analisar orcamento
        validarCampo('orc_aprovado', 'Orçamento Aprovado')
    }

    if (atividadeAtual == '22' || atividadeAtual == '24') { // planejar inauguracao ou criar material divulgacao
        validarCampo('obs_marketing', 'Obs. Marketing')
    }

    if (atividadeAtual == '26') { // cadastrar novo ponto comercial
        validarCampo('responsavel_cadastro', 'Responsável pelo Cadastro')
        validarCampo('status_cadastro', 'Status Cadastro')
        validarCampo('obs_cadastro_ponto_comercial', 'Obs. Cadastro do Ponto Comercial')
    }

    if (erro == true) {
        throw mensagemErro
    }
}

function validarCampo(campo, labelCampo) {
    if (formGlobal.getValue(campo) == null || formGlobal.getValue(campo) == '') {
        mensagemErro += '\n- ' + labelCampo
        erro = true
    }
}