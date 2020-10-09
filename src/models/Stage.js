var stages = {
    0: {
        descricao: "Bem-vindo",
        obj: require('../controllers/welcome')
    },
    1: {
        descricao: "Selecionar opção",
        obj: require('../controllers/selecOption')
    },
    2: {
        descricao: "Selecionar pedido",
        obj: require('../controllers/selecOrder')
    },
    3: {
        descricao: "Endereço",
        obj: require('../controllers/address')
    },
    4: {
        descricao: "Pagamento",
        obj: require('../controllers/payment')
    },
    5: {
        descricao: "Comprovante",
        obj: require('../controllers/receipt')
    },

    // Defining
    'defineName':{
        descricao: "Definindo nome do cliente",
        obj: require('../controllers/defining/defineName')
    },
    'defineStreet':{
        descricao: "Definindo nome da rua do cliente",
        obj: require('../controllers/defining/defineStreet')
    },
    'defineCEP':{
        descricao: "Definindo o CEP do cliente",
        obj: require('../controllers/defining/defineCEP')
    },
    'defineNumber':{
        descricao: "Definindo o numero da casa do cliente",
        obj: require('../controllers/defining/defineNumber')
    },
    'defineDistrict':{
        descricao: "Definindo o bairro da casa do cliente",
        obj: require('../controllers/defining/defineDistrict')
    },
    'defineChange':{
        descricao: "Definindo o troco do cliente",
        obj: require('../controllers/defining/defineChange')
    },
    
    
    

};

exports.step = stages;