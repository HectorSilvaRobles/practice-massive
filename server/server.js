require('dotenv').config()
const express = require('express')
const massive = require('massive')
const app = express()
app.use(express.json())

const {PORT, CONNECTION_STRING} = process.env
const {get_products, add_product, delete_product, update_price, update_product_image} = require('./controller')

massive(CONNECTION_STRING)
.then(dbInstance => {
    console.log('setting connection to Data Base')
    app.set('db', dbInstance)
})
.catch(err => console.log('oops it failed to connect'))

app.get('/api/products', get_products)
app.post('/api/product', add_product)
app.delete('/api/product/:name', delete_product)
app.put('/api/product/:name', update_price)

app.listen(PORT, () => console.log(`server listening on port ${PORT}`))

