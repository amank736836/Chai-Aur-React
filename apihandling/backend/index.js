import express from 'express';

const app = express();

app.get('/api/products', (req, res) => {
    const products = [
        {
            id : '1',
            name : 'table wooden',
            price : 200,
            image : 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        },
        {
            id : '2',
            name : 'table glass',
            price : 250,
            image : 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        },
        {
            id : '3',
            name : 'table plastic',
            price : 150,
            image : 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        },
        {
            id : '4',
            name : 'table metal',
            price : 300,
            image : 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        },
        {
            id : '5',
            name : 'table polyester',
            price : 150,
            image : 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        }
    ];

    // res.send(products);
    // res.json(products);

    if (req.query.search) {
        const filterProducts = products.filter(product =>
            // product.name.toLowerCase().includes(req.query.search.toLowerCase())
            product.name.includes(req.query.search)
        );
        return setTimeout(() => {
            res.send(filterProducts);
        }, 3000);
    }


    setTimeout(() => {
        res.send(products);
    }, 3000);

});

// http://localhost:3000/api/products?search=metal



const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
