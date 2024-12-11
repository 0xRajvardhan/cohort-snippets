const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('First ever server I created !')
})

//middlewares
app.use(bodyParser.json());

app.post('/conversations', (req, res) => {
    console.log("Auth code" + req.headers["authorization"])
    console.log(req.body)
    res.send({
        msg: 'First ever server I created !'
    })
})

app.listen(port, () => {
    console.log(`Our app is listening on port ${port}`)
})