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

