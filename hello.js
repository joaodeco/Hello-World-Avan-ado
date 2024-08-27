const express = require ('express')
const app  = express()
const porta = 3000

app.get('/', (req, res) => {
    res.send('Hello World!!')
})

app.get('/pergunta', (req, res) => {
    res.send('How are you? ')
})

app.listen(porta, () => {
    console.log(`Example app listening on port ${porta}`)
})