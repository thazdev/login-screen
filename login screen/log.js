document.addEventListener("DOMContentLoaded", function() {
    const inputFields = document.querySelectorAll('.input-field');

    inputFields.forEach(function(input) {
        input.addEventListener('focus', function() {
            input.classList.add('focused');
        });

        input.addEventListener('blur', function() {
            input.classList.remove('focused');
        });
    });
});
