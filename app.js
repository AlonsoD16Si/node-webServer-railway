const express = require('express')
const app = express()

const port = 8080;
app.get('/', function (req, res) {
    res.send('Pagina de inicio')
})
app.get('/hola-mundo', function (req, res) {
    res.send('Hola mundo en su ruta')
})
app.get('*', function (req, res) {
    res.send('404 | Page not found')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})