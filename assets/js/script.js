$(document).ready(function() {
    $(".order-btn").click(function() {
      var itemName = $(this).closest('.menu-item').find('h4').text();
      var itemPrice = $(this).closest('.menu-item').find('strong').text();
      alert("Order placed! You ordered: " + itemName + " for " + itemPrice);
      // Add further processing logic here, such as sending data to a server
    });
  });

