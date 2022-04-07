function buscarItensNota() {
    const numeroNota = $('#numero_nf').val()
    $('#btn_buscar_itens_nota').text('Buscando...')
    document.querySelector('#btn_buscar_itens_nota').disabled = true

    setTimeout(() => {
        limparDadosNF()
        const ds = DatasetFactory.getDataset(
            'ds_ItensRMA', [numeroNota], null, null
        )
        $('#btn_buscar_itens_nota').text('Buscar')
        document.querySelector('#btn_buscar_itens_nota').disabled = false
        preencherDadosNF(ds)
    }, 400)
}

function preencherDadosNF(ds) {
    let arrayDadosAutocomplete = []
    if (ds.values.length <= 0) {
        FLUIGC.toast({
            title: 'Atenção: ',
            message: 'Nenhum dado retornado para a <b>numeração de NF informada</b>!',
            type: 'warning',
            timeout: 70000
        })
    } else {
        $('#filtro_itens').show()
        $('#codigo_cliente').val(ds.values[0]['cod-cliente'])
        $('#nome_cliente').val(ds.values[0]['nome-cliente'])

        for (const itemNf of ds.values) {
            const index = wdkAddChild('tb_itens_nota')
            arrayDadosAutocomplete.push(itemNf['nr-serie'])
            $('#tb_item___' + index).val(itemNf['item'])
            $('#tb_serie___' + index).val(itemNf['nr-serie'])
            $('#tb_origem___' + index).val(itemNf['origem'])
            $('#tb_garantia___' + index).val(itemNf['controle'])
            $('#tb_entrada___' + index).val(itemNf['dt-entrada'])
        }
        classificarItensSolicitacao()
    }

    FLUIGC.autocomplete('#filtro_numeros_serie', {
        source: substringMatcher(arrayDadosAutocomplete),
        name: 'filtro_numeros_serie',
        displayKey: 'description',
        tagClass: 'tag-gray',
        type: 'tagAutocomplete'
    })
}

function limparDadosNF() {
    $('#filtro_itens').hide()
    $('#codigo_cliente').val('')
    $('#nome_cliente').val('')
    const arrayBtnExcluir = $('#tb_itens_nota .fluigicon-trash').slice(1)
    for (const btnExcluir of arrayBtnExcluir) {
        $(btnExcluir).trigger('click')
    }
}

function substringMatcher(strs) {
    return function findMatches(q, cb) {
        var matches, substrRegex

        matches = []

        substrRegex = new RegExp(q, 'i')

        $.each(strs, function (i, str) {
            if (substrRegex.test(str)) {
                matches.push({
                    description: str
                })
            }
        })
        cb(matches)
    }
}

function filtrarItensNota() {
    const numeroSerieItensSelecionados =
        $('#filtro_numeros_serie').val()
    if (numeroSerieItensSelecionados == '') {

        FLUIGC.toast({
            title: 'Atenção: ',
            message: 'Selecione no mínimo <b>um número de série</b>!',
            type: 'warning',
            timeout: 70000
        })
    } else {
        const itensTbPaiFilho = $('.tb_itens_nota_serie').slice(1)
        for (const itemTb of itensTbPaiFilho) {
            if (numeroSerieItensSelecionados.includes(itemTb.value) == false) {
                const tmpLinha = itemTb.parentElement.parentElement
                $(tmpLinha.getElementsByClassName('fluigicon-trash'))
                    .trigger('click')
            }
        }
        classificarItensSolicitacao()
    }
}

function classificarItensSolicitacao() {
    $('#item_nacional').val('false')
    $('#item_importado').val('false')
    $('#item_garantia').val('false')
    $('#item_fora_garantia').val('false')

    const itensTbPaiFilhoOrigem = $('.tb_itens_nota_origem').slice(1)
    const itensTbPaiFilhoGarantia = $('.tb_itens_nota_garantia').slice(1)

    for (const item of itensTbPaiFilhoOrigem) {
        if (item.value == 'Nacional') {
            $('#item_nacional').val('true')
        } else if (item.value == 'Importado') {
            $('#item_importado').val('true')
        }
    }

    for (const item of itensTbPaiFilhoGarantia) {
        if (item.value == 'Garantia de Venda') {
            $('#item_garantia').val('true')
        } else if (item.value == 'Fora da Garantia') {
            $('#item_fora_garantia').val('true')
        }
    }
}