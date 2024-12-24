const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Middleware (to parse JSON request bodies)
app.use(express.json());

// Serve the HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// API Endpoints
app.get('/api/menu', (req, res) => {
  const menu = [
    { id: 1, name: 'Pizza', price: 10 },
    { id: 2, name: 'Burger', price: 5 },
    { id: 3, name: 'Pasta', price: 8 },
  ];
  res.json(menu);
});

app.post('/api/order', (req, res) => {
  const order = req.body;
  console.log('Received order:', order);

  const orderId = Date.now();
  const orderData = {
    id: orderId,
    ...order,
    status: 'Pending',
  };

  res.status(201).json({ message: 'Order placed successfully!', orderId });
});

app.get('/api/order/:orderId', (req, res) => {
  const orderId = req.params.orderId;

  const order = {
    id: orderId,
    name: 'John Doe',
    items: [{ id: 1, quantity: 2 }, { id: 3, quantity: 1 }],
    status: 'Delivered',
  };
  res.json(order);
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

