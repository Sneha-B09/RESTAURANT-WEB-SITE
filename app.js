const express = require('express');
const path = require('path');

const app = express();
// Middleware to parse JSON
app.use(express.json());

// Route to handle order placement
app.post('/order', (req, res) => {
    console.log(req.body.message); // Logs "Order placed!" to the server
    res.json({ message: "Order has been successfully placed!" });
});


// Serve static files (like CSS) from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve the HTML file for the root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
 
