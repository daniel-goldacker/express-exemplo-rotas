const express = require('express'); 
const app = express(); 


app.get("/",function(request, response){
    response.send('Bem Vindo!');
});


app.get("/blog/:artigo?",function(request, response){
    var artigo = request.params.artigo;
    if (artigo){
        response.send('Bem Vindo ao Blog ' + artigo + '!');
    }else{
        response.send('Bem Vindo ao Blog!');
    }
})


app.get("/teste",function(request, response){
    response.send('Bem Vindo ao Teste!');
})


app.get("/ola/:nome/:empresa",function(request, response){
    response.send('Olá, ' + request.params.nome + ' da ' + request.params.empresa);
})

app.get("/canal/youtube",function(request, response){
    
    var canal = ' canal ';

    if (request.query['canal']){
        canal = request.query['canal'];        
    }

    response.send('Bem vindo ao meu ' + canal + '!');

})



app.listen(4000, function(error){
    if (error){
        console.log('Ocorreu um erro!');
    } else {
        console.log('Servidor iniciado com sucesso!');
    }
});