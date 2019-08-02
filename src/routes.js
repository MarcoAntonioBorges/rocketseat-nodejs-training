const express = require('express');
const routes = express.Router();

const ProductController = require('./controllers/ProductController');

// Rota
// routes.get('/products', (req, res) => {
//   // Product.create({ title: 'react', description: 'desc', url: 'https://google.com.br' });

//   return res.send('Hello World');
// });

routes.get('/products', ProductController.index);
routes.get('/products/:id', ProductController.show);
routes.post('/products', ProductController.store);
routes.put('/products/:id', ProductController.update);
routes.delete('/products/:id', ProductController.destroy);

module.exports = routes;