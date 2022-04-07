var index = 0;

trocarMoeda();

function calcularTotal(){
    let unidade = $('#quantidade___' + index).val();
    let valorUnit =  $('#custo_unit___' + index).val();
    let totalizador = 0;

    valorUnit = valorUnit.replaceAll(".", "")
    valorUnit = valorUnit.replaceAll(",", ".")

    unidade=parseFloat(unidade)
    valorUnit=parseFloat(valorUnit)

    totalizador = unidade * valorUnit

    totalizador=parseFloat(totalizador)
    let formatado = totalizador.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    formatado = formatado.replace("R","")
    formatado = formatado.replace("$","")
    $('#custo_total___' + index).val(formatado)
    //$('.moeda2').mask('#.##0.000.000.000.000,00', { reverse: true })
    calcularPedido()
}
function calcularPedido(){

    let camposValores = $('.cl_custo_total').slice(1);
    let totalizador = 0;

    for (let i = 0; i < camposValores.length; i++){
        let tmpValor = camposValores[i].value
        console.log("teste2",tmpValor)
        tmpValor = tmpValor.replace(".", "")
        tmpValor = tmpValor.replace(",", ".")
        tmpValor = parseFloat(tmpValor)
        console.log("teste2",tmpValor)
        totalizador += tmpValor 
    }


    let formatado = totalizador.toLocaleString('pt-BR');
    $('#custo_pedido').val(formatado)
}

function addLinhaPaiFilho() {
    index = wdkAddChild('tb_itens')
    $('.moeda').mask('#.##0.000.000,00', { reverse: true })
}

function fnCustomDelete(elemento) {

    fnWdkRemoveChild(elemento)
    calcularPedido()
}

function trocarMoeda(){

    var moeda = $('#moeda').val()
    $('.remover').hide();

    var textoAdicionar = '<span class="remover input-group-addon">'+ moeda + '</span>'

    $( ".add_moeda" ).append(textoAdicionar)
}