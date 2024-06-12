      // Document ready function to ensure the DOM is fully loaded before executing scripts
      $(document).ready(function() {
      // Attach click event handler to elements with the class 'order-btn'
      $(".order-btn").click(function() {
      // Retrieve the item name and price from the closest parent element with class 'menu-item'
      var itemName = $(this).closest('.menu-item').find('h4').text();
      var itemPrice = $(this).closest('.menu-item').find('strong').text();
      // Display an alert to confirm the order with the item name and price
      alert("Confirm your order item. "+"You ordered : " + itemName + " for " + itemPrice + ".");
    });
  });

    // Add submit event listener to the form with the ID 'orderForm'
    document.getElementById('orderForm').addEventListener('submit', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();
    
    // Retrieve form input values
    const orderName = document.getElementById('itemName').value;
    const orderPrice = document.getElementById('itemPrice').value;
    const cusName = document.getElementById('customerName').value;
    const cusEmail = document.getElementById('customerEmail').value;
    const cusPhone = document.getElementById('customerPhone').value;
    const orderNumber = document.getElementById('quantity').value;
    const cusAddress = document.getElementById('customerAddress').value;
    
    // Store the form data in localStorage
    localStorage.setItem('itemName', orderName);
    localStorage.setItem('itemPrice', orderPrice);
    localStorage.setItem('customerName', cusName);
    localStorage.setItem('customerEmail', cusEmail);
    localStorage.setItem('customerPhone', cusPhone);
    localStorage.setItem('quantity', orderNumber);
    localStorage.setItem('customerAddress', cusAddress);
    
    // Reset the form after submission
    document.getElementById('orderForm').reset();
    // Display an alert indicating the order is completed and data has been saved
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
