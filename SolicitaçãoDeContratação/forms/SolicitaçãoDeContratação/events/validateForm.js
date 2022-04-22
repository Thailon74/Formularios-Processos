var mensagemErro = 'Preencha os campos abaixo para prosseguir:\n'
var erro = false
/*var radio_estagio = $('#radio_estagio').is(':checked')
var radio_temporario = $('#radio_temporario').is(':checked')
var radio_efetivo = $('#radio_efetivo').is(':checked')
var radio_diarista = $('#radio_diarista').is(':checked')*/


function validateForm(form) {

    var atividadeAtual = getValue('WKNumState')
    var prxAtividade = getValue('WKNextState')
    var fimAtividade = getValue('WKCompletTask')

    if ((fimAtividade == 'false') || (atividadeAtual == prxAtividade)) {
        return
    }

    if (atividadeAtual == '4' || atividadeAtual == '1' || atividadeAtual == '5') { // start
        validarCampo('nome_candidato', 'Nome do Candidato')
        validarCampo('data_inicio', 'Data de inicio')
        validarCampo('setor_solicitante', 'Setor/Nome do solicitante')
        validarCampo('setor', 'Setor')
        validarCampo('cargo_funcao', 'Cargo/Função')
        validarCampo('salario', 'Salário')
        validarCampo('motivo_contrat', 'Motivo da contratação')

        /*if(radio_estagio == false && radio_temporario == false && radio_efetivo == false && radio_diarista == false ){
            erro = true
            mensagemErro += '\n- Selecione algun vínculo' 
        }*/

    }

    if (atividadeAtual == '11') { //aprovação1
        validarCampo('aprovacao1', 'Aprovação')
    }

    if (atividadeAtual == '12'){ //aprovacao2
        validarCampo('aprovacao2','Aprovação')
    }

    if (atividadeAtual == '13'){ //aprovacao3
        validarCampo('aprovacao3','Aprovação')
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

