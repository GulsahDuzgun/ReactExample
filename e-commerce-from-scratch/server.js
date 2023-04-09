const  express = require('express')
const app = express();
const port = 8080;
const cors = require("cors")

app.use(cors())
app.use(express.json());
//__filename dosya adına kadar gider __dirname ile bulunduğu klasöre ./ gider;
app.get("/", (req, res) => { // app API bir / get isteği geldiğinde response olarak döndürülen dosya yazılır.
    res.sendFile(__dirname + "/data/products.json")
})

app.listen(port)
