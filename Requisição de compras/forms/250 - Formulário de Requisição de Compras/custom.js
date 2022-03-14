
function addChild(){
    var row = wdkAddChild('tb_itens'); //Adicionar filhos
 
    MaskEvent.init(); //Atualiza os campos com 'mask'
}
var controle = 1;
function calcularTotal(){

    let cl_unidades = $('.cl_quantidade').slice(controle);
    let cl_valorUnit = $('.cl_custo_unit').slice(controle);
    let cl_custoTotal = $('.cl_custo_total').slice(controle);
    let totalizador = 0;
    const index = wdkAddChild('tb_itens')

    for (let i = 0; i < cl_unidades.length; i++){
        let tmpValor = parseFloat(cl_valorUnit[i].value.replace(",","."))
        let tmpUnit = parseFloat(cl_unidades[i].value)

        totalizador = tmpUnit * tmpValor 
    }
    controle++;
    $('#custo_total___' + index).val(totalizador)
}
function cancularPedido(){

    let camposValores = $('.cl_custo_total').slice(1);
    let totalizador = 0;

    for (let i = 0; i < camposValores.length; i++){
        let tmpValor = parseFloat(camposValores[i].value.replace(",","."))
        totalizador += tmpValor  
    }

    $('#custo_pedido_total').val(totalizador)
}