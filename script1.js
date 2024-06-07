// Import required modules
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

// Initialize the express application
const app = express();
// Middleware for parsing form data
app.use(bodyParser.urlencoded({ extended: true }));
// Middleware to serve static files from the 'public' directory
app.use(express.static('public'));
// Route to handle order submission
app.post('/submit-order', (req, res) => {
    // Destructure the order details from the request body
    const { itemName, itemPrice, customerName, customerEmail, customerPhone, quantity, customerAddress } = req.body;

    // Create a transporter object using SMTP transport for sending emails
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'agganyana3@gmail.com', // replace with your email
            pass: 'agga003032'  // replace with your email password
        }
    });
    // Email options for the order notification
    const mailOptions = {
        from: customerEmail,
        to: 'owner-email@example.com', // replace with owner's email
        subject: 'New Order Received',
        text: `
            New order received:

            Item Name: ${itemName}
            Item Price: ${itemPrice}
            Customer Name: ${customerName}
            Customer Email: ${customerEmail}
            Customer Phone: ${customerPhone}
            Quantity: ${quantity}
            Customer Address: ${customerAddress}
        `// Email body containing order details
    };
    // Send the email with the order details
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            // Handle errors in email sending
            return res.status(500).send('Error sending email: ' + error);
        }
        // Send success response if email is sent successfully
        res.send('Order submitted successfully');
    });
});
// Set the port for the server to listen on
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
