function submitContactForm() {
    document.getElementById('contact-form').addEventListener('submit', function(e) {
        e.preventDefault();
        emailjs.sendForm('contact_service', 'contact_form', this)
            .then(() => {
                console.log('SUCCESS!');
            }, (error) => {
                console.log('FAILED...', error);
            });
    });
}

export { submitContactForm };