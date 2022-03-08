function createDataset(fields, constraints, sortFields) {

	var dataset = DatasetBuilder.newDataset()
    dataset.addColumn('Conta Contabil')

    var clientService = fluigAPI.getAuthorizeClientService()
    var data = { 
        companyId: String(getValue('WKCompany')),
        serviceCode: 'API Conta contábil',
        endpoint: 'getcontacontabil',
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

            resultadoObj.items[i]['ContaContabil']
        ])
    }

    return dataset
}