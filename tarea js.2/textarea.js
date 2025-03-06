
       document.addEventListener('DOMContentLoaded', function() {
        const textarea = document.getElementById('myTextarea');
        const counter = document.getElementById('counter');

        textarea.addEventListener('input', function() {
            const charCount = textarea.value.length; 
            counter.textContent = charCount + ' caracteres'; 
        });
    });
