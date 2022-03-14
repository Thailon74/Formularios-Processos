function createDataset(fields, constraints, sortFields){

    var dataset = DatasetBuilder.newDataset()
   
    dataset.addColumn('item')

    var clientService = fluigAPI.getAuthorizeClientService()
    var data = { 
        companyId: String(getValue('WKCompany')),
        serviceCode: 'Api Itens',
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

            resultadoObj.items[i]['item'],
            
        ])
    }

    //dataset.addRow([resultado.getResult()])

    return dataset
}