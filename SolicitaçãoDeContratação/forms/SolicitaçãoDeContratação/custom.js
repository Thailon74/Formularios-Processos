$('.moeda').mask('#.##0.000.000,00', { reverse: true })
$('#externo').attr('readonly', true);
$('#indicacao').attr('readonly', true);
$('#substituicao').attr('readonly', true);

function liberarCampoRecrut(){

    if ($('#radio_externo').prop( "checked" ) == true) {
        $('#externo').attr('readonly', false);
        $('#indicacao').attr('readonly', true);
    } else if($('#radio_indicacao').prop( "checked" ) == true){
        $('#indicacao').attr('readonly', false);
        $('#externo').attr('readonly', true);
    }else{
        $('#externo').attr('readonly', true);
        $('#indicacao').attr('readonly', true);
    }
}

function liberarCampoTipoVaga(){

    if ($('#radio_substituicao').prop( "checked" ) == true) {
        $('#substituicao').attr('readonly', false);
    }else{
        $('#substituicao').attr('readonly', true);
    }
}