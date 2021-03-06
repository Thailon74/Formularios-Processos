function createDataset(fields, constraints, sortFields) {

    var dataset = DatasetBuilder.newDataset()
    dataset.addColumn('Centro de Custo')

    var clientService = fluigAPI.getAuthorizeClientService()
    var data = { 
        companyId: String(getValue('WKCompany')),
        serviceCode: 'API Centro de Custo',
        endpoint: 'getcentrocusto',
        method: 'GET',
        timeoutService: '9000',
        options:{
            useSSL: false
        }
    }
    
    var resultado = clientService.invoke(JSON.stringify(data))
    var resultadoObj = JSON.parse(resultado.getResult())

    for(var i = 0; i <resultadoObj.items.length;i++){
        dataset.addRow([

            resultadoObj.items[i]['CentroCusto']
        ])
    }

    return dataset
}