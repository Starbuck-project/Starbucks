// order comfirm
$(document).ready(function() {
    $(".order-btn").click(function() {
      var itemName = $(this).closest('.menu-item').find('h4').text();
      var itemPrice = $(this).closest('.menu-item').find('strong').text();
      alert("Confirm your order item. "+"You ordered : " + itemName + " for " + itemPrice + ".");
    });
  });


  document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get the values from the form fields
    const orderName = document.getElementById('itemName').value;
    const orderPrice = document.getElementById('itemPrice').value;
    const cusName = document.getElementById('customerName').value;
    const cusEmail = document.getElementById('customerEmail').value;
    const cusPhone = document.getElementById('customerPhone').value;
    const orderNumber = document.getElementById('quantity').value;
    const cusAddress = document.getElementById('customerAddress').value;
    
    // Save the values to localStorage
    localStorage.setItem('itemName', orderName);
    localStorage.setItem('itemPrice', orderPrice);
    localStorage.setItem('customerName', cusName);
    localStorage.setItem('customerEmail', cusEmail);
    localStorage.setItem('customerPhone', cusPhone);
    localStorage.setItem('quantity', orderNumber);
    localStorage.setItem('customerAddress', cusAddress);
    
    // Optionally, clear the form fields
    document.getElementById('orderForm').reset();
    
    alert('Your order is completed. Your message has been saved!');
});


// Function to contact form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();

  // Get form data
  const name = document.getElementById('contact-name').value;
  const message = document.getElementById('contact-message').value;

  // Check if data is not empty
  if (name && message) {
      // Create an object to store the contact information
      const contactInfo = {
          name: name,
          message: message,
          timestamp: new Date().toISOString()
      };

      // Save to localStorage
      localStorage.setItem('contactInfo', JSON.stringify(contactInfo));

      // Optionally, display a success message
      alert('Your message has been saved. Thank you for contacting us!');

      // Clear form fields
      document.getElementById('contact-form').reset();
  } else {
      alert('Please fill out both fields.');
  }
});
