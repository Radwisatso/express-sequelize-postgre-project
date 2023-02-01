const express = require('express')
const app = express()
const PORT = 3000
const router = require('./routers/index')

app.set('view engine', 'ejs');

app.use(router)

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})
