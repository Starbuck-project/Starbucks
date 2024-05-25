
document.getElementById('contact-form').addEventListener('submit', function(event) {
     event.preventDefault();

        const name = document.getElementById('contact-name').value;
        const message = document.getElementById('contact-message').value;

        if (name && message) {
            const contactData = {
                 name: name,
                 message: message
                };

            localStorage.setItem('contactData', JSON.stringify(contactData));
            alert('Your message has been saved!');
            } else {
            alert('Please fill in all fields.');
            }
});

