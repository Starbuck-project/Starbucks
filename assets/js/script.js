// order comfirm
$(document).ready(function() {
    $(".order-btn").click(function() {
      var itemName = $(this).closest('.menu-item').find('h4').text();
      var itemPrice = $(this).closest('.menu-item').find('strong').text();
      alert("Confirm your order item. "+"You ordered : " + itemName + " for " + itemPrice + ".");
    });
  });


  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get the values from the form fields
    const name = document.getElementById('contact-name').value;
    const message = document.getElementById('contact-message').value;
    
    // Save the values to localStorage
    localStorage.setItem('contactName', name);
    localStorage.setItem('contactMessage', message);
    
    // Optionally, clear the form fields
    document.getElementById('contact-form').reset();
    
    alert('Your message has been saved!');
});

