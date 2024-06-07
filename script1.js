const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.post('/submit-order', (req, res) => {
    const { itemName, itemPrice, customerName, customerEmail, customerPhone, quantity, customerAddress } = req.body;

    // Create transporter object using SMTP transport
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'agganyana3@gmail.com', // replace with your email
            pass: 'agga003032'  // replace with your email password
        }
    });

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
        `
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send('Error sending email: ' + error);
        }
        res.send('Order submitted successfully');
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
