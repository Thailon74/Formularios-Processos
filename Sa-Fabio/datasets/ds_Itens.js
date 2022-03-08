function createDataset(fields, constraints, sortFields){

    var dataset = DatasetBuilder.newDataset()
   
    dataset.addColumn('it-codigo')
    dataset.addColumn('descricao')

    var clientService = fluigAPI.getAuthorizeClientService()
    var data = { 
        companyId: String(getValue('WKCompany')),
        serviceCode: 'Api itens',
        endpoint: 'getitem?ativo=yes',
        method: 'GET',
        timeoutService: '9000',
        options:{
            useSSL: false
        }
    }

    var resultado = clientService.invoke(JSON.stringify(data))
    var resultadoObj = JSON.parse(resultado.getResult())

    for(var i = 0;i<resultadoObj.items.length;i++){
        dataset.addRow([

            resultadoObj.items[i]['it-codigo'],
            resultadoObj.items[i]['descricao']
            
        ])
    }

    //dataset.addRow([resultado.getResult()])

    return dataset
}