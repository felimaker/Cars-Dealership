const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

const prices = {
    1: [{dealer: "AutoMundo", price: 15000}, {dealer: "Motores Rápidos", price: 14800}],
    2: [{dealer: "AutoMundo", price: 32000}, {dealer: "Motores Rápidos", price: 31500}]
};

app.get('/prices/:productId', (req, res) => {
    res.json(prices[req.params.productId] || []);
});

app.listen(8080, () => console.log('Server running on port 8080'));