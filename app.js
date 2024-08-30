const express = require('express');
const path = require('path');
const app = express();
const port = 8080;

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files (CSS, JavaScript, images)
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// Dummy cart data (you may use a more robust solution like a database in production)
let cartItems = [];
let cartTotal = 0;

// Function to calculate total
function updateCartTotal() {
    cartTotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
}

// Route for the home page
app.get('/', (req, res) => {
    const cartCount = cartItems.length;
    res.render('index', { cartCount });
});

// Route for the Paints category page
app.get('/paints', (req, res) => {
    const cartCount = cartItems.length;
    res.render('paints', { cartCount });
});

// Route for the Electrical category page
app.get('/electrical', (req, res) => {
    const cartCount = cartItems.length;
    res.render('electrical', { cartCount });
});

// Route for the Hardware category page
app.get('/hardware', (req, res) => {
    const cartCount = cartItems.length;
    res.render('hardware', { cartCount });
});

// Route for the Sanitary category page
app.get('/sanitary', (req, res) => {
    const cartCount = cartItems.length;
    res.render('sanitary', { cartCount });
});

// Route for the Plumbing category page
app.get('/plumbing', (req, res) => {
    const cartCount = cartItems.length;
    res.render('plumbing', { cartCount });
});

// Route for the Checkout page
app.get('/checkout', (req, res) => {
    updateCartTotal(); // Ensure cartTotal is updated
    const cartCount = cartItems.length; // Calculate cartCount
    res.render('checkout', { cartItems, cartTotal, cartCount }); // Pass cartCount to the template
});


// Route to handle adding items to the cart (example)
app.post('/add-to-cart', (req, res) => {
    const { name, quantity, price } = req.body;

    // Check if item is already in the cart
    const existingItem = cartItems.find(item => item.name === name);
    if (existingItem) {
        existingItem.quantity += parseInt(quantity, 10);
    } else {
        cartItems.push({ name, quantity: parseInt(quantity, 10), price: parseFloat(price) });
    }

    updateCartTotal(); // Update total after adding item
    res.redirect('index.ejs'); // Redirect to home or another page after adding to cart
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
