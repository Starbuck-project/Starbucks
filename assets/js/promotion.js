$(document).ready(function() {
    // Handle product selection change
    $('#product').change(function() {
        const product = $(this).val();
        const promotionGroup = $('#promotionGroup');
        const promotionHelp = $('#promotionHelp');
        
        // Show promotion input and message based on selected product
        if (product === "coffee") {
            promotionGroup.show();
            promotionHelp.text('Enter code COFFEE20 for 20% off.');
        } else if (product === "tea") {
            promotionGroup.show();
            promotionHelp.text('Enter code TEA10 for 10% off.');
        } else if (product === "mug") {
            promotionGroup.show();
            promotionHelp.text('Enter code MUG5 for $5 off.');
        } else if (product === "T-shart") {
            promotionGroup.show();
            promotionHelp.text('Enter code T-shart for $15 off.');
        } else {
            promotionGroup.hide();
            promotionHelp.text('');
        }
    });

    // Handle promotion button click
    $('#applyPromotion').click(function() {
        const product = $('#product').val();
        const promotionCode = $('#promotion').val().trim();
        let validCode = false;
        let discountMessage = '';

        // Validate promotion code based on selected product
        switch(product) {
            case 'coffee':
                if (promotionCode === 'COFFEE20') {
                    validCode = true;
                    discountMessage = 'You have received 20% off your coffee!';
                }
                break;
            case 'tea':
                if (promotionCode === 'TEA10') {
                    validCode = true;
                    discountMessage = 'You have received 10% off your tea!';
                }
                break;
            case 'T-shart':
                if (promotionCode === 'T-SHART15') {
                    validCode = true;
                    discountMessage = 'You have received 15% off your T-shart!';
                }
                break;
            case 'mug':
                if (promotionCode === 'MUG5') {
                    validCode = true;
                    discountMessage = 'You have received $5 off your mug!';
                }
                break;
            default:
                validCode = false;
        }

        // Display appropriate message based on validation
        if (validCode) {
            alert(discountMessage);
        } else {
            alert('Invalid promotion code. Please try again.');
        }
    });
});
