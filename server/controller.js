module.exports = {
    get_products: (req, res) => {
        const dbInstance = req.app.get('db')

        dbInstance.get.inventory()
        .then(products => res.status(200).send(products))
        .catch(err => {
            res.status(500).send('could not get products from database')
        })
    },

    add_product: (req, res) => {
        const dbInstance = req.app.get('db')
        const {name, price, img_url} = req.body

        console.log('this is req.body', [name, price, img_url])
        console.log('this is the name of product', name)
        console.log('this is the price of produce', price)

        dbInstance.post.create_product([name, price, img_url])
        .then(()=> res.status(200).send('Just added product to database'))
        .catch(err => {
            res.status(500).send('could not add products to database')
        })
    }, 

    delete_product: (req, res) => {
        const dbInstance = req.app.get('db')
        const {name} = req.params
        console.log(dbInstance.delete.delete_product())

        dbInstance.delete.delete_product(name)
        .then(()=> res.status(200))
        .catch(err => {
            res.status(500).send('could not delete product from database')
        })
    },

    update_price: (req, res) => {
        const dbInstance = req.app.get('db')
        const {name} = req.params
        console.log(name)
        console.log(req.query)

        dbInstance.update.update_price(name, req.query.price)
        .then(()=> res.status(200).send('Just updated product price'))
        .catch(err => {
            res.status(500).send('was not able to update price, sorry..')
        })
    }
}