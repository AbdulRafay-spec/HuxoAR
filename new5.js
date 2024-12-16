document.getElementById('contact').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent default form submission

    // Show success message
    alert('Message Sent! Thank you for contacting HuxoAR.');

    // Scroll back to the home section
    document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
});




