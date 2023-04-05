const express = require('express')
const cors = require('cors');
const app = express();

const serverPort = 8080;

const routes = {
    products: {
        get: '/api/products'
    }
};

app.use(cors());

app.get(routes.products.get, function (req, res) {
    res.sendFile(__dirname + '/data/products.json');
});

app.use('*', function(req,res) {
    res.redirect(routes.products.get);
})

app.listen(serverPort);
console.log(`[products] API escutando na porta ${serverPort}.`)