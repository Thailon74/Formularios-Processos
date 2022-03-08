function setSelectedZoomItem(selectedItem) {
    if (selectedItem.inputName == 'responsavel_cadastro') {
        $('#id_responsavel_cadastro').val(selectedItem.colleagueId)
    }
}

function removedZoomItem(removedItem) {
    if (removedItem.inputName == 'responsavel_cadastro') {
        $('#id_responsavel_cadastro').val('')
    }
}