var beforeSendValidate = function(numState,nextState){
    var mensagemErro = 'Preencha os campos abaixo para prosseguir:\n'
    var erro = false

        var atividadeAtual = numState
        var prxAtividade = nextState
        /*var fimAtividade = getValue('WKCompletTask')*/
        var validado30 = $("#checkbox30").is(':checked');
        var validado31 = $("#checkbox31").is(':checked');
        var validado32 = $("#checkbox32").is(':checked');
        var validado33 = $("#checkbox33").is(':checked');
        var validado34 = $("#checkbox34").is(':checked');
        var validado35 = $("#checkbox35").is(':checked');
        var validado36 = $("#checkbox36").is(':checked');


        /*if ((fimAtividade == 'false') || (atividadeAtual == prxAtividade)) {
            return
        }*/

        if (atividadeAtual == '1' || atividadeAtual == '0' || atividadeAtual == '19') { // start
            if(validado30 == 'false' && validado31 == 'false' && validado32 == 'false' && validado33 == 'false' && validado34 == 'false' && validado35 == 'false' && validado36 == 'false'){
                mensagemErro = "Preencha pelo menos 1 motivo;"
                erro = true
            }

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