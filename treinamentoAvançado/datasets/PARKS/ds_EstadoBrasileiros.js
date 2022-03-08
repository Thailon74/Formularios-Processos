function createDataset(fields, constraints, sortFields) {
    var filtroSigla = ''
    if (constraints != null && constraints != undefined) {
        if (constraints.length > 0) {
            if (constraints[0].fieldName == 'Sigla') {
                filtroSigla = constraints[0].initialValue
            }
        }
    }
    
    var dataset = DatasetBuilder.newDataset()
    dataset.addColumn('Sigla')
    dataset.addColumn('Nome')

    var estados = [
        { sigla: 'AC', nome: 'Acre' },
        { sigla: 'AL', nome: 'Alagoas' },
        { sigla: 'AM', nome: 'Amazonas' },
        { sigla: 'CE', nome: 'Ceará' }
    ]

    for (var i = 0; i < estados.length; i++) {
        if ((filtroSigla != '' && filtroSigla == estados[i].sigla) || filtroSigla == '') {
            dataset.addRow([estados[i].sigla, estados[i].nome])
        }
    }

    return dataset
}